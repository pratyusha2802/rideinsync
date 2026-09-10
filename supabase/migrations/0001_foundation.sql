-- ============================================================================
-- RideInSync — Data Model Foundation (0001)
-- ----------------------------------------------------------------------------
-- Single shared foundation for all 7 flows in PRD/ridepod_solution_space_v2.md.
-- Stack: Supabase Postgres (React/Vite PWA frontend). Extends ARCHITECTURE.md §3.
--
-- Conventions:
--   * uuid PKs via gen_random_uuid() (pgcrypto)
--   * created_at / updated_at timestamptz; updated_at maintained by trigger
--   * Postgres enums for every role/status/kind
--   * RLS ON for every table; access is membership-scoped via is_ride_member()
--   * cross-member writes gated on user_id = auth.uid()
--
-- Ownership / who-alters-what: see docs/DATA_MODEL.md.
-- Seam tables (coordinate before ALTER): profiles, rides, ride_members,
--   rider_positions, ride_events, event_acknowledgements.
-- ============================================================================

create extension if not exists pgcrypto;

-- ---------------------------------------------------------------------------
-- Enums
-- ---------------------------------------------------------------------------
create type member_role        as enum ('leader', 'co_leader', 'sweep', 'rider');
create type ride_status         as enum ('draft', 'active', 'ended');
create type member_status       as enum ('riding', 'stopped', 'rejoining', 'leaving', 'arrived');
create type event_type          as enum ('sos', 'hazard', 'route_change', 'stop', 'rejoin',
                                         'leave', 'regroup', 'pitstop', 'separation', 'arrived');
create type stoppage_reason     as enum ('fuel', 'rest', 'mechanical', 'traffic', 'medical', 'other');
create type join_request_status as enum ('pending', 'approved', 'rejected');
create type document_type       as enum ('license', 'permit', 'insurance', 'registration', 'other');
create type visibility          as enum ('pod', 'lead_sweep', 'private');
create type sos_kind            as enum ('manual', 'auto');
create type ack_state           as enum ('unseen', 'seen');
create type pitstop_kind        as enum ('planned', 'dynamic');
create type consent_policy      as enum ('tnc', 'privacy', 'medical', 'dpdp');

-- ---------------------------------------------------------------------------
-- Shared helper: keep updated_at fresh
-- ---------------------------------------------------------------------------
create or replace function set_updated_at() returns trigger
language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- ============================================================================
-- CORE / SHARED (seam tables)
-- ============================================================================

-- profiles — one per auth.users (created by a trigger on signup, below)
create table profiles (
  id           uuid primary key references auth.users (id) on delete cascade,
  display_name text not null default 'Rider',
  phone        text,
  avatar_url   text,
  is_guest     boolean not null default false,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

-- Provision a profile automatically for every new auth user (Google or guest).
create or replace function handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, display_name, is_guest)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'display_name', 'Rider'),
    coalesce((new.raw_user_meta_data ->> 'is_guest')::boolean, new.is_anonymous, false)
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function handle_new_user();

-- rides
create table rides (
  id                         uuid primary key default gen_random_uuid(),
  code                       text unique not null,
  name                       text not null,
  leader_id                  uuid not null references profiles (id),
  city                       text,
  start_point                jsonb,          -- { lat, lng, label }
  destination                jsonb,          -- { lat, lng, label }
  route                      jsonb,          -- encoded polyline / waypoints (Google Maps)
  guidelines                 text,
  permits                    jsonb,          -- free-form permit metadata
  member_capacity            int check (member_capacity between 1 and 50),
  fee_amount                 numeric(10, 2), -- UI-only in v1, no payment processing
  gps_interval_seconds       int not null default 30,
  separation_distance_km     numeric(6, 2) not null default 2.0,
  separation_time_seconds    int not null default 300,
  default_location_visibility visibility not null default 'pod',
  status                     ride_status not null default 'draft',
  retention_until            timestamptz,
  is_demo                    boolean not null default false,
  created_at                 timestamptz not null default now(),
  updated_at                 timestamptz not null default now(),
  ended_at                   timestamptz
);
create index rides_leader_idx on rides (leader_id);
create index rides_status_idx on rides (status);
create trigger rides_set_updated_at before update on rides
  for each row execute function set_updated_at();

