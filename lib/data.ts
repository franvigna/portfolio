import { Project, Skill } from '@/types';

export const personalInfo = {
  name: "Francisco Vignardel",
  title: "Full Stack Developer",
  email: "tuemail@ejemplo.com",
  github: "https://github.com/tu-usuario",
  linkedin: "https://linkedin.com/in/tu-perfil",
  bio: "Desarrollador Full Stack con experiencia en React, Next.js, Django y más. Apasionado por crear soluciones eficientes y escalables."
};

export const skills: Skill[] = [
  // Lenguajes
  { name: "TypeScript", category: "languages", level: "advanced" },
  { name: "JavaScript", category: "languages", level: "expert" },
  { name: "Java", category: "languages", level: "advanced" },
  { name: "C", category: "languages", level: "intermediate" },
  { name: "Python", category: "languages", level: "advanced" },
  { name: "PHP", category: "languages", level: "intermediate" },
  { name: "Haskell", category: "languages", level: "intermediate" },
  { name: "Prolog", category: "languages", level: "intermediate" },
  
  // Frontend
  { name: "React", category: "frontend", level: "expert" },
  { name: "Next.js", category: "frontend", level: "advanced" },
  { name: "Tailwind CSS", category: "frontend", level: "advanced" },
  { name: "HTML", category: "frontend", level: "expert" },
  { name: "CSS", category: "frontend", level: "expert" },
  
  // Backend
  { name: "Django", category: "backend", level: "advanced" },
  { name: "Node.js", category: "backend", level: "intermediate" },
  
  // Tools
  { name: "Git", category: "tools", level: "advanced" },
  { name: "VS Code", category: "tools", level: "expert" },
  { name: "GitHub", category: "tools", level: "advanced" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Mi Proyecto 1",
    description: "Descripción breve de tu proyecto. Qué problema resuelve y qué tecnologías usaste.",
    image: "/projects/project1.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/tu-usuario/proyecto1",
    demo: "https://proyecto1.vercel.app"
  },
  {
    id: "2",
    title: "Mi Proyecto 2",
    description: "Otro proyecto interesante que desarrollaste.",
    image: "/projects/project2.jpg",
    tags: ["React", "Django", "PostgreSQL"],
    github: "https://github.com/tu-usuario/proyecto2",
  },
  // Agrega más proyectos
];