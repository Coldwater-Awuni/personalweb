'use client';

import { motion } from 'framer-motion';
import {
  Code2,
  Palette,
  Settings,
  Cpu
} from 'lucide-react';

type SkillBadge = { icon: React.ComponentType<{ className?: string }>; label: string; color: string };

const SkillsGrid = () => {
  const showDesignSection = process.env.NEXT_PUBLIC_SHOW_DESIGN_SECTION === 'true';

  const allSkills: SkillBadge[] = [
    { icon: Code2, label: 'Software Developer || Full-Stack ', color: 'from-blue-500 to-cyan-500' },
    { icon: Palette, label: 'Design & Visualization', color: 'from-purple-500 to-pink-500' },
    { icon: Settings, label: 'CNC & Fabrication', color: 'from-orange-500 to-red-500' },
    { icon: Cpu, label: 'Systems & AI Workflows', color: 'from-green-500 to-emerald-500' },
  ];

  // Filter out design/fabrication skills if SHOW_DESIGN_SECTION is false
  const skills = showDesignSection
    ? allSkills
    : allSkills.filter(skill => !['Design & Visualization', 'CNC & Fabrication'].includes(skill.label));

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {skills.map((skill, index) => (
        <motion.div
          key={skill.label}
          variants={skillVariants}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
          className="glass-card p-6 text-center group cursor-pointer"
        >
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br ${skill.color} p-3 group-hover:scale-110 transition-transform duration-300`}
            style={{
              animationDelay: `${index * 0.5}s`
            }}
          >
            <skill.icon className="w-full h-full text-white" />
          </motion.div>
          <h3 className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors">
            {skill.label}
          </h3>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SkillsGrid;
