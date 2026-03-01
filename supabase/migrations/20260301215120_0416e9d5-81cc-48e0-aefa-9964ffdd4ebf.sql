-- Add read-only SELECT policy for authenticated users on ai_settings
CREATE POLICY "Authenticated users can read ai_settings"
  ON public.ai_settings
  FOR SELECT TO authenticated
  USING (true);