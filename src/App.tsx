import { useTheme } from './hooks';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Research from './components/Research';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <>
      <Nav theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <hr className="divider" />
        <About />
        <hr className="divider" />
        <Skills />
        <hr className="divider" />
        <Projects />
        <hr className="divider" />
        <Education />
        <hr className="divider" />
        <Certifications />
        <hr className="divider" />
        <Research />
        <hr className="divider" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
