export type Skill = {
  name: string;
  category: 'software' | 'design' | 'technical';
};

export const skills: Skill[] = [
  // Software
  { name: 'React', category: 'software' },
  { name: 'Flutter', category: 'software' },
  { name: 'Node.js', category: 'software' },
  { name: 'Firebase', category: 'software' },
  { name: 'Next.js', category: 'software' },
  { name: 'TypeScript', category: 'software' },

  // Design
  { name: 'Illustrator', category: 'design' },
  { name: 'Photoshop', category: 'design' },
  { name: 'Blender', category: 'design' },
  { name: 'UI/UX Design', category: 'design' },

  // Technical
  { name: 'CNC Operating', category: 'technical' },
  { name: 'Computer Repairs', category: 'technical' },
  { name: 'Electronics', category: 'technical' },
  { name: 'Fabrication', category: 'technical' },
];
