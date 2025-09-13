import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogPost from '@/components/BlogPost';
import { getBlogPost, getAllBlogSlugs } from '@/lib/blog';

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found - Drenopav Blog',
    };
  }

  return {
    title: `${post.title} - Drenopav Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedDate,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return <BlogPost post={post} />;
}
