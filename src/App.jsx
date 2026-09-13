import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import './index.css';

const views = {
  home: Home,
  about: About,
  skills: Skills,
  projects: Projects,
  education: Education,
  contact: Contact,
};

function App() {
  const [active, setActive] = useState('home');
  const ActiveView = views[active];

  useEffect(() => {
    document.title = `${active === 'home' ? 'Akash Mondal | AI/ML & Web Developer' : `${active[0].toUpperCase()}${active.slice(1)} | Akash Mondal`}`;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [active]);

  return (
    <div className="app-shell">
      <div className="background-grid" aria-hidden="true" />
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <Navbar active={active} onNavigate={setActive} />

      <main className="page-shell">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -14, filter: 'blur(8px)' }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            <ActiveView onNavigate={setActive} />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
