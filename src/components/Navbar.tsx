'use client';

import Image from 'next/image';
import { useState } from 'react';

interface NavbarProps {
  onOpenModal: () => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

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

          <button className="nav-cta" onClick={onOpenModal}>
            Book a Demo
          </button>
        </div>
      </div>
    </nav>
  );
}