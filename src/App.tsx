import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import CaseStudies from './components/CaseStudies';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#EFEFEF] overflow-x-hidden select-none font-sans text-gray-900 antialiased selection:bg-[#F26522]/30 selection:text-gray-900">
      {/* SECTION 1: HERO CONTAINER */}
      <Hero />

      {/* SECTION 2: ABOUT / INTRODUCING */}
      <AboutSection />

      {/* SECTION 3: CASE STUDIES */}
      <CaseStudies />

      {/* FOOTER & EXTRA TARGET SECTIONS (JOURNAL & CONNECT) */}
      <Footer />
    </div>
  );
}

