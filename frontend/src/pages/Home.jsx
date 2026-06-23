import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import LiveCreators from '../components/LiveCreators';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Screenshots from '../components/Screenshots';
import DownloadSection from '../components/DownloadSection';
import FAQ from '../components/FAQ';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Home() {
  const location = useLocation();
  useScrollAnimation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <LiveCreators />
      <Features />
      <HowItWorks />
      <Screenshots />
      <DownloadSection />
      <FAQ />
    </main>
  );
}