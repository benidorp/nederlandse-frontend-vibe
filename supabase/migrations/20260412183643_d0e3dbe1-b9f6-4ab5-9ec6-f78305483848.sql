-- Add admin-only RLS policies to ai_settings table
CREATE POLICY "Admins can read ai_settings"
  ON public.ai_settings
  FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert ai_settings"
  ON public.ai_settings
  FOR INSERT
  TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update ai_settings"
  ON public.ai_settings
  FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete ai_settings"
  ON public.ai_settings
  FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- Also allow service_role (edge functions) to read settings
CREATE POLICY "Service role can read ai_settings"
  ON public.ai_settings
  FOR SELECT
  TO service_role
  USING (true);