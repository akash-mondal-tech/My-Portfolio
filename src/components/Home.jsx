import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMove,
} from 'react-icons/fi';
import HeroScene from './3d/HeroScene';

const stats = [
  ['01', 'BCA', 'Honours & Research'],
  ['02', 'AI / ML', 'Future focus'],
  ['03', 'WEB', 'Product building'],
];

export default function Home({ onNavigate }) {
  const [photoVisible, setPhotoVisible] = useState(true);

  return (
    <section className="home-view">

      {/* ================= HERO CONTENT ================= */}
      <div className="hero-copy">

        <motion.div
          className="hero-status"
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <span className="status-dot" />
          Available for opportunities
        </motion.div>

        <motion.p
          className="eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          AI / ML • FRONTEND DEVELOPER • PROMPT ENGINEERING LEARNER
        </motion.p>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14 }}
        >
          Building <span>intelligent</span> digital experiences.
        </motion.h1>

        <motion.p
          className="hero-name"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22 }}
        >
          I&apos;m <strong>Akash Mondal</strong>
        </motion.p>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          A BCA student focused on AI, Machine Learning, and Generative AI.
          Exploring Prompt Engineering and building practical AI-driven projects.
          Aspiring to grow as an AI Engineer and create impactful solutions.
        </motion.p>

        {/* ================= BUTTONS ================= */}
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38 }}
        >
          <button
            className="button button-solid"
            onClick={() => onNavigate('projects')}
          >
            Explore projects
            <FiArrowRight />
          </button>

          <a
            className="button button-ghost"
            href="/resume.pdf"
            download
          >
            Download CV
            <FiDownload />
          </a>
        </motion.div>

        {/* ================= SOCIAL LINKS ================= */}
        <motion.div
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.48 }}
        >
          <a
            href="https://github.com/akash-mondal-tech"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
            GitHub
          </a>


          <a
            href="https://www.linkedin.com/in/akashmondaltech"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin />
            LinkedIn
          </a>

          <button onClick={() => onNavigate('contact')}>
            <FiMove />
            Contact
          </button>
        </motion.div>

        {/* ================= STATS ================= */}
        <div className="hero-stats">
          {stats.map(([num, value, label]) => (
            <div className="mini-stat" key={num}>
              <span>{num}</span>

              <div>
                <strong>{value}</strong>
                <small>{label}</small>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ================= 3D HERO VISUAL ================= */}
      <div className="hero-visual">

        <div className="visual-frame" />

        <div className="visual-glow" />

        {/* Existing 3D effects */}
        <div className="scene-wrap">
          <HeroScene />
        </div>

        {/* ================= LARGE PROFILE PHOTO ================= */}
        <div className="hero-photo-frame">

          {photoVisible ? (
            <img
              src="/profile.png"
              alt="Akash Mondal"
              className="hero-photo"
              onError={() => setPhotoVisible(false)}
            />
          ) : (
            <div className="hero-photo-fallback">
              AM
            </div>
          )}


        </div>

        {/* ================= FLOATING CHIPS ================= */}
        <div className="floating-chip chip-one">
          AI
        </div>

        <div className="floating-chip chip-two">
          PY
        </div>

        <div className="floating-chip chip-three">
          JS
        </div>

        <div className="floating-chip chip-four">
          SEC
        </div>



      </div>
    </section>
  );
}