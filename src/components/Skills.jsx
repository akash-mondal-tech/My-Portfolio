import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiGlobe, FiLock, FiCpu } from 'react-icons/fi';
import PageHeader from './PageHeader';

const groups = [
  { icon: FiCode, name: 'Programming', tags: ['C', 'Python', 'JavaScript', 'Java'], note: 'Core programming foundation' },
  { icon: FiGlobe, name: 'Web Development', tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Node,js'], note: 'Responsive interface building' },
  { icon: FiDatabase, name: 'Data', tags: ['RDBMS', 'SQL concepts'], note: 'Structured data foundations' },
  { icon: FiCpu, name: 'AI & Generative AI', tags: ['AI / ML', 'Prompt Engineering', 'GenAI'], note: 'Future-focused learning track' },
  { icon: FiLock, name: 'Cybersecurity', tags: ['Security basics', 'Ethical hacking concepts'], note: 'Security-aware development' },
];

export default function Skills() {
  return (
    <section className="section-view">
      <PageHeader eyebrow="02 · MY SKILLS" title="Tools I’m learning, using, and connecting." intro="A practical stack shaped around software fundamentals today and AI engineering tomorrow." />
      <div className="skills-grid">
        {groups.map(({ icon: Icon, name, tags, note }, index) => (
          <motion.article key={name} className="glass-card skill-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} whileHover={{ y: -7, rotateX: 2, rotateY: -2 }}>
            <div className="skill-top"><div className="icon-box"><Icon /></div><span>0{index + 1}</span></div>
            <h3>{name}</h3>
            <p>{note}</p>
            <div className="tag-row">{tags.map(tag => <span key={tag} className="skill-tag">{tag}</span>)}</div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}













