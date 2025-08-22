export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  category: 'software' | 'fabrication';
  imageUrl: string;
  content: string; // For now, can be a longer description. Later, can be markdown.
};

export const projects: Project[] = [
  {
    slug: 'portfolio-website',
    title: 'Personal Portfolio Website',
    description: 'A modern, animated portfolio to showcase my skills and projects.',
    tags: ['React', 'Next.js', 'TailwindCSS', 'Framer Motion'],
    category: 'software',
    imageUrl: '/placeholders/software-1.jpg',
    content: 'This is the detailed content for the portfolio website project...'
  },
  {
    slug: 'e-commerce-platform',
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce site with Firebase integration.',
    tags: ['React', 'Node.js', 'Firebase', 'Stripe'],
    category: 'software',
    imageUrl: '/placeholders/software-2.jpg',
    content: 'This is the detailed content for the e-commerce platform...'
  },
  {
    slug: 'cnc-sculpture',
    title: 'CNC Cut Wooden Sculpture',
    description: 'A complex 3D sculpture designed in Blender and fabricated with a CNC machine.',
    tags: ['Blender', 'CNC Operating', 'Fabrication'],
    category: 'fabrication',
    imageUrl: '/placeholders/fab-1.jpg',
    content: 'This is the detailed content for the CNC sculpture...'
  },
  {
    slug: 'custom-keyboard',
    title: 'Custom Mechanical Keyboard',
    description: 'Designed, 3D printed, and hand-wired a custom ergonomic keyboard.',
    tags: ['Electronics', 'Fabrication', '3D Printing'],
    category: 'fabrication',
    imageUrl: '/placeholders/fab-2.jpg',
    content: 'This is the detailed content for the custom keyboard...'
  },
];
