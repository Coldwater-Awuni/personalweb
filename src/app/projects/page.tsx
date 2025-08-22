import { Header } from '@/components/layout/header'

const projects = [
  {
    title: 'Project One',
    description: 'A sample project showcasing React and Firebase integration.',
    type: 'software',
    image: '/projects/project1.jpg',
    tech: ['React', 'Firebase', 'TailwindCSS'],
    slug: 'project-one',
  },
  // Add more projects here
]

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="container py-12">
          <div className="flex justify-between items-center mb-12">
            <h1 className="font-heading text-4xl md:text-6xl">Projects</h1>
            <div className="flex gap-4">
              <button className="px-4 py-2 rounded-md bg-secondary text-secondary-foreground">All</button>
              <button className="px-4 py-2 rounded-md hover:bg-secondary hover:text-secondary-foreground">Software</button>
              <button className="px-4 py-2 rounded-md hover:bg-secondary hover:text-secondary-foreground">Creative</button>
              <button className="px-4 py-2 rounded-md hover:bg-secondary hover:text-secondary-foreground">Technical</button>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.slug} className="group relative rounded-lg border bg-card overflow-hidden">
                <div className="aspect-video relative">
                  {/* Replace with actual image */}
                  <div className="absolute inset-0 bg-accent/20" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
