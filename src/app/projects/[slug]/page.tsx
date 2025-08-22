import { projects } from '@/content/projects';
import { notFound } from 'next/navigation';
import Image from 'next/image';

type ProjectDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

const ProjectDetailPage = ({ params }: ProjectDetailPageProps) => {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">{project.title}</h1>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-primary/20 text-primary text-sm font-semibold px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg mb-8">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill={true}
            style={{objectFit: 'cover'}}
          />
        </div>
        <div className="prose prose-invert prose-lg max-w-none">
          {/* This is where you would render Markdown content.
              For now, we just display the text content.
              To support Markdown, we'd use a library like 'react-markdown'.
          */}
          <p>{project.content}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
