import { skills } from '@/content/skills';
import { FaReact, FaPaintBrush, FaCogs } from 'react-icons/fa';

const categoryIcons = {
  software: <FaReact className="h-8 w-8 text-secondary" />,
  design: <FaPaintBrush className="h-8 w-8 text-secondary" />,
  technical: <FaCogs className="h-8 w-8 text-secondary" />,
};

const SkillsPage = () => {
  const categorizedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-primary mb-12 text-center">My Arsenal of Skills</h1>
      <div className="space-y-16">
        {Object.entries(categorizedSkills).map(([category, skillList]) => (
          <div key={category}>
            <div className="flex items-center mb-8">
              {categoryIcons[category as keyof typeof categoryIcons]}
              <h2 className="text-3xl font-bold text-foreground ml-4 capitalize">{category}</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skillList.map((skill) => (
                <div key={skill.name} className="bg-background/50 border border-white/10 rounded-lg p-6 flex items-center justify-center text-center hover:shadow-primary/20 hover:shadow-lg transition-shadow">
                  <p className="font-semibold text-lg">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
