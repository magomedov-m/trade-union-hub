import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL_ACCOUNT;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY_ACCOUNT;

const supabaseAccount = createClient(supabaseUrl, supabaseKey);

export default supabaseAccount;