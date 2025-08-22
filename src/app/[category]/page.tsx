import { projects } from '@/content/projects';
import ProjectCard from '@/components/shared/ProjectCard';
import { notFound } from 'next/navigation';

type CategoryPageProps = {
  params: {
    category: string;
  };
};

export function generateStaticParams() {
  // Generate routes for /software and /fabrication
  return [{ category: 'software' }, { category: 'fabrication' }];
}

const CategoryPage = ({ params }: CategoryPageProps) => {
  const { category } = params;

  if (category !== 'software' && category !== 'fabrication') {
    notFound();
  }

  const filteredProjects = projects.filter(p => p.category === category);
  const title = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-primary mb-12 text-center">{title} Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
