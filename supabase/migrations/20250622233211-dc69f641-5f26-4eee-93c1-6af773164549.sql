
-- Phase 1: Critical Security Fixes

-- 1. Secure the secrets table with proper RLS policies
ALTER TABLE public.secrets ENABLE ROW LEVEL SECURITY;

-- Create policy to prevent any public access to secrets
CREATE POLICY "No public access to secrets" ON public.secrets
FOR ALL USING (false);

-- Create policy for service role access only (for edge functions)
CREATE POLICY "Service role can manage secrets" ON public.secrets
FOR ALL TO service_role USING (true);

-- 2. Add RLS policies to contact_submissions table
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Only authenticated admin users can view contact submissions
CREATE POLICY "Admin can view contact submissions" ON public.contact_submissions
FOR SELECT TO authenticated 
USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE id = auth.uid() 
    AND email IN ('admin@lifetimeepr.com', 'nick@lifetimeepr.com')
  )
);

-- Only the system can insert contact submissions
CREATE POLICY "System can insert contact submissions" ON public.contact_submissions
FOR INSERT WITH CHECK (true);

-- 3. Add RLS policies to whitepaper_downloads table  
ALTER TABLE public.whitepaper_downloads ENABLE ROW LEVEL SECURITY;

-- Only authenticated admin users can view whitepaper downloads
CREATE POLICY "Admin can view whitepaper downloads" ON public.whitepaper_downloads
FOR SELECT TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE id = auth.uid() 
    AND email IN ('admin@lifetimeepr.com', 'nick@lifetimeepr.com')
  )
);

-- Only the system can insert whitepaper downloads
CREATE POLICY "System can insert whitepaper downloads" ON public.whitepaper_downloads
FOR INSERT WITH CHECK (true);

-- 4. Secure the profiles table properly
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Users can only view their own profile
CREATE POLICY "Users can view own profile" ON public.profiles
FOR SELECT TO authenticated
USING (auth.uid() = id);

-- Users can update their own profile
CREATE POLICY "Users can update own profile" ON public.profiles  
FOR UPDATE TO authenticated
USING (auth.uid() = id);

-- System can insert profiles (for new user creation)
CREATE POLICY "System can insert profiles" ON public.profiles
FOR INSERT WITH CHECK (true);

-- 5. Add input validation constraints
ALTER TABLE public.contact_submissions 
ADD CONSTRAINT valid_email_format CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');

ALTER TABLE public.whitepaper_downloads
ADD CONSTRAINT valid_email_format CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');

ALTER TABLE public.profiles
ADD CONSTRAINT valid_email_format CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');

-- 6. Add length constraints to prevent potential DoS attacks
ALTER TABLE public.contact_submissions 
ADD CONSTRAINT message_length_limit CHECK (length(message) <= 5000),
ADD CONSTRAINT name_length_limit CHECK (length(full_name) <= 100),
ADD CONSTRAINT company_length_limit CHECK (length(company) <= 200);

ALTER TABLE public.whitepaper_downloads
ADD CONSTRAINT name_length_limit CHECK (length(name) <= 100),
ADD CONSTRAINT company_length_limit CHECK (length(company) <= 200);
