import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zzwncbelvzvtvenfxjth.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6d25jYmVsdnp2dHZlbmZ4anRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI1MDgyMDcsImV4cCI6MjA4ODA4NDIwN30.xThtpYVauwTqFTFeZI-2kb_MD3N6CS7LS5iZjxXgSZo";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const getServiceVideoUrl = (fileName: string) => {
  const { data } = supabase.storage
    .from("service-videos")
    .getPublicUrl(fileName);
  return data.publicUrl;
};
