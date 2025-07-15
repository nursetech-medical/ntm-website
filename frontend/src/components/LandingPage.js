import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import ProblemStatement from './ProblemStatement';
import SolutionOverview from './SolutionOverview';
import VideoSection from './VideoSection';
import TestimonialsSection from './TestimonialsSection';
import FAQSection from './FAQSection';
import Footer from './Footer';
import FloatingActionWidget from './FloatingActionWidget';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ProblemStatement />
        <SolutionOverview />
        <VideoSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
      <FloatingActionWidget />
    </div>
  );
};

export default LandingPage;