// types.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  featured?: boolean;
  demo?: string;
  github?: string;
  client?: string;
  projectType: 'pyme' | 'corporativo';
  result?: string; // NUEVO: Para mostrar resultados medibles como "+60% consultas"
  icon?: string; // NUEVO: Para mostrar un emoji/ícono en el placeholder
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  includes: string[]; // NUEVO: Qué incluye exactamente el servicio
  ideal: string;
  price: string;
  priceNote: string; // NUEVO: Nota sobre el precio
  delivery: string;
  popular: boolean; // NUEVO: Para destacar el servicio más vendido
}

export interface Experience {
  company: string;
  client?: string;
  position: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  type: 'pyme' | 'corporativo';
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  progress?: string;
  activities?: string[];
  completed?: boolean;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  hours: number;
  credential: string;
}

export interface Stat {
  number: string;
  label: string;
  icon: string;
}

export interface WorkProcess {
  step: number;
  title: string;
  description: string;
  duration: string;
  icon: string; // NUEVO: Para mostrar ícono en cada paso
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company?: string;
  text: string;
  avatar?: string;
  rating: number;
  project?: string;
}