import PageHeader from './PageHeader';
import { motion } from 'framer-motion';
import { FiCpu, FiGlobe, FiShield, FiZap } from 'react-icons/fi';

const cards = [
  { icon: FiCpu, title: 'AI-first mindset', text: 'Learning Python, machine learning concepts and practical AI workflows with a strong focus on building useful products.' },
  { icon: FiGlobe, title: 'Web experiences', text: 'Interested in polished interfaces, responsive layouts, modern motion and thoughtful user experiences.' },
  { icon: FiShield, title: 'Security curiosity', text: 'Exploring cybersecurity fundamentals and secure thinking alongside application development.' },
  { icon: FiZap, title: 'Always shipping', text: 'I learn by building—small experiments, portfolio pieces and practical projects that keep improving.' },
];

export default function About() {
  return (
    <section className="section-view">
      <PageHeader eyebrow="01 · ABOUT" title="A curious builder with a long-term AI vision." intro="BCA (Honours & Research) student focused on AI and Machine Learning.Exploring Generative AI, Prompt Engineering, and AI technologies." />
      <div className="about-grid">
        <motion.div className="profile-panel glass-panel" initial={{ opacity: 0, x: -22 }} animate={{ opacity: 1, x: 0 }}>
          <div className="profile-orb">AM</div>
          <div>
            <span className="muted-label">CURRENTLY</span>
            <h2>BCA · Narula Institute of Technology</h2>
            <p>My goal is to grow in AI and Machine Learning and build practical solutions as an aspiring AI Engineer.</p>
          </div>
          <div className="profile-lines">
            <div><span>Focus</span><strong>AI / ML · GEN AI</strong></div>
            <div><span>Based</span><strong>Kolkata, India</strong></div>
            <div><span>Style</span><strong>Minimal · Technical · Modern</strong></div>
          </div>
        </motion.div>
        <div className="about-cards">
          {cards.map(({ icon: Icon, title, text }, index) => (
            <motion.article key={title} className="glass-card feature-card" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.06 }} whileHover={{ y: -6 }}>
              <div className="icon-box"><Icon /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
