import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qbgaibkzsqyvnusbcycd.supabase.co";
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFiZ2FpYmt6c3F5dm51c2JjeWNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyMTkzMDAsImV4cCI6MjA2Njc5NTMwMH0.OekM2Fw8p3s5EhK6-_YxsUg60zRiOup-sPcDhkt0c0k';
export const supabase = createClient(supabaseUrl, supabaseKey);
