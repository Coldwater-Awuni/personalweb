'use client';

import { motion } from 'framer-motion';

const Stats = () => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center">
        <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">40+</div>
        <div className="text-white/70">Delivered Projects</div>
      </div>
      <div className="text-center">
        <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">4+</div>
        <div className="text-white/70">Years Experience</div>
      </div>
      <div className="text-center">
        <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">Multi‑Disciplinary</div>
        <div className="text-white/70">Software • Fabrication • AI</div>
      </div>
    </motion.div>
  );
};

export default Stats;