"use client";

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  Clock, 
  ArrowRight,
  BookOpen,
  TrendingUp,
  Lightbulb
} from 'lucide-react';
import { getFeaturedBlogPosts } from '@/lib/blog';

const BlogPreview = () => {
  const featuredPosts = getFeaturedBlogPosts().slice(0, 3); // Show only 3 posts on homepage

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary text-primary-foreground">
            <Lightbulb className="h-4 w-4 mr-2" />
            Expert Insights
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Latest from Our
            <span className="block text-primary">Blog</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover expert insights, design tips, and success stories about premium permeable flooring solutions.
          </p>
        </div>

        {/* Featured Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post, index) => (
            <Card key={post.slug} className="overflow-hidden shadow-elevated hover:shadow-luxury transition-all duration-300 hover:-translate-y-1">
              {post.image && (
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <CardHeader>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="text-lg line-clamp-2 mb-2">{post.title}</CardTitle>
                <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    {formatDate(post.publishedDate)}
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <Button size="sm" variant="outline">
                      Read More
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Blog CTA */}
        <div className="text-center">
          <Card className="inline-block shadow-luxury bg-accent text-accent-foreground">
            <CardContent className="p-8">
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-4">Explore More Insights</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Discover comprehensive guides, project showcases, and expert tips to help you make informed decisions about your flooring project.
              </p>
              <Link href="/blog">
                <Button className="bg-gradient-premium" size="lg">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  View All Articles
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
