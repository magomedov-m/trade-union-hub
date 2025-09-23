import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL_CONNECT;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY_CONNECT;

const supabaseConnect = createClient(supabaseUrl, supabaseKey);

export default supabaseConnect;