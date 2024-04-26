import { createClient } from "@supabase/supabase-js";
//import { REACT_APP_SUPABASE_URL, REACT_APP_SUPABASE_KEY } from "./constants";

export const supabase = createClient(
  import.meta.env.VITE_APP_SUPABASE_URL,
  import.meta.env.VITE_APP_SUPABASE_ANON_KEY
);
