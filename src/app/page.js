import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';

import CareerSection from '@/components/CareerSection';
import Footer from '@/components/Footer';
import AboutSection from '@/components/About';
import SolutionsSection from '@/components/SolutionsSections';
import ContactSection from '@/components/ContactUs';

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SolutionsSection />
      <AboutSection />
      <CareerSection />
      <ContactSection />
      <Footer /> 
    </div>
  );
};

export default App;