import { posts } from '@/content/blog';
import { notFound } from 'next/navigation';

type PostDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }));
}

const PostDetailPage = async ({ params }: PostDetailPageProps) => {
  const { slug } = await params;
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">{post.title}</h1>
        <p className="text-foreground/60 mb-8">
          Published on {new Date(post.publicationDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        <div className="prose prose-invert prose-lg max-w-none">
          <p>{post.content}</p>
        </div>
      </div>
    </div>
  );
};

export default PostDetailPage;
