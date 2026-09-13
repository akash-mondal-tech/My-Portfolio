import { motion } from 'framer-motion';
import { FiAward, FiBookOpen } from 'react-icons/fi';
import PageHeader from './PageHeader';

const items = [
  { year: '2026 — 2030', title: 'BCA (Honours & Research)', place: 'Narula Institute of Technology', text: 'Focused on computer applications, programming foundations and a long-term path toward AI/ML engineering.' },
  { year: 'Current learning', title: 'AI / ML & Web Development', place: 'Self-directed practice', text: 'Building projects and strengthening Python, web development, databases, cybersecurity and AI concepts.' },
];

export default function Education() {
  return (
    <section className="section-view">
      <PageHeader eyebrow="04 · EDUCATION" title="A foundation-first learning journey." intro="I’m building depth step by step: fundamentals first, then projects, specialization and real-world engineering habits." />
      <div className="timeline-wrap">
        {items.map((item, index) => (
          <motion.div className="timeline-item" key={item.title} initial={{ opacity: 0, x: index % 2 ? 20 : -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.08 }}>
            <div className="timeline-marker">{index === 0 ? <FiAward /> : <FiBookOpen />}</div>
            <div className="timeline-card glass-panel">
              <span>{item.year}</span>
              <h2>{item.title}</h2>
              <h3>{item.place}</h3>
              <p>{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