-- ride_members — who is in a ride
create table ride_members (
  id                 uuid primary key default gen_random_uuid(),
  ride_id            uuid not null references rides (id) on delete cascade,
  user_id            uuid not null references profiles (id) on delete cascade,
  role               member_role not null default 'rider',
  status             member_status not null default 'riding',
  location_visibility visibility,            -- null = inherit ride default
  joined_at          timestamptz not null default now(),
  last_seen_at       timestamptz,
  unique (ride_id, user_id)
);
create index ride_members_ride_idx on ride_members (ride_id);
create index ride_members_user_idx on ride_members (user_id);
-- At most one leader and one sweep per ride (co_leader/rider unconstrained).
create unique index ride_one_leader_idx on ride_members (ride_id) where role = 'leader';
create unique index ride_one_sweep_idx  on ride_members (ride_id) where role = 'sweep';

-- membership helper — SECURITY DEFINER so RLS policies can call it without recursion
create or replace function is_ride_member(rid uuid) returns boolean
language sql security definer stable set search_path = public as $$
  select exists (
    select 1 from ride_members m
    where m.ride_id = rid and m.user_id = auth.uid()
  );
$$;

create or replace function is_ride_leader(rid uuid) returns boolean
language sql security definer stable set search_path = public as $$
  select exists (
    select 1 from ride_members m
    where m.ride_id = rid and m.user_id = auth.uid()
      and m.role in ('leader', 'co_leader')
  );
$$;

-- True if the current user shares any ride with `other`. Used so members can
-- read each other's profile (names/avatars on the roster + map). SECURITY
-- DEFINER to avoid RLS recursion on ride_members.
create or replace function shares_ride_with(other uuid) returns boolean
language sql security definer stable set search_path = public as $$
  select exists (
    select 1 from ride_members me
    join ride_members them on them.ride_id = me.ride_id
    where me.user_id = auth.uid() and them.user_id = other
  );
$$;

-- rider_positions — append-only GPS history
create table rider_positions (
  id          bigserial primary key,
  ride_id     uuid not null references rides (id) on delete cascade,
  user_id     uuid not null references profiles (id) on delete cascade,
  lat         double precision not null,
  lng         double precision not null,
  heading     double precision,
  speed       double precision,
  accuracy    double precision,
  recorded_at timestamptz not null default now()
);
create index rider_positions_latest_idx
  on rider_positions (ride_id, user_id, recorded_at desc);

-- ride_events — signals (sos / hazard / route_change / stop / pitstop / separation / ...)
create table ride_events (
  id         uuid primary key default gen_random_uuid(),
  ride_id    uuid not null references rides (id) on delete cascade,
  user_id    uuid not null references profiles (id),
  type       event_type not null,
  payload    jsonb,
  created_at timestamptz not null default now()
);
create index ride_events_ride_idx on ride_events (ride_id, created_at desc);

-- event_acknowledgements — seen/unseen delivery state (shared: Flows 4 & 5)
create table event_acknowledgements (
  id           uuid primary key default gen_random_uuid(),
  event_id     uuid not null references ride_events (id) on delete cascade,
  user_id      uuid not null references profiles (id) on delete cascade,
  state        ack_state not null default 'unseen',
  delivered_at timestamptz not null default now(),
  seen_at      timestamptz,
  unique (event_id, user_id)
);
create index event_ack_user_idx on event_acknowledgements (user_id, state);

-- ============================================================================
-- FLOW 1 — Onboarding (Mithul)
-- ============================================================================

create table emergency_contacts (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references profiles (id) on delete cascade,
  ordinal    smallint not null check (ordinal in (1, 2)),
  name       text not null,
  phone      text not null,
  relation   text,
  created_at timestamptz not null default now(),
  unique (user_id, ordinal)
);

create table medical_profiles (
  user_id     uuid primary key references profiles (id) on delete cascade,
  blood_type  text,
  allergies   text,
  medications text,
  notes       text,
  updated_at  timestamptz not null default now()
);
create trigger medical_profiles_set_updated_at before update on medical_profiles
  for each row execute function set_updated_at();

create table vehicles (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references profiles (id) on delete cascade,
  make_model text not null,
  plate      text,
  color      text,
  details    jsonb,
  created_at timestamptz not null default now()
);
create index vehicles_user_idx on vehicles (user_id);

create table documents (
  id           uuid primary key default gen_random_uuid(),
  user_id      uuid not null references profiles (id) on delete cascade,
  type         document_type not null,
  storage_path text not null,              -- object path in Supabase Storage
  verified     boolean not null default false,
  uploaded_at  timestamptz not null default now()
);
create index documents_user_idx on documents (user_id);

