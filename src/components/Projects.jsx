import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import PageHeader from './PageHeader';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section className="section-view">
      <PageHeader
        eyebrow="03 · MY PROJECTS"
        title="Selected builds with a product-minded approach."
        intro="Cards are structured so you can swap project links, screenshots and technologies later without touching the page layout."
      />

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            key={project.number}
            className="project-card"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.07 }}
            whileHover={{ y: -10 }}
          >
            {/* Project Image */}
            <div className="project-art">
              <img
                src={project.image}
                alt={project.title}
              />

              <span className="project-index">
                {project.number}
              </span>

              <span className="project-type">
                {project.type}
              </span>
            </div>

            {/* Project Details */}
            <div className="project-body">
              <div className="project-heading">
                <h2>{project.title}</h2>

                <span className="project-arrow">
                  <FiArrowUpRight />
                </span>
              </div>

              <p>{project.description}</p>

              {/* Technologies */}
              <div className="tag-row project-tags">
                {project.stack.map((tag) => (
                  <span key={tag} className="skill-tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="project-links">

                {/* GitHub Link */}
                {project.github && project.github !== '#' && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub />
                    GitHub
                  </a>
                )}

                {/* Live Demo Link */}
                {project.live && project.live !== '#' && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live demo
                    <FiArrowUpRight />
                  </a>
                )}

              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}