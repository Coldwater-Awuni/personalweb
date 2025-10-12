'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  Sparkles,
  Download
} from 'lucide-react';

const Hero = () => {
  const showDesignSection = process.env.NEXT_PUBLIC_SHOW_DESIGN_SECTION === 'true';
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
      {/* Daniel SVG Background for Mobile */}
      <div className="absolute inset-0 lg:hidden">
        <motion.img
          src="/Daniel.svg"
          alt="Daniel Awuni"
          className="w-full h-full object-cover opacity-10"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center min-h-screen">
          {/* Left Content */}
          <motion.div
            className=" lg:pr-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="absolute top-8 left-1/2 transform -translate-x-1/2 inline-flex items-center gap-2 glass-card px-3 py-1 text-sm font-medium z-20"
            >
              <Sparkles size={14} className="text-yellow-400" />
              <span className="gradient-text">Available for new projects</span>
            </motion.div>

            <div className="text-center">
                {/* Main Headline */}
                <motion.h1
                  variants={itemVariants}
                  className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 lg:mb-4 leading-tight "
                >
                  <span className="block text-xs lg:text-sm text-white/70 mb-1">Hello, I am</span>
                  <span className="block">Daniel Awuni</span>
                  <span className="block gradient-text text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Software Developer</span>
                  {showDesignSection && (
                    <span className="block text-lg lg:text-2xl xl:text-3xl text-white/60">& Digital Fabricator</span>
                  )}
                </motion.h1>
            
                {/* Subtitle - Hidden on mobile, visible on larger screens */}
                <motion.p
                  variants={itemVariants}
                  className="hidden lg:block text-base lg:text-xl text-white/80 max-w-2xl mb-8 leading-relaxed"
                >
                  {showDesignSection
                    ? "Full-stack developer & digital fabricator creating innovative solutions with AI, performance, and precision manufacturing."
                    : "Full-stack developer creating innovative web applications with modern technologies, AI integration, and performance optimization."
                  }
                </motion.p>
            </div>
           

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-row  gap-3 mt-24"
            >
              <Link
                href="/projects"
                className="btn-primary inline-flex items-center justify-center gap-2 text-base group"
              >
                View My Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="btn-secondary inline-flex items-center justify-center gap-2 text-base"
              >
                <Download size={18} />
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Daniel SVG - Hidden on mobile, large on desktop */}
          <motion.div
            className="hidden lg:flex justify-center lg:justify-end items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="relative w-full max-w-2xl xl:max-w-4xl">
              <motion.img
                src="/Daniel.svg"
                alt="Daniel Awuni"
                className="w-full h-auto max-h-[80vh] object-contain"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              {/* Optional glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl -z-10 scale-110"></div>
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
