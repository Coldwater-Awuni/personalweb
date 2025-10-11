'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { notFound, useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Calendar, 
  Building, 
  Clock
} from 'lucide-react';
import { projects, GalleryItem } from '@/content/projects';

const ProjectDetailPage = () => {
  const params = useParams();
  const slug = params.slug as string;
  const project = projects.find(p => p.slug === slug);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Portfolio`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', project.description);
      }
    }
  }, [project]);

  if (!project) {
    notFound();
  }

  const isGalleryProject = project.category === 'Fabrication' || project.category === 'Design';
  
  // Use project gallery data if available, otherwise fall back to mock data
  const galleryItems: GalleryItem[] = (() => {
    if (project.gallery && Array.isArray(project.gallery) && project.gallery.length > 0) {
      const firstItem = project.gallery[0];
      
      // Check if it's the new GalleryItem format
      if (typeof firstItem === 'object' && firstItem !== null && 'type' in firstItem) {
        return project.gallery as GalleryItem[];
      }
      // Fall back to old string format - convert to GalleryItem format
      else if (typeof firstItem === 'string') {
        return (project.gallery as unknown as string[]).map(url => ({
          type: 'image' as const,
          url,
          caption: 'Project image'
        }));
      }
    }
    
    // Default fallback
    return [
      { type: 'image' as const, url: project.image, caption: 'Project overview' },
      { type: 'image' as const, url: '/api/placeholder/800/600', caption: 'Process documentation' },
      { type: 'image' as const, url: '/api/placeholder/800/600', caption: 'Final output' },
    ];
  })();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              {project.longDescription}
            </p>
            
            {/* Project Meta */}
            <div className="flex flex-wrap justify-center gap-6 text-white/60">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <Building size={16} />
                <span>{project.client}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{project.duration}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {project.demoUrl && project.demoUrl !== '#' && (
                <motion.a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink size={16} />
                  View Live
                </motion.a>
              )}
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Github size={16} />
                  View Code
                </motion.a>
              )}
            </div>
          </motion.div>

          {/* Gallery Section for Fabrication/Design Projects */}
          {isGalleryProject && (
            <motion.div variants={itemVariants} className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
              
              <div className="space-y-8">
                {galleryItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                  >
                    <div className="bg-white/5 rounded-lg overflow-hidden">
                      {item.type === 'video' ? (
                        <div className="aspect-video bg-black">
                          <video
                            className="w-full h-full"
                            controls
                            poster={item.thumbnail}
                            src={item.url}
                          />
                        </div>
                      ) : (
                        <div className="aspect-video">
                          <Image
                            src={item.url}
                            alt={item.caption}
                            width={800}
                            height={450}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      
                      <div className="p-4">
                        <p className="text-white/80">{item.caption}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Main Project Image for Development Projects */}
          {!isGalleryProject && (
            <motion.div variants={itemVariants} className="glass-card p-8">
              <div className="aspect-video rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          )}

          {/* Project Details Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Technologies */}
            <motion.div variants={itemVariants} className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-4">Technologies</h3>
              <div className="space-y-3">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-white/80">{tech.name}</span>
                    <span className="text-xs px-2 py-1 bg-white/10 rounded text-white/60">
                      {tech.category}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div variants={itemVariants} className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-white/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Results */}
            <motion.div variants={itemVariants} className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-4">Results</h3>
              <ul className="space-y-2">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-white/80 text-sm">{result}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Challenges Section */}
          <motion.div variants={itemVariants} className="glass-card p-8">
            <h3 className="text-2xl font-semibold mb-6">Challenges & Solutions</h3>
            <div className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <div key={index} className="border-l-2 border-orange-400 pl-4">
                  <p className="text-white/80">{challenge}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tags */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="flex flex-wrap justify-center gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
