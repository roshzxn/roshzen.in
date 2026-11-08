-- ========================================================
-- RoshZen Admin & Portfolio Expansion Schema
-- Database: Supabase PostgreSQL
-- ========================================================

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. CERTIFICATES TABLE (Following Template Structure)
CREATE TABLE IF NOT EXISTS public.certificates (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  issuer TEXT NOT NULL,
  issue_date TEXT,
  credential_id TEXT,
  about TEXT,
  skills TEXT[] DEFAULT '{}',
  certificate_image TEXT,
  view_url TEXT,
  verify_url TEXT,
  position INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. DYNAMIC PROJECTS TABLE
CREATE TABLE IF NOT EXISTS public.projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  idea TEXT NOT NULL,
  stack TEXT[] DEFAULT '{}',
  features TEXT[] DEFAULT '{}',
  github TEXT,
  live TEXT,
  position INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. CONTACT INQUIRIES TABLE
CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  project_type TEXT DEFAULT 'General Inquiry',
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  starred BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ROW LEVEL SECURITY (RLS)
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Public Read Policies
CREATE POLICY "Public can view active certificates"
  ON public.certificates FOR SELECT USING (is_active = true);

CREATE POLICY "Public can view active projects"
  ON public.projects FOR SELECT USING (is_active = true);

CREATE POLICY "Public can submit contact inquiries"
  ON public.contact_submissions FOR INSERT WITH CHECK (true);

-- Authenticated Admin Policies (Full Access)
CREATE POLICY "Admin full access on certificates"
  ON public.certificates FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Admin full access on projects"
  ON public.projects FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Admin full access on contact submissions"
  ON public.contact_submissions FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- INITIAL CERTIFICATES SEED (Optional - add credentials via Admin Portal or insert manually)
-- Certificates table is created and empty by default.

