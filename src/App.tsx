import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/layout/Navbar';
import Ticker from './components/ui/Ticker';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import ServicesSection from './components/home/ServicesSection';
import NewsSection from './components/home/NewsSection';
import InfoWidgets from './components/home/InfoWidgets';
import PromotionBanner from './components/home/PromotionBanner';
import GovernmentSection from './components/home/GovernmentSection';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Ticker />
        <main className="flex-grow">
          <Hero />
          <ServicesSection />
          <NewsSection />
          <InfoWidgets />
          <PromotionBanner />
          <GovernmentSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;