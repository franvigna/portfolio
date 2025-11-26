export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  featured?: boolean;
  client?: string;
  github?: string;
  demo?: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'languages';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  ideal: string;
}

export interface Experience {
  company: string;
  client?: string;
  position: string;
  period: string;
  location?: string;
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  progress?: string;
  completed?: boolean;
  activities?: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  hours?: number;
  credential?: string;
  url?: string;
}

export interface WorkStep {
  step: number;
  title: string;
  description: string;
  duration?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Stat {
  number: string;
  label: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  company: string;
  role: string;
  text: string;
  image?: string;
  rating?: number;
}