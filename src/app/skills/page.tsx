import { Header } from '@/components/layout/header'

const skillCategories = [
  {
    title: 'Development',
    skills: [
      { name: 'React', level: 90, description: 'Frontend development with modern React patterns' },
      { name: 'Flutter', level: 85, description: 'Cross-platform mobile app development' },
      { name: 'Node.js', level: 85, description: 'Backend development and API design' },
      { name: 'Firebase', level: 80, description: 'Cloud services and real-time applications' },
    ],
  },
  {
    title: 'Digital/Creative',
    skills: [
      { name: 'Adobe Illustrator', level: 85, description: 'Vector graphics and logo design' },
      { name: 'Adobe Photoshop', level: 80, description: 'Photo editing and digital art' },
      { name: 'Blender', level: 75, description: '3D modeling and animation' },
    ],
  },
  {
    title: 'Technical',
    skills: [
      { name: 'CNC Operation', level: 85, description: 'Programming and operating CNC machines' },
      { name: 'Computer Repairs', level: 90, description: 'Hardware diagnostics and repairs' },
      { name: 'Electronics', level: 80, description: 'Circuit design and prototyping' },
    ],
  },
]

export default function SkillsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="container py-12">
          <h1 className="font-heading text-4xl md:text-6xl mb-12">Skills & Expertise</h1>
          <div className="grid gap-12">
            {skillCategories.map((category) => (
              <div key={category.title}>
                <h2 className="font-heading text-2xl md:text-4xl mb-6">{category.title}</h2>
                <div className="grid gap-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="rounded-lg border bg-card p-6">
                      <h3 className="font-heading text-xl mb-2">{skill.name}</h3>
                      <p className="text-muted-foreground mb-4">{skill.description}</p>
                      <div className="h-2 w-full bg-secondary rounded-full">
                        <div
                          className="h-full bg-accent rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
