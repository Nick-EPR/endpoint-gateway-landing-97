// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://enqatyvjcztoicadviix.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVucWF0eXZqY3p0b2ljYWR2aWl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAxNjM4MjksImV4cCI6MjA1NTczOTgyOX0.UPWygnKf7LPB1ZqABQyh-lwlsWD43c9LD29FMDmBT2M";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);