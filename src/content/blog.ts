export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  publicationDate: string;
  content: string;
};

export const posts: Post[] = [
  {
    slug: 'mastering-react-hooks',
    title: 'Mastering React Hooks: A Deep Dive',
    excerpt: 'Explore the power of React Hooks and how they can simplify your component logic and state management.',
    publicationDate: '2024-10-22',
    content: 'This is the full content for the React Hooks deep dive. It would contain detailed explanations and code examples...'
  },
  {
    slug: 'getting-started-with-cnc',
    title: 'Getting Started with CNC Machining',
    excerpt: 'A beginner\'s guide to the world of CNC, from choosing your first machine to running your first job.',
    publicationDate: '2024-10-15',
    content: 'This is the full content for the CNC machining guide. It would cover safety, software, and basic operations...'
  },
];
