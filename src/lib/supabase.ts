import { createClient } from "@supabase/supabase-js";

// Real-time backend (see PRD Part 1). Configure keys in .env.local.
const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!url || !anonKey) {
  // Non-fatal during scaffolding — no queries are made yet.
  console.warn("[supabase] VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY not set.");
}

export const supabase = createClient(url ?? "", anonKey ?? "");
