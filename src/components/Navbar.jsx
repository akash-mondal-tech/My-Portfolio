import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

const items = [
  ['home', 'Home'],
  ['about', 'About'],
  ['skills', 'My Skills'],
  ['projects', 'My Projects'],
  ['education', 'Education'],
  ['contact', 'Contact'],
];

export default function Navbar({ active, onNavigate }) {
  return (
    <header className="site-nav">
      <div className="nav-inner">
        <button className="brand" onClick={() => onNavigate('home')} aria-label="Go to home">
          <span className="brand-mark">AM</span>
          <span className="brand-copy">
            <strong>Akash Mondal</strong>
            <small>AI / ML · Web</small>
          </span>
        </button>

        <nav className="nav-links" aria-label="Primary navigation">
          {items.map(([id, label]) => (
            <button
              key={id}
              className={`nav-link ${active === id ? 'active' : ''}`}
              onClick={() => onNavigate(id)}
              aria-current={active === id ? 'page' : undefined}
            >
              {active === id && <motion.span layoutId="active-pill" className="nav-active-pill" />}
              <span>{label}</span>
            </button>
          ))}
        </nav>

        <button className="nav-cta" onClick={() => onNavigate('contact')}>
          Let&apos;s talk <FiArrowUpRight size={15} />
        </button>
      </div>
    </header>
  );
}
