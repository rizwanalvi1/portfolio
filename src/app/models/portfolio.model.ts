export interface Profile {
  name: string;
  title: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  linkedin?: string;
  github?: string;
  profileImage?: string;
}

export interface Skill {
  name: string;
  category: string;
  level?: number;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string;
  current: boolean;
  responsibilities: string[];
  technologies?: string[];
}

export interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  highlights: string[];
  category?: string;
  link?: string;
  image?: string;
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  location?: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  description?: string;
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  date?: string;
}

export interface PortfolioData {
  profile: Profile;
  skillCategories: SkillCategory[];
  experiences: Experience[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
  achievements?: Achievement[];
}
