'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import StatsSection from '../components/StatsSection';
import ProcessSection from '../components/ProcessSection';
import PortfolioSection from '../components/PortfolioSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import LetTalkModal from '../components/LetTalkModal';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <main className="min-h-screen bg-[#080612] text-white">
      {/* Sticky Navigation */}
      <Navbar onOpenLetTalk={handleOpenModal} />

      {/* Hero Section with Live Badges */}
      <HeroSection onOpenLetTalk={handleOpenModal} />

      {/* 5-Card Services Showcase */}
      <ServicesSection onOpenLetTalk={handleOpenModal} />

      {/* About Me / Who Am I? */}
      <AboutSection onOpenLetTalk={handleOpenModal} />

      {/* Animated Metric Stats */}
      <StatsSection />

      {/* 4-Step Working Process */}
      <ProcessSection />

      {/* Featured Case Studies & Work */}
      <PortfolioSection onOpenLetTalk={handleOpenModal} />

      {/* Client Testimonials */}
      <TestimonialsSection />

      {/* Contact & CTA Banner */}
      <ContactSection onOpenLetTalk={handleOpenModal} />

      {/* Footer */}
      <Footer />

      {/* Let's Talk Interactive Modal */}
      <LetTalkModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </main>
  );
}
