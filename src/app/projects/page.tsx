'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter } from 'lucide-react';
import { projects, categories } from '@/content/projects';
import ProjectCard from '@/components/shared/ProjectCard';

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const showDesignSection = process.env.NEXT_PUBLIC_SHOW_DESIGN_SECTION === 'true';

  // Filter out design/fabrication projects if the flag is false
  const availableProjects = showDesignSection ? projects : projects.filter(project => project.category === 'Development');
  const availableCategories = showDesignSection ? categories : categories.filter(cat => cat.value === 'all' || cat.value === 'Development');

  useEffect(() => {
    document.title = 'Projects by Daniel Awuni | Full-Stack Development & Design Portfolio';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore Daniel Awuni\'s portfolio of full-stack development projects, graphic design work, and digital fabrication. Featuring React, Next.js, TypeScript, CNC machining, and hardware projects.');
    }

    // Update Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogTitle) ogTitle.setAttribute('content', 'Daniel Awuni\'s Projects | Full-Stack Development Portfolio');
    if (ogDescription) ogDescription.setAttribute('content', 'Browse through Daniel Awuni\'s featured projects including web applications, graphic design, digital fabrication, and hardware systems development.');
  }, []);

  const filteredProjects = selectedCategory === 'all' 
    ? availableProjects 
    : availableProjects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            A showcase of my work spanning web development, graphic design, 
            digital fabrication, and hardware projects.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {availableCategories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === category.value
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'glass-card text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="flex items-center gap-2">
                <Filter size={16} />
                {category.name}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                variant="default"
                showFeaturedBadge={true}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;