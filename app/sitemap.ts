import { MetadataRoute } from 'next'
import { getAllBlogSlugs } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://drenopavfloors.ng'
  const currentDate = new Date()
  
  // Get all blog post slugs
  const blogSlugs = getAllBlogSlugs()
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]
  
  // Blog pages
  const blogPages = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))
  
  return [...staticPages, ...blogPages]
}
