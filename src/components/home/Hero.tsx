'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center text-center min-h-[calc(100vh-80px)] px-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-foreground mb-4"
      >
        Innovative Digital & Physical Solutions
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg md:text-xl text-foreground/80 max-w-3xl mb-8"
      >
        From responsive web applications with React and Node.js to intricate designs with Blender and CNC fabrication, I bring ideas to life.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Link
          href="/software"
          className="bg-primary text-background font-bold py-3 px-8 rounded-full hover:bg-primary-hover transition-colors text-lg"
        >
          View My Work
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
