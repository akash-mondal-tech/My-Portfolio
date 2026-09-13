import { motion } from 'framer-motion';

export default function PageHeader({ eyebrow, title, intro }) {
  return (
    <div className="page-header">
      <motion.p className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        {eyebrow}
      </motion.p>
      <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.04 }}>
        {title}
      </motion.h1>
      <motion.p className="page-intro" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.09 }}>
        {intro}
      </motion.p>
    </div>
  );
}
