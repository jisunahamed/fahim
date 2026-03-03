-- 1. Profile Table
CREATE TABLE profile (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    full_name TEXT NOT NULL,
    short_title TEXT,
    bio TEXT,
    hero_image_url TEXT,
    about_story TEXT,
    resume_url TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Projects Table
CREATE TABLE projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    short_description TEXT,
    full_description TEXT,
    tech_stack TEXT[] DEFAULT '{}',
    featured BOOLEAN DEFAULT FALSE,
    thumbnail_url TEXT,
    case_study_content JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Design Archive
CREATE TABLE design_archive (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT,
    image_url TEXT NOT NULL,
    year TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Skills Table
CREATE TYPE skill_category AS ENUM ('automation', 'design', 'other');
CREATE TABLE skills (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    category skill_category NOT NULL DEFAULT 'automation',
    name TEXT NOT NULL,
    level INTEGER CHECK (level >= 0 AND level <= 100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. Social Links
CREATE TABLE social_links (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    platform TEXT NOT NULL,
    url TEXT NOT NULL,
    icon_name TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS (Row Level Security)
ALTER TABLE profile ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE design_archive ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE social_links ENABLE ROW LEVEL SECURITY;

-- Public Read Access
CREATE POLICY "Public Read Profile" ON profile FOR SELECT USING (true);
CREATE POLICY "Public Read Projects" ON projects FOR SELECT USING (true);
CREATE POLICY "Public Read Design Archive" ON design_archive FOR SELECT USING (true);
CREATE POLICY "Public Read Skills" ON skills FOR SELECT USING (true);
CREATE POLICY "Public Read Social Links" ON social_links FOR SELECT USING (true);

-- Admin Write Access (Only authenticated)
CREATE POLICY "Admin Write Profile" ON profile FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Write Projects" ON projects FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Write Design Archive" ON design_archive FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Write Skills" ON skills FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Write Social Links" ON social_links FOR ALL USING (auth.role() = 'authenticated');

-- Initial Profile Data
INSERT INTO profile (full_name, short_title, bio) 
VALUES ('Fahim Mohammad Faisal', 'AI Automation Engineer', 'I design intelligent systems that automate workflows, enhance business efficiency, and turn ideas into scalable digital solutions.');
