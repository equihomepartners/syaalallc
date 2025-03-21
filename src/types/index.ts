// Project Types
export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  images: ProjectImage[];
  technologies: string[];
  client: string;
  year: number;
  results?: ProjectResult[];
  testimonial?: Testimonial;
  url?: string;
}

export interface ProjectImage {
  thumbnail: string;
  full: string;
  blurHash: string;
  alt: string;
}

export interface ProjectResult {
  metric: string;
  value: string;
  description?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
  avatar?: string;
}

// Category Types
export type ProjectCategory = 'tech-saas' | 'hospitality' | 'professional' | 'construction';

export interface CategoryInfo {
  id: ProjectCategory;
  name: string;
  description: string;
  icon: string;
  pattern: string;
}

// Service Types
export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  features: string[];
  benefits: string[];
  caseStudies: string[];
}

// Team Types
export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  socialLinks: SocialLink[];
  expertise: string[];
}

export interface SocialLink {
  platform: 'linkedin' | 'twitter' | 'github' | 'email';
  url: string;
}

// Contact Types
export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  message: string;
  service?: string;
  budget?: string;
  timeline?: string;
}

// Animation Types
export interface AnimationProps {
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  type?: 'spring' | 'tween';
  children: React.ReactNode;
}

// Theme Types
export interface Theme {
  dark: boolean;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    accent: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
} 