import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Nosotros from '@/components/Nosotros';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import MapSection from '@/components/MapSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-earth-gray flex flex-col justify-between overflow-x-hidden selection:bg-brand-green selection:text-white">
      {/* Navigation Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* Fullscreen Hero Section */}
        <Hero />

        {/* GSAP Animated Counters */}
        <Stats />

        {/* About Us & Pillar Values */}
        <Nosotros />

        {/* Services & Machinery Cards & Modals */}
        <Services />

        {/* Masonry Image Gallery & Lightbox */}
        <Gallery />

        {/* Google Maps & Strategic Locations */}
        <MapSection />

        {/* Contact Form with validations */}
        <Contact />
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Floating Interactive WhatsApp Widget */}
      <WhatsAppButton />
    </div>
  );
}
