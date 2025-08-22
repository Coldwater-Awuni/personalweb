import { posts } from '@/content/blog';
import Link from 'next/link';

const BlogPage = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-primary mb-12 text-center">Blog & Tutorials</h1>
      <div className="max-w-3xl mx-auto space-y-8">
        {posts.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="block bg-background/50 border border-white/10 p-8 rounded-lg hover:border-primary transition-colors">
              <p className="text-sm text-foreground/60 mb-2">
                {new Date(post.publicationDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <h2 className="text-2xl font-bold text-foreground mb-2">{post.title}</h2>
              <p className="text-foreground/80">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
