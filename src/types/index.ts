export type Profile = {
    id: string;
    full_name: string;
    short_title: string;
    bio: string;
    hero_image_url: string;
    about_story: string;
    resume_url: string;
    updated_at: string;
};

export type Project = {
    id: string;
    title: string;
    slug: string;
    short_description: string;
    full_description: string;
    tech_stack: string[];
    featured: boolean;
    thumbnail_url: string;
    case_study_content: any;
    created_at: string;
};

export type Skill = {
    id: string;
    category: 'automation' | 'design' | 'other';
    name: string;
    level: number;
};

export type SocialLink = {
    id: string;
    platform: string;
    url: string;
    icon_name: string;
};
