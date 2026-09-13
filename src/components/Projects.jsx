import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import PageHeader from './PageHeader';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section className="section-view">
      <PageHeader eyebrow="03 · MY PROJECTS" title="Selected builds with a product-minded approach." intro="Cards are structured so you can swap project links, screenshots and technologies later without touching the page layout." />
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article key={project.number} className="project-card" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.07 }} whileHover={{ y: -10 }}>
            <div className="project-art">
              <div className={`art-orb orb-${index + 1}`} />
              <div className="art-grid" />
              <span className="project-index">{project.number}</span>
              <span className="project-type">{project.type}</span>
            </div>
            <div className="project-body">
              <div className="project-heading"><h2>{project.title}</h2><span className="project-arrow"><FiArrowUpRight /></span></div>
              <p>{project.description}</p>
              <div className="tag-row project-tags">{project.stack.map(tag => <span key={tag} className="skill-tag">{tag}</span>)}</div>
              <div className="project-links">
                <a href={project.github} target={project.github === 'https://github.com' ? undefined : '_blank'} rel="noreferrer"><FiGithub /> GitHub</a>
                <a href={project.live} target={project.live === 'https://github.com' ? undefined : '_blank'} rel="noreferrer">Live demo <FiArrowUpRight /></a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
























