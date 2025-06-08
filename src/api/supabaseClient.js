import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uyxfkvakjwcjkcaiyuuw.supabase.co";
const anonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5eGZrdmFrandjamtjYWl5dXV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzMjQwODcsImV4cCI6MjA2NDkwMDA4N30.jA5BTZrw6dGjQaG9Fj3K_GxIcQtAl3RuKdipA9b2RkU"

const supabase = createClient(supabaseUrl, anonKey);

export default supabase;