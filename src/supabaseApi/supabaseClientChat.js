import { createClient } from "@supabase/supabase-js";

const supabaseUrlChat = process.env.NEXT_PUBLIC_SUPABASE_URL_CHAT;
const supabaseKeyChat = process.env.NEXT_PUBLIC_SUPABASE_KEY_CHAT;

const supabaseConnect = createClient(supabaseUrlChat, supabaseKeyChat);

export default supabaseConnect;