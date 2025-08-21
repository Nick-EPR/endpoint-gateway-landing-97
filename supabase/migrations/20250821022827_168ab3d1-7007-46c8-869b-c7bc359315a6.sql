-- Fix Critical Security Issues

-- 1. Remove the unrestricted "Allow read access to secrets" policy 
-- This policy allows any authenticated user to read all secrets, which is a critical security issue
DROP POLICY IF EXISTS "Allow read access to secrets" ON public.secrets;

-- 2. Update database functions to include search_path security setting
-- This prevents potential SQL injection through search_path manipulation

-- Update handle_new_user function
CREATE OR REPLACE FUNCTION public.handle_new_user()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path = ''
AS $function$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, avatar_url)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'avatar_url');
  RETURN NEW;
END;
$function$;

-- Update get_secret function
CREATE OR REPLACE FUNCTION public.get_secret(secret_name text)
 RETURNS text
 LANGUAGE sql
 SECURITY DEFINER
 SET search_path = ''
AS $function$
  SELECT value FROM public.secrets WHERE name = secret_name;
$function$;