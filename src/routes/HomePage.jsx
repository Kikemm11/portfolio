import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';

export default function HomePage() {
  const location = useLocation();

  // When arriving from a project detail page, scroll to the requested section.
  useEffect(() => {
    const target = location.state?.scrollTo;
    if (!target) return undefined;

    const frame = requestAnimationFrame(() => {
      document
        .getElementById(target)
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    return () => cancelAnimationFrame(frame);
  }, [location.state]);

  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
