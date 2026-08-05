'use client';

import Image from 'next/image';
import { Analytics } from '@/lib/analytics';

interface NavbarProps {
  onOpenModal: () => void;
  onOpenSignup?: () => void;
}

export default function Navbar({ onOpenModal, onOpenSignup }: NavbarProps) {
  return (
    <nav>
      <div className="container">
        <div className="nav-inner">
          <div className="nav-logo">
            <Image src="/fingoh-logo.png" alt="Fingoh.ai" width={120} height={32} style={{ height: 32, width: 'auto' }} />
          </div>

          <ul className="nav-links">
            <li><a href="#platform">Platform</a></li>
            <li><a href="#how">How it works</a></li>
            <li><a href="#solutions">Solutions</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="mailto:hello@fingoh.ai">hello@fingoh.ai</a></li>
          </ul>

          <div className="nav-actions">
            {onOpenSignup && (
              <button className="nav-signup" onClick={onOpenSignup}>
                Start Free Trial
              </button>
            )}
            <button className="nav-cta" onClick={() => { Analytics.bookDemoClick('navbar'); onOpenModal(); }}>
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}