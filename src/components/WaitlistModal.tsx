'use client';

import { useState, useEffect } from 'react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [calendlyKey, setCalendlyKey] = useState('init');

  useEffect(() => {
    if (isOpen) {
      setCalendlyKey(String(Date.now()));
    }
  }, [isOpen]);

  return (
    <div className={`modal-overlay${isOpen ? ' open' : ''}`} onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#fff',
          borderRadius: 20,
          width: '100%',
          maxWidth: 920,
          height: '92vh',
          maxHeight: 740,
          display: 'flex',
          overflow: 'hidden',
          boxShadow: '0 40px 80px rgba(0,0,0,0.35)',
          position: 'relative',
        }}
      >
        {/* ── LEFT PANEL ── */}
        <div
          style={{
            width: 280,
            flexShrink: 0,
            background: 'linear-gradient(160deg, #0A1628 0%, #0f2040 100%)',
            padding: '48px 32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/fingoh-logo-white.png"
              alt="Fingoh.ai"
              style={{ height: 28, width: 'auto', marginBottom: 12 }}
            />
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: 13,
              fontWeight: 700,
              color: '#00C2A8',
              marginBottom: 36,
              letterSpacing: '0.01em',
            }}>
              Product Demonstration · 30 mins
            </div>

            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 22,
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.3,
              marginBottom: 16,
            }}>
              See Fingoh.ai in action
            </h2>
            <p style={{
              fontSize: 13,
              color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.7,
              marginBottom: 36,
            }}>
              Book a 30-minute demo and see how Fingoh.ai helps exhibitors identify, engage and
              convert the right prospects at every trade fair.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { icon: '🎯', text: 'ICP-matched prospect lists' },
                { icon: '⚡', text: 'Pre-show outreach automation' },
                { icon: '📊', text: 'Live intent scoring' },
                { icon: '🔄', text: 'Post-show follow-up engine' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontSize: 16 }}>{item.icon}</span>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>
            © 2026 Fingoh.ai. Akiraas Pte. Ltd.
          </div>
        </div>

        {/* ── RIGHT PANEL ── */}
        <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: 16, right: 16, zIndex: 10,
              background: 'rgba(0,0,0,0.06)', border: 'none', borderRadius: '50%',
              width: 32, height: 32, cursor: 'pointer',
              fontSize: 16, color: '#5A6A7A',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            ✕
          </button>

          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
            <iframe
              key={calendlyKey}
              src="https://calendly.com/fingoh/30min?embed_domain=fingoh.ai&embed_type=Inline&hide_landing_page_details=1&hide_gdpr_banner=1&hide_event_type_details=1"
              style={{
                border: 'none',
                display: 'block',
                width: '100%',
                height: 'calc(100% + 60px)',
                marginTop: 60,
              }}
              title="Book a Demo with Fingoh.ai"
            />
          </div>
        </div>
      </div>
    </div>
  );
}