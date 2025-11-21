import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutScrollContainer } from './components/AboutScrollContainer';
import { AboutCompanySection } from './components/AboutCompanySection';
import { AboutValuesSection } from './components/AboutValuesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ServicesSection } from './components/ServicesSection';
import { CasesSection } from './components/CasesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { BlogSection } from './components/BlogSection';
import { Footer } from './components/Footer';
import { FloatingChat } from './components/FloatingChat';
import { Toaster } from './components/ui/sonner';
import { SEO } from './components/SEO';
import { StructuredData } from './components/StructuredData';
import { RenewalPopup } from './components/RenewalPopup';
import { HelmetProvider } from 'react-helmet-async';

export default function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen">
        <SEO />
        <StructuredData />
        <RenewalPopup />
        <Header />
        <main>
          <HeroSection />
          <AboutScrollContainer />
          <AboutCompanySection />
          <AboutValuesSection />
          <PortfolioSection />
          <ServicesSection />
          <CasesSection />
          <TestimonialsSection />
          <ContactSection />
          <BlogSection />
        </main>
        <Footer />
        <FloatingChat />
        <Toaster position="top-center" />
      </div>
    </HelmetProvider>
  );
}