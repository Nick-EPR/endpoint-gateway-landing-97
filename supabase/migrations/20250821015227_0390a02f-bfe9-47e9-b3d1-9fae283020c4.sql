-- Remove the overly permissive policy that allows all authenticated users to view contact submissions
DROP POLICY IF EXISTS "Allow authenticated users to view contact submissions" ON public.contact_submissions;

-- The existing "Admin can view contact submissions" policy already provides proper admin-only access
-- No additional policies needed - contact submissions should only be viewable by admins