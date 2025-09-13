import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductShowcase from '@/components/ProductShowcase';
import Benefits from '@/components/Benefits';
import CostEstimator from '@/components/CostEstimator';
import ProjectGallery from '@/components/ProjectGallery';
import About from '@/components/About';
import BlogPreview from '@/components/BlogPreview';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProductShowcase />
        <Benefits />
        <CostEstimator />
        <ProjectGallery />
        <About />
        <BlogPreview />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
