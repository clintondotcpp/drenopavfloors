"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  Share2,
  Tag,
  MessageCircle,
  Phone
} from 'lucide-react';
import { BlogPost as BlogPostType } from '@/lib/blog';

interface BlogPostProps {
  post: BlogPostType;
}

const BlogPost = ({ post }: BlogPostProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  // Convert content to HTML (basic markdown-like processing)
  const formatContent = (content: string) => {
    return content
      .split('\n\n')
      .map((paragraph, index) => {
        if (paragraph.startsWith('## ')) {
          return `<h2 key="${index}" class="text-2xl font-bold text-foreground mt-8 mb-4">${paragraph.slice(3)}</h2>`;
        }
        if (paragraph.startsWith('* ')) {
          const items = paragraph.split('\n').map(item => 
            item.startsWith('* ') ? `<li>${item.slice(2)}</li>` : item
          ).join('');
          return `<ul key="${index}" class="list-disc list-inside space-y-2 mb-4 text-muted-foreground">${items}</ul>`;
        }
        if (paragraph.includes('**')) {
          const formatted = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>');
          return `<p key="${index}" class="text-muted-foreground leading-relaxed mb-4">${formatted}</p>`;
        }
        return `<p key="${index}" class="text-muted-foreground leading-relaxed mb-4">${paragraph}</p>`;
      })
      .join('');
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Back Button */}
      <div className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <Link href="/blog">
            <Button variant="outline" className="mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <div className="pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Badge className="mb-4">{post.category}</Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                {post.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 mb-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {formatDate(post.publishedDate)}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {post.readTime}
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleShare}
                className="ml-auto"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>

            {/* Featured Image */}
            {post.image && (
              <div className="aspect-video overflow-hidden rounded-lg mb-12 shadow-luxury">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <Card className="shadow-elevated">
                  <CardContent className="p-8">
                    <div 
                      className="prose prose-lg max-w-none"
                      dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
                    />
                  </CardContent>
                </Card>

                {/* Tags */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Contact CTA */}
                  <Card className="shadow-elevated bg-primary text-primary-foreground">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-4">Ready to Get Started?</h3>
                      <p className="text-sm opacity-90 mb-4">
                        Get expert advice for your Drenopav project today.
                      </p>
                      <div className="space-y-3">
                        <Button 
                          className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                          onClick={() => window.open('https://wa.me/2348026318818?text=Hello! I would like to inquire about Drenopav permeable floor surfaces.', '_blank')}
                        >
                          <MessageCircle className="h-4 w-4 mr-2" />
                          WhatsApp Chat
                        </Button>
                        <Button 
                          variant="outline" 
                          className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                          onClick={() => window.open('tel:+2348026318818', '_self')}
                        >
                          <Phone className="h-4 w-4 mr-2" />
                          Call Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Table of Contents (if content has headers) */}
                  {post.content.includes('## ') && (
                    <Card className="shadow-elevated">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold text-foreground mb-4">Table of Contents</h3>
                        <div className="space-y-2 text-sm">
                          {post.content
                            .split('\n')
                            .filter(line => line.startsWith('## '))
                            .map((heading, index) => (
                              <div key={index} className="text-muted-foreground hover:text-primary cursor-pointer">
                                {heading.slice(3)}
                              </div>
                            ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Transform Your Space with Drenopav</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Ready to experience the future of flooring? Contact our experts for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button size="lg" className="bg-gradient-premium">
                Get Free Consultation
              </Button>
            </Link>
            <Link href="/#estimator">
              <Button size="lg" variant="outline">
                Cost Estimator
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
