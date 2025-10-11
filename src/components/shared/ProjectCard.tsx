"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Github, User, Clock, ChevronRight } from 'lucide-react';
import { Project } from '@/content/projects';

interface ProjectCardProps {
  project: Project;
  variant?: 'featured' | 'default';
  showFeaturedBadge?: boolean;
  className?: string;
}

export default function ProjectCard({
  project,
  variant = 'default',
  showFeaturedBadge = false,
  className = ''
}: ProjectCardProps) {
  const isFeatured = variant === 'featured';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      className={`glass-card group cursor-pointer h-full flex flex-col ${className}`}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-t-2xl">
        {isFeatured ? (
          // Featured variant: Use actual project image
          <div className="aspect-video">
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={225}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          // Default variant: Use gradient placeholder
          <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
            <span className="text-white/60 text-sm">{project.category} Project</span>
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.demoUrl && project.demoUrl !== '#' && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
            >
              <ExternalLink size={20} className="text-white" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
            >
              <Github size={20} className="text-white" />
            </a>
          )}
        </div>

        {/* Featured Badge */}
        {showFeaturedBadge && project.featured && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-semibold rounded-full">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <Link href={`/project/${project.slug}`} className="p-6 flex-grow flex flex-col">
        {/* Category & Year */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full">
            {project.category}
          </span>
          <span className="text-xs text-white/60">{project.year}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-white/70 mb-4 flex-grow line-clamp-3">
          {project.description}
        </p>

        {/* Meta Info */}
        <div className="space-y-2 text-sm text-white/60 mb-4">
          <div className="flex items-center gap-2">
            <User size={14} />
            <span>{project.client}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} />
            <span>{project.duration}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-white/10 text-white/80 rounded-md"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-xs px-2 py-1 bg-white/10 text-white/80 rounded-md">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* View More */}
        <div className="mt-auto">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors group">
            View Details
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
