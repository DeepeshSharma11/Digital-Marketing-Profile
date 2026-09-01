'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import LiveMarquee from '../components/LiveMarquee';
import ServicesSection from '../components/ServicesSection';
import GrowthCalculator from '../components/GrowthCalculator';
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
      {/* GPU Accelerated Fixed Background Layer */}
      <div className="bg-mesh-canvas" />

      {/* Sticky Frosted White Navigation */}
      <Navbar onOpenLetTalk={handleOpenModal} />

      {/* Hero Section */}
      <HeroSection onOpenLetTalk={handleOpenModal} />

      {/* Live Brand Achievement Marquee */}
      <LiveMarquee />

      {/* 5-Card Frosted Glass Services */}
      <div className="section-smooth">
        <ServicesSection onOpenLetTalk={handleOpenModal} />
      </div>

      {/* Interactive Growth / ROI Calculator */}
      <div className="section-smooth">
        <GrowthCalculator onOpenLetTalk={handleOpenModal} />
      </div>

      {/* Before vs After Profile Transformation */}
      <div className="section-smooth">
        <BeforeAfterRevamp onOpenLetTalk={handleOpenModal} />
      </div>

      {/* About Me / Who Am I? */}
      <div className="section-smooth">
        <AboutSection onOpenLetTalk={handleOpenModal} />
      </div>

      {/* Metric Stats */}
      <div className="section-smooth">
        <StatsSection />
      </div>

      {/* 4-Step Working Process */}
      <div className="section-smooth">
        <ProcessSection />
      </div>

      {/* Featured Case Studies & Work */}
      <div className="section-smooth">
        <PortfolioSection onOpenLetTalk={handleOpenModal} />
      </div>

      {/* Client Testimonials */}
      <div className="section-smooth">
        <TestimonialsSection />
      </div>

      {/* Frequently Asked Questions */}
      <div className="section-smooth">
        <FaqSection />
      </div>

      {/* Contact & CTA Banner */}
      <div className="section-smooth">
        <ContactSection onOpenLetTalk={handleOpenModal} />
      </div>

      {/* Frosted Footer with Developer Signature */}
      <Footer />

      {/* Quick Direct WhatsApp Floating Widget */}
      <WhatsAppFloatingButton />

      {/* Let's Talk Consultation Modal */}
      <LetTalkModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </main>
  );
}