create table consent_records (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references profiles (id) on delete cascade,
  policy     consent_policy not null,
  version    text not null,
  granted_at timestamptz not null default now(),
  unique (user_id, policy, version)
);

create table route_stops (
  id         uuid primary key default gen_random_uuid(),
  ride_id    uuid not null references rides (id) on delete cascade,
  seq        int not null,
  name       text not null,
  location   jsonb,                          -- { lat, lng }
  kind       text,                           -- fuel / food / rest / scenic / ...
  created_at timestamptz not null default now(),
  unique (ride_id, seq)
);

create table ride_join_requests (
  id           uuid primary key default gen_random_uuid(),
  ride_id      uuid not null references rides (id) on delete cascade,
  user_id      uuid not null references profiles (id) on delete cascade,
  status       join_request_status not null default 'pending',
  requested_at timestamptz not null default now(),
  decided_at   timestamptz,
  decided_by   uuid references profiles (id),
  unique (ride_id, user_id)
);
create index join_requests_ride_idx on ride_join_requests (ride_id, status);

-- ============================================================================
-- FLOW 2 — Dashboard (Mithul)
-- ============================================================================

create table user_stats (
  user_id         uuid primary key references profiles (id) on delete cascade,
  rides_completed int not null default 0,
  distance_m      bigint not null default 0,
  rides_led       int not null default 0,
  updated_at      timestamptz not null default now()
);
create trigger user_stats_set_updated_at before update on user_stats
  for each row execute function set_updated_at();

create table badges (
  key         text primary key,             -- e.g. 'first_ride', 'century', 'safe_sweep'
  name        text not null,
  description text,
  icon        text
);

create table user_badges (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references profiles (id) on delete cascade,
  badge_key  text not null references badges (key),
  ride_id    uuid references rides (id) on delete set null,
  awarded_at timestamptz not null default now(),
  unique (user_id, badge_key)
);
create index user_badges_user_idx on user_badges (user_id);

create table user_preferences (
  user_id            uuid primary key references profiles (id) on delete cascade,
  haptics            boolean not null default true,
  voice_notifications boolean not null default true,
  push_notifications boolean not null default true,
  updated_at         timestamptz not null default now()
);
create trigger user_preferences_set_updated_at before update on user_preferences
  for each row execute function set_updated_at();

-- Per-data-type visibility controls (gap-analysis P0)
create table privacy_settings (
  user_id             uuid primary key references profiles (id) on delete cascade,
  medical             visibility not null default 'lead_sweep',
  emergency_contacts  visibility not null default 'lead_sweep',
  location_history    visibility not null default 'pod',
  updated_at          timestamptz not null default now()
);
create trigger privacy_settings_set_updated_at before update on privacy_settings
  for each row execute function set_updated_at();

-- ============================================================================
-- FLOW 4 — Signals & Haptics (Pratyusha)
-- ============================================================================

create table stoppage_reports (
  id              uuid primary key default gen_random_uuid(),
  ride_id         uuid not null references rides (id) on delete cascade,
  user_id         uuid not null references profiles (id) on delete cascade,
  reason          stoppage_reason not null,
  voice_note_path text,                      -- Supabase Storage path for "other"
  created_at      timestamptz not null default now()
);
create index stoppage_reports_ride_idx on stoppage_reports (ride_id, created_at desc);

create table separation_events (
  id            uuid primary key default gen_random_uuid(),
  ride_id       uuid not null references rides (id) on delete cascade,
  user_id       uuid not null references profiles (id) on delete cascade,
  level         smallint not null check (level in (1, 2)),  -- 1 distance, 2 time
  distance_km   numeric(6, 2),
  seconds_behind int,
  created_at    timestamptz not null default now()
);
create index separation_events_ride_idx on separation_events (ride_id, created_at desc);

create table pitstops (
  id         uuid primary key default gen_random_uuid(),
  ride_id    uuid not null references rides (id) on delete cascade,
  created_by uuid not null references profiles (id),
  kind       pitstop_kind not null default 'dynamic',
  location   jsonb,
  note       text,
  created_at timestamptz not null default now()
);
create index pitstops_ride_idx on pitstops (ride_id, created_at desc);

-- ============================================================================
-- FLOW 5 — SOS (Shubham)
-- ============================================================================

create table sos_alerts (
  id           uuid primary key default gen_random_uuid(),
  ride_id      uuid not null references rides (id) on delete cascade,
  user_id      uuid not null references profiles (id) on delete cascade,
  kind         sos_kind not null,
  payload      jsonb,                         -- last position, medical snapshot ref
  triggered_at timestamptz not null default now(),
  resolved_at  timestamptz,
  resolved_by  uuid references profiles (id)
);
create index sos_alerts_ride_idx on sos_alerts (ride_id, triggered_at desc);

-- ============================================================================
-- FLOW 6 — Ending Journey (Gaurav)
-- ============================================================================

create table ride_summaries (
  ride_id          uuid primary key references rides (id) on delete cascade,
  total_distance_m bigint not null default 0,
  total_time_s     int not null default 0,
  break_time_s     int not null default 0,
  avg_speed        numeric(6, 2),
  ended_at         timestamptz not null default now()
);

create table ride_feedback (
  id           uuid primary key default gen_random_uuid(),
  ride_id      uuid not null references rides (id) on delete cascade,
  user_id      uuid not null references profiles (id) on delete cascade,
  answers      jsonb,                         -- format TBD (Gaurav)
  reached_home boolean,
  created_at   timestamptz not null default now(),
  unique (ride_id, user_id)
);

-- ============================================================================
-- FLOW 7 — GTM / Demo & Analytics (Mithul + all)
-- ============================================================================

create table analytics_events (
  id         bigserial primary key,
  user_id    uuid references profiles (id) on delete set null,
  name       text not null,
  props      jsonb,
  created_at timestamptz not null default now()
);
create index analytics_events_name_idx on analytics_events (name, created_at desc);

-- ============================================================================
-- Join RPCs — non-members can't select a ride by code (RLS hides it), so join
-- and approval flow through SECURITY DEFINER functions.
-- ============================================================================

-- Request to join by code. Returns the request id. Auto-approves for demo rides.
create or replace function request_join_ride(join_code text)
returns uuid
language plpgsql security definer set search_path = public as $$
declare
  r        rides%rowtype;
  req_id   uuid;
begin
  select * into r from rides where code = join_code and status <> 'ended';
  if r.id is null then
    raise exception 'invalid or ended ride';
  end if;

  insert into ride_join_requests (ride_id, user_id, status)
  values (r.id, auth.uid(), case when r.is_demo then 'approved' else 'pending' end)
  on conflict (ride_id, user_id) do update set status = ride_join_requests.status
  returning id into req_id;

  -- Demo rides: materialize membership immediately for a frictionless walkthrough.
  if r.is_demo then
    insert into ride_members (ride_id, user_id, role, status)
    values (r.id, auth.uid(), 'rider', 'riding')
    on conflict (ride_id, user_id) do nothing;
  end if;

  return req_id;
end;
$$;

-- Leader/co-leader approves a pending request → creates the membership atomically.
create or replace function approve_join_request(request_id uuid)
returns uuid                                   -- returns ride_id
language plpgsql security definer set search_path = public as $$
declare
  req ride_join_requests%rowtype;
begin
  select * into req from ride_join_requests where id = request_id;
  if req.id is null then raise exception 'no such request'; end if;
  if not is_ride_leader(req.ride_id) then raise exception 'not authorized'; end if;

  update ride_join_requests
    set status = 'approved', decided_at = now(), decided_by = auth.uid()
    where id = request_id;

  insert into ride_members (ride_id, user_id, role, status)
  values (req.ride_id, req.user_id, 'rider', 'riding')
  on conflict (ride_id, user_id) do nothing;

  return req.ride_id;
end;
$$;

-- ============================================================================
-- Row-Level Security
-- ============================================================================

alter table profiles              enable row level security;
alter table rides                 enable row level security;
alter table ride_members          enable row level security;
alter table rider_positions       enable row level security;
alter table ride_events           enable row level security;
alter table event_acknowledgements enable row level security;
alter table emergency_contacts    enable row level security;
alter table medical_profiles      enable row level security;
alter table vehicles              enable row level security;
alter table documents             enable row level security;
alter table consent_records       enable row level security;
alter table route_stops           enable row level security;
alter table ride_join_requests    enable row level security;
alter table user_stats            enable row level security;
alter table badges                enable row level security;
alter table user_badges           enable row level security;
alter table user_preferences      enable row level security;
alter table privacy_settings      enable row level security;
alter table stoppage_reports      enable row level security;
alter table separation_events     enable row level security;
alter table pitstops              enable row level security;
alter table sos_alerts            enable row level security;
alter table ride_summaries        enable row level security;
alter table ride_feedback         enable row level security;
alter table analytics_events      enable row level security;

-- profiles: read your own and any co-member of a ride you're in (so the roster
-- and live map can show fellow riders' names/avatars). Update only your own.
create policy profiles_select on profiles
  for select using (id = auth.uid() or shares_ride_with(id));
create policy profiles_update_self on profiles
  for update using (id = auth.uid());

-- rides: members or leader can read; only the leader inserts/updates their ride.
create policy rides_select on rides
  for select using (is_ride_member(id) or leader_id = auth.uid());
create policy rides_insert on rides
  for insert with check (leader_id = auth.uid());
create policy rides_update on rides
  for update using (leader_id = auth.uid());

-- ride_members: members read the roster; you insert/update only your own row
-- (membership creation for others goes through the approve_join_request RPC).
create policy ride_members_select on ride_members
  for select using (is_ride_member(ride_id));
create policy ride_members_write_self on ride_members
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());

-- Generic per-ride pattern: read if a member; write only your own rows.
-- rider_positions
create policy positions_select on rider_positions
  for select using (is_ride_member(ride_id));
create policy positions_insert on rider_positions
  for insert with check (user_id = auth.uid() and is_ride_member(ride_id));

-- ride_events
create policy events_select on ride_events
  for select using (is_ride_member(ride_id));
create policy events_insert on ride_events
  for insert with check (user_id = auth.uid() and is_ride_member(ride_id));

-- event_acknowledgements: you see/ack your own deliveries.
create policy event_ack_rw on event_acknowledgements
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());

-- Personal profile data (Flow 1/2): owner-only by default. Ride-scoped reads
-- of medical/emergency contacts for lead/sweep are done via a SECURITY DEFINER
-- view/RPC in Flow 5's branch, honoring privacy_settings — not a broad policy here.
create policy emergency_contacts_owner on emergency_contacts
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy medical_profiles_owner on medical_profiles
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy vehicles_owner on vehicles
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy documents_owner on documents
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy consent_records_owner on consent_records
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy user_stats_owner on user_stats
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy user_badges_owner on user_badges
  for select using (user_id = auth.uid());
create policy user_preferences_owner on user_preferences
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy privacy_settings_owner on privacy_settings
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());

-- badges: public catalog, readable by any authenticated user.
create policy badges_read on badges
  for select using (auth.role() = 'authenticated');

-- route_stops: any ride member reads; leader manages.
create policy route_stops_select on route_stops
  for select using (is_ride_member(ride_id));
create policy route_stops_manage on route_stops
  for all using (is_ride_leader(ride_id)) with check (is_ride_leader(ride_id));

-- ride_join_requests: you see your own; the leader sees all for their ride.
create policy join_requests_select on ride_join_requests
  for select using (user_id = auth.uid() or is_ride_leader(ride_id));
create policy join_requests_insert_self on ride_join_requests
  for insert with check (user_id = auth.uid());

-- Signals (Flow 4): members read; you write only your own.
create policy stoppage_reports_select on stoppage_reports
  for select using (is_ride_member(ride_id));
create policy stoppage_reports_insert on stoppage_reports
  for insert with check (user_id = auth.uid() and is_ride_member(ride_id));
create policy separation_events_select on separation_events
  for select using (is_ride_member(ride_id));
create policy separation_events_insert on separation_events
  for insert with check (is_ride_member(ride_id));
create policy pitstops_select on pitstops
  for select using (is_ride_member(ride_id));
create policy pitstops_manage on pitstops
  for all using (is_ride_leader(ride_id)) with check (is_ride_leader(ride_id));

-- SOS (Flow 5): members read; you raise your own.
create policy sos_select on sos_alerts
  for select using (is_ride_member(ride_id));
create policy sos_insert on sos_alerts
  for insert with check (user_id = auth.uid() and is_ride_member(ride_id));

-- Ending (Flow 6): members read summaries; you write your own feedback.
create policy ride_summaries_select on ride_summaries
  for select using (is_ride_member(ride_id));
create policy ride_feedback_select on ride_feedback
  for select using (is_ride_member(ride_id));
create policy ride_feedback_write_self on ride_feedback
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());

-- analytics_events: insert-only from the client; no read back for now.
create policy analytics_insert on analytics_events
  for insert with check (true);

-- ============================================================================
-- Realtime — publish the tables the live map/roster subscribe to.
-- ============================================================================
alter publication supabase_realtime add table rider_positions;
alter publication supabase_realtime add table ride_members;
alter publication supabase_realtime add table ride_events;
alter publication supabase_realtime add table sos_alerts;
alter publication supabase_realtime add table event_acknowledgements;
