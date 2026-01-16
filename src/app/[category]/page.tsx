import ProjectCard from '@/components/shared/ProjectCard';
import { projects } from '@/content/projects';

import { notFound } from 'next/navigation';

type CategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

export function generateStaticParams() {
  // Generate routes for /software and /fabrication
  return [{ category: 'software' }, { category: 'fabrication' }];
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { category } = await params;

  if (category !== 'software' && category !== 'fabrication') {
    notFound();
  }

  const map: Record<string, string> = {
    software: 'Development',
    fabrication: 'Fabrication',
  };
  const filteredProjects = projects.filter(p => p.category === map[category]);
  const title = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-primary mb-12 text-center">{title} Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
