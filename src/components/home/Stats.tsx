'use client';

import { projects } from '@/content/projects';
import { designFabricationProjects } from '@/content/design-fabrication';
import { motion } from 'framer-motion';

const Stats = () => {
  const developmentProjects = projects.filter(p => p.category === 'Development');
  const showDesignSection = process.env.NEXT_PUBLIC_SHOW_DESIGN_SECTION === 'true';

  if (showDesignSection) {
    const designProjects = designFabricationProjects.filter(p => p.category === 'Design');
    const fabricationProjects = designFabricationProjects.filter(p => p.category === 'Fabrication');

    return (
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center">
          <div className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text mb-2">10 +</div>
          <div className="text-white/70 text-sm lg:text-base">Development Projects</div>
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text mb-2">{designProjects.length} +</div>
          <div className="text-white/70 text-sm lg:text-base">Design Projects</div>
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text mb-2">{fabricationProjects.length}</div>
          <div className="text-white/70 text-sm lg:text-base">Fabrication Projects</div>
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text mb-2">4+</div>
          <div className="text-white/70 text-sm lg:text-base">Years Experience</div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center">
        <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">10 +</div>
        <div className="text-white/70">Projects Delivered</div>
      </div>
      <div className="text-center">
        <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">4+</div>
        <div className="text-white/70">Years Experience</div>
      </div>
      <div className="text-center">
        <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">Full-Stack</div>
        <div className="text-white/70">Developer</div>
      </div>
    </motion.div>
  );
};

export default Stats;