'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight,
  Sparkles,
  Download
} from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  // Floating animation uses inline animate/transition to satisfy strict typings.

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
     

      <div className="container mx-auto px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 glass-card px-3 py-1 mb-6 text-sm font-medium"
            >
              <Sparkles size={14} className="text-yellow-400" />
              <span className="gradient-text">Available for new projects</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            >
              <span className="block text-sm text-white/70">Hello, I am</span>
              <span className="block">Daniel Awuni</span>
              <span className="block gradient-text">Software Developer</span>
              <span className="block text-4xl">& Digital Fabricator</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-white/80 max-w-2xl mb-8 leading-relaxed"
            >
              I build multilingual platforms, e-commerce systems, admin dashboards & fabrication pipelines—integrating AI tooling, performance, and precision manufacturing to turn concepts into deployable products & tangible outcomes.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 mb-12"
            >
              <Link
                href="/projects"
                className="btn-primary inline-flex items-center gap-2 text-base group"
              >
                View My Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="btn-secondary inline-flex items-center gap-2 text-base"
              >
                <Download size={18} />
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Daniel SVG */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="relative">
              <motion.img
                src="/daniel.svg"
                alt="Daniel Awuni"
                className="w-full max-w-md lg:max-w-lg xl:max-w-2xl 2xl:max-w-4xl h-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              {/* Optional glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
