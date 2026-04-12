-- Fix 1: Restrict user_roles table - only admins can manage roles
-- Block all authenticated users from inserting/updating/deleting roles
-- Only existing admins (verified via has_role) can manage roles

CREATE POLICY "Only admins can insert roles"
  ON public.user_roles
  FOR INSERT
  TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can update roles"
  ON public.user_roles
  FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can delete roles"
  ON public.user_roles
  FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- Fix 2: Lock down ai_usage_logs - only service_role can insert (from edge functions)
-- Deny all authenticated INSERT/UPDATE/DELETE

CREATE POLICY "Service role can insert usage logs"
  ON public.ai_usage_logs
  FOR INSERT
  TO service_role
  WITH CHECK (true);

CREATE POLICY "Service role can update usage logs"
  ON public.ai_usage_logs
  FOR UPDATE
  TO service_role
  USING (true);

CREATE POLICY "Service role can delete usage logs"
  ON public.ai_usage_logs
  FOR DELETE
  TO service_role
  USING (true);