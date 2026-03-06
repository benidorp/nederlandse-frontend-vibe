
-- 1. Drop broad ai_settings SELECT policy
DROP POLICY IF EXISTS "Authenticated users can read ai_settings" ON public.ai_settings;

-- 2. Create app_role enum and user_roles table
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

CREATE TABLE public.user_roles (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- RLS: only admins can read roles (bootstrapped via has_role function)
-- For now, allow authenticated users to read their own roles
CREATE POLICY "Users can read own roles"
  ON public.user_roles FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

-- 3. Create security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- 4. Update vertical_language_routes write policies to require admin role
DROP POLICY IF EXISTS "Authenticated users can insert routes" ON public.vertical_language_routes;
DROP POLICY IF EXISTS "Authenticated users can update routes" ON public.vertical_language_routes;
DROP POLICY IF EXISTS "Authenticated users can delete routes" ON public.vertical_language_routes;

CREATE POLICY "Admins can insert routes"
  ON public.vertical_language_routes FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update routes"
  ON public.vertical_language_routes FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete routes"
  ON public.vertical_language_routes FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));
