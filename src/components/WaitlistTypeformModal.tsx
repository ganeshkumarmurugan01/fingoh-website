'use client';

interface WaitlistTypeformModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistTypeformModal({ isOpen, onClose }: WaitlistTypeformModalProps) {
  return (
    <div className={`modal-overlay${isOpen ? ' open' : ''}`} onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#fff',
          borderRadius: 20,
          width: '100%',
          maxWidth: 680,
          height: '90vh',
          maxHeight: 680,
          overflow: 'hidden',
          boxShadow: '0 40px 80px rgba(0,0,0,0.35)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Header */}
        <div style={{
          padding: '24px 28px 20px',
          borderBottom: '1px solid rgba(0,0,0,0.08)',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          flexShrink: 0,
        }}>
          <div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 20,
              fontWeight: 700,
              marginBottom: 4,
              color: '#0A1628',
            }}>
              Join the Fingoh.ai Waitlist
            </h3>
            <p style={{ fontSize: 13, color: '#5A6A7A' }}>
              Be first to know when Fingoh.ai Organiser launches.
            </p>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(0,0,0,0.06)', border: 'none', borderRadius: '50%',
              width: 32, height: 32, cursor: 'pointer',
              fontSize: 16, color: '#5A6A7A',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            ✕
          </button>
        </div>

        {/* Typeform iframe */}
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <iframe
            src="https://form.typeform.com/to/evl9eZLX?typeform-embed=embed-widget&hide-headers=true&hide-footer=true&background=ffffff&font-color=1a1a1a"
            style={{
              border: 'none',
              display: 'block',
              width: '100%',
              height: '100%',
            }}
            allow="camera; microphone; autoplay; encrypted-media;"
            title="Join the Fingoh.ai Waitlist"
          />
        </div>
      </div>
    </div>
  );
}