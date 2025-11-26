import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Experience />
      <Skills />
      <Projects />
    </main>
  );
}