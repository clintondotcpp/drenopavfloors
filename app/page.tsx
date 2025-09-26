import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductShowcase from '@/components/ProductShowcase';
import ComparisonTable from '@/components/ComparisonTable';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import CostEstimator from '@/components/CostEstimator';
import InteractiveDesignTool from '@/components/InteractiveDesignTool';
import ProjectGallery from '@/components/ProjectGallery';
import About from '@/components/About';
import ProcessTimeline from '@/components/ProcessTimeline';
import ServiceAreas from '@/components/ServiceAreas';
import WeatherBenefits from '@/components/WeatherBenefits';
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
        <ComparisonTable />
        <Benefits />
        <Testimonials />
        <CostEstimator />
        <InteractiveDesignTool />
        <ProjectGallery />
        <About />
        <ProcessTimeline />
        <ServiceAreas />
        <WeatherBenefits />
        <BlogPreview />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
