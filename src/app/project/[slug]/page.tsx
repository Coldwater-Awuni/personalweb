'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Calendar, 
  Building, 
  Clock,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { projects, GalleryItem } from '@/content/projects';

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}const ProjectDetailPage = ({ params }: ProjectDetailPageProps) => {
  const { slug } = use(params);
  const project = projects.find(p => p.slug === slug);
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const isGalleryProject = project.category === 'Fabrication' || project.category === 'Design' || project.category === 'Development';

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

              {/* Carousel Container */}
              <div className="relative">
                <div className="aspect-video rounded-lg overflow-hidden bg-black">
                  {galleryItems[currentSlide]?.type === 'video' ? (
                    <video
                      className="w-full h-full"
                      controls
                      poster={galleryItems[currentSlide].thumbnail}
                      src={galleryItems[currentSlide].url}
                    />
                  ) : (
                    <Image
                      src={galleryItems[currentSlide]?.url}
                      alt={galleryItems[currentSlide]?.caption}
                      width={800}
                      height={600}
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>

                {/* Navigation Arrows */}
                {galleryItems.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentSlide((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1))}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={() => setCurrentSlide((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1))}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
                      aria-label="Next image"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}

                {/* Caption */}
                <div className="mt-4 text-center">
                  <p className="text-white/80">{galleryItems[currentSlide]?.caption}</p>
                </div>

                {/* Dot Indicators */}
                {galleryItems.length > 1 && (
                  <div className="flex justify-center gap-2 mt-4">
                    {galleryItems.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                          index === currentSlide ? 'bg-white' : 'bg-white/30'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
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
                  className="w-full h-full object-contain"
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