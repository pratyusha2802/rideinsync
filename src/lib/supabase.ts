import { createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

// Real-time backend (see ARCHITECTURE.md). Configure keys in .env.local.
const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!url || !anonKey) {
  // Non-fatal during scaffolding — no queries are made yet.
  console.warn("[supabase] VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY not set.");
}

// Typed against the schema in supabase/migrations/0001_foundation.sql.
export const supabase = createClient<Database>(url ?? "", anonKey ?? "");
