import { Metadata } from 'next';
import BlogPage from '@/components/BlogPage';

export const metadata: Metadata = {
  title: 'Blog - Drenopav Luxury Floors | Expert Insights & Tips',
  description: 'Discover expert insights, design tips, and success stories about Drenopav permeable floor surfaces. Learn about sustainable flooring solutions for Nigerian homes and businesses.',
  keywords: 'drenopav blog, permeable flooring tips, sustainable construction Nigeria, flooring design ideas, luxury floor surfaces',
};

export default function Blog() {
  return <BlogPage />;
}
