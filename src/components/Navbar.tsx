'use client';

import Image from 'next/image';

interface NavbarProps {
  onOpenModal: () => void;
  onOpenSignup: () => void;
}

export default function Navbar({ onOpenModal, onOpenSignup }: NavbarProps) {
  return (
    <nav>
      <div className="container">
        <div className="nav-inner">
          <div className="nav-logo">
            <Image src="/fingoh-logo.png" alt="Fingoh" width={120} height={32} style={{ height: 32, width: 'auto' }} />
          </div>

          <ul className="nav-links">
            <li><a href="#platform">Platform</a></li>
            <li><a href="#how">How it works</a></li>
            <li><a href="#solutions">Solutions</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="mailto:hello@fingoh.ai">hello@fingoh.ai</a></li>
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <button
              className="nav-cta"
              onClick={onOpenSignup}
              style={{ background: '#3B9EE8', color: '#fff' }}
            >
              Start Free Trial
            </button>
            <button
              onClick={onOpenModal}
              style={{ background: 'none', border: '1px solid rgba(0,0,0,0.12)', padding: '9px 16px', borderRadius: 6, fontSize: 14, fontWeight: 600, color: '#5A6A7A', cursor: 'pointer', whiteSpace: 'nowrap', fontFamily: 'inherit' }}
            >
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}