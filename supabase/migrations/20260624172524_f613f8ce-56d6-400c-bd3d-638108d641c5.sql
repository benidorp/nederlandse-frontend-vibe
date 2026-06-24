
-- Restrict writes to admins only for sensitive AI tables

-- ai_generated_pages: only admins can insert/update/delete; published reads remain public
DROP POLICY IF EXISTS "Users can insert own pages" ON public.ai_generated_pages;
DROP POLICY IF EXISTS "Users can update own pages" ON public.ai_generated_pages;
DROP POLICY IF EXISTS "Users can delete own pages" ON public.ai_generated_pages;
DROP POLICY IF EXISTS "Users can read own pages" ON public.ai_generated_pages;

CREATE POLICY "Admins can insert pages" ON public.ai_generated_pages
  FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin') AND auth.uid() = user_id);

CREATE POLICY "Admins can update pages" ON public.ai_generated_pages
  FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete pages" ON public.ai_generated_pages
  FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can read all pages" ON public.ai_generated_pages
  FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- ai_generated_content: admin-only writes
DROP POLICY IF EXISTS "Users can insert own ai_generated_content" ON public.ai_generated_content;
DROP POLICY IF EXISTS "Users can update own ai_generated_content" ON public.ai_generated_content;
DROP POLICY IF EXISTS "Users can delete own ai_generated_content" ON public.ai_generated_content;
DROP POLICY IF EXISTS "Users can read own ai_generated_content" ON public.ai_generated_content;

CREATE POLICY "Admins can insert ai_generated_content" ON public.ai_generated_content
  FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin') AND auth.uid() = user_id);

CREATE POLICY "Admins can update ai_generated_content" ON public.ai_generated_content
  FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete ai_generated_content" ON public.ai_generated_content
  FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can read ai_generated_content" ON public.ai_generated_content
  FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- user_ai_keys: admin-only writes (keys are encrypted server-side; only admins manage)
DROP POLICY IF EXISTS "Users can insert own keys" ON public.user_ai_keys;
DROP POLICY IF EXISTS "Users can update own keys" ON public.user_ai_keys;
DROP POLICY IF EXISTS "Users can delete own keys" ON public.user_ai_keys;
DROP POLICY IF EXISTS "Users can read own keys" ON public.user_ai_keys;

CREATE POLICY "Admins can insert user_ai_keys" ON public.user_ai_keys
  FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin') AND auth.uid() = user_id);

CREATE POLICY "Admins can update user_ai_keys" ON public.user_ai_keys
  FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete user_ai_keys" ON public.user_ai_keys
  FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can read user_ai_keys" ON public.user_ai_keys
  FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));
