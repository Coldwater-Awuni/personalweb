import { projects } from '@/content/projects';
import ProjectCard from '@/components/shared/ProjectCard';
import Link from 'next/link';

const FeaturedProjects = () => {
  const featured = projects.filter(p => p.category === 'software').slice(0, 2);

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Software Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {featured.map(project => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/software" className="text-primary hover:text-primary-hover transition-colors font-semibold">
            View All Software Projects &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
