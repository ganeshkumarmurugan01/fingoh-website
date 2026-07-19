'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Problem from '@/components/Problem';
import Platform from '@/components/Platform';
import HowItWorks from '@/components/HowItWorks';
import Questions from '@/components/Questions';
import Solutions from '@/components/Solutions';
import Pricing from '@/components/Pricing';
import Moats from '@/components/Moats';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import WaitlistModal from '@/components/WaitlistModal';
import WaitlistTypeformModal from '@/components/WaitlistTypeformModal';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar onOpenModal={() => setModalOpen(true)} />
      <main>
        <Hero onOpenModal={() => setModalOpen(true)} />
        <Stats />
        <Problem />
        <Platform />
        <HowItWorks />
        <Questions />
        <Solutions
          onOpenModal={() => setModalOpen(true)}
          onOpenWaitlist={() => setWaitlistOpen(true)}
        />
        <Pricing onOpenModal={() => setModalOpen(true)} />
        <Moats />
        <CTA onOpenModal={() => setModalOpen(true)} />
      </main>
      <Footer />
      <WaitlistModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <WaitlistTypeformModal isOpen={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
    </>
  );
}