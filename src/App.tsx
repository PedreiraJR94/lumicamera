import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Features from './components/Features';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import Guarantees from './components/Guarantees';
import Specifications from './components/Specifications';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Features />
        <AboutUs />
        <Testimonials />
        <Guarantees />
        <Specifications />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;