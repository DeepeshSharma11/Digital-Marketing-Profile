'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import LiveMarquee from '../components/LiveMarquee';
import ServicesSection from '../components/ServicesSection';
import GrowthCalculator from '../components/GrowthCalculator';
import BeforeAfterGallery from '../components/BeforeAfterGallery';
import BeforeAfterRevamp from '../components/BeforeAfterRevamp';
import AboutSection from '../components/AboutSection';
import StatsSection from '../components/StatsSection';
import ProcessSection from '../components/ProcessSection';
import PortfolioSection from '../components/PortfolioSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FaqSection from '../components/FaqSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import LetTalkModal from '../components/LetTalkModal';
import WhatsAppFloatingButton from '../components/WhatsAppFloatingButton';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-amber-400 selection:text-black relative">
      {/* Fixed Background Layer */}
      <div className="bg-mesh-canvas" />

      {/* Sticky Frosted White Navigation */}
      <Navbar onOpenLetTalk={handleOpenModal} />

      {/* Hero Section */}
      <HeroSection onOpenLetTalk={handleOpenModal} />

      {/* Live Brand Achievement Marquee */}
      <LiveMarquee />

      {/* 5-Card Services */}
      <ServicesSection onOpenLetTalk={handleOpenModal} />

      {/* Real Client Transformations Before & After Gallery */}
      <BeforeAfterGallery onOpenLetTalk={handleOpenModal} />

      {/* Interactive Growth / ROI Calculator */}
      <GrowthCalculator onOpenLetTalk={handleOpenModal} />

      {/* Before vs After Profile Transformation Showcase */}
      <BeforeAfterRevamp onOpenLetTalk={handleOpenModal} />

      {/* About Me */}
      <AboutSection onOpenLetTalk={handleOpenModal} />

      {/* Metric Stats */}
      <StatsSection />

      {/* 4-Step Working Process */}
      <ProcessSection />

      {/* Featured Case Studies & Work */}
      <PortfolioSection onOpenLetTalk={handleOpenModal} />

      {/* Client Testimonials */}
      <TestimonialsSection />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Contact & CTA Banner */}
      <ContactSection onOpenLetTalk={handleOpenModal} />

      {/* Frosted Footer with Developer Signature */}
      <Footer />

      {/* Quick Direct WhatsApp Floating Widget */}
      <WhatsAppFloatingButton />

      {/* Let's Talk Consultation Modal */}
      <LetTalkModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </main>
  );
}
