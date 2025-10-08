'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, Tag, ExternalLink, Github, Palette, Wrench } from 'lucide-react';
import { designFabricationProjects, designFabricationCategories, type DesignFabricationProject } from '@/content/design-fabrication';
import ProjectSlider from '@/components/ui/ProjectSlider';
import MediaGallery from '@/components/ui/MediaGallery';

type ViewMode = 'slider' | 'gallery';
type ProjectCategory = 'Design' | 'Fabrication' | 'all';

const DesignFabricationPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('slider');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Design & Fabrication Projects | Daniel Awuni Portfolio';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore Daniel Awuni\'s design and fabrication projects featuring digital art, CNC machining, exhibition work, and custom manufacturing solutions.');
    }
  }, []);

  // Filter projects for design and fabrication only
  const filteredProjects = selectedCategory === 'all' 
    ? designFabricationProjects
    : designFabricationProjects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm flex items-center justify-center">
              <Palette size={32} className="text-purple-400" />
            </div>
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm flex items-center justify-center">
              <Wrench size={32} className="text-blue-400" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Design & <span className="gradient-text">Fabrication</span>
          </h1>
          <p className="text-xl text-white/80 max-w-4xl mx-auto">
            Explore the intersection of digital design and physical fabrication. 
            From exhibition displays to custom CNC work, see how creativity meets precision manufacturing.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {designFabricationCategories.map((category) => {
            const IconComponent = category.value === 'Design' ? Palette : category.value === 'Fabrication' ? Wrench : Tag;
            return (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value as ProjectCategory)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-3 ${
                  selectedCategory === category.value
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white scale-105'
                    : 'glass-card text-white/80 hover:text-white hover:bg-white/10 hover:scale-105'
                }`}
              >
                <IconComponent size={20} />
                <span>{category.name}</span>
                {category.count !== undefined && (
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                )}
              </button>
            );
          })}
        </motion.div>

        {/* View Mode Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-12"
        >
          <div className="glass-card p-2 rounded-xl flex gap-2">
            <button
              onClick={() => setViewMode('slider')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                viewMode === 'slider'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              Slider View
            </button>
            <button
              onClick={() => setViewMode('gallery')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                viewMode === 'gallery'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              Gallery View
            </button>
          </div>
        </motion.div>

        {/* Projects Display */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                layout
                className="glass-card rounded-2xl overflow-hidden"
              >
                {/* Project Header */}
                <div className="p-8 border-b border-white/10">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          project.category === 'Design' 
                            ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                            : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                        }`}>
                          {project.category}
                        </span>
                        <span className="text-white/50">•</span>
                        <span className="text-white/70">{project.year}</span>
                      </div>
                      
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {project.title}
                      </h2>
                      
                      <p className="text-white/80 text-lg leading-relaxed mb-6">
                        {project.longDescription}
                      </p>

                      {/* Project Meta */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center gap-2 text-white/70">
                          <User size={16} />
                          <span>{project.client}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/70">
                          <Clock size={16} />
                          <span>{project.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/70">
                          <Calendar size={16} />
                          <span>{project.year}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3 lg:items-end">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                        >
                          <ExternalLink size={18} />
                          View Project
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 glass-card text-white rounded-xl font-medium hover:bg-white/10 transition-all duration-300"
                        >
                          <Github size={18} />
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Media Content */}
                {project.gallery && project.gallery.length > 0 && (
                  <div className="p-8">
                    {viewMode === 'slider' ? (
                      <ProjectSlider
                        items={project.gallery}
                        autoPlay={true}
                        autoPlayInterval={6000}
                        showControls={true}
                        showIndicators={true}
                        className="mb-6"
                      />
                    ) : (
                      <MediaGallery
                        items={project.gallery}
                        className="mb-6"
                      />
                    )}
                  </div>
                )}

                {/* Project Details */}
                <div className="p-8 pt-0">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Technologies */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-white/10 text-white/80 rounded-lg text-sm"
                          >
                            {tech.name}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                      <ul className="space-y-2">
                        {project.features.slice(0, 4).map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-white/80 text-sm">
                            • {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Results */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Results</h3>
                      <ul className="space-y-2">
                        {project.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="text-white/80 text-sm">
                            ✓ {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
              <Tag size={48} className="text-white/30" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">No Projects Found</h3>
            <p className="text-white/60">
              No projects match the selected category. Try selecting a different filter.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default DesignFabricationPage;