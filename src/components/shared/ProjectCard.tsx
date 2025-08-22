import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Project } from '@/content/projects';

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-background/50 rounded-lg overflow-hidden shadow-lg border border-white/10 group"
    >
      <Link href={`/projects/${project.slug}`}>
        <div className="relative h-48">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill={true}
            style={{objectFit: 'cover'}}
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
          <p className="text-foreground/80 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="bg-primary/20 text-primary text-xs font-semibold px-2.5 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
