'use client';

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section id="hero">
      <div className="hero-grid" />
      <div className="hero-glow" />
      <div className="container">
        <div className="hero-inner">
          <div className="hero-headline-block">
            <div className="hero-tag">
              <span className="hero-tag-dot" />
              <span style={{ fontSize: 18, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                As an <strong>EXHIBITOR</strong>, you should —
              </span>
            </div>
            <h1 className="hero-h1">
              Stop waiting for the right visitors to walk in.
              <span className="accent">Start nurturing them yourself.</span>
            </h1>
          </div>

          <div className="hero-body">
            <div>
              <p className="hero-sub">
                Fingoh.ai is the Intent Intelligence Platform for B2B Trade Fairs — helping exhibitors identify,
                engage and convert the right prospects before, during and after every event.
              </p>

              <div className="hero-pills">
                {['Pre-show outreach', 'Live booth signals', 'Post-show follow-up', 'CRM sync'].map((pill, i) => (
                  <span key={i} className={`pill${i === 0 ? ' active' : ''}`}>{pill}</span>
                ))}
              </div>

              <div className="hero-actions">
                <button className="btn-primary" onClick={onOpenModal}>Book a Demo</button>
                <button className="btn-ghost" onClick={() => document.getElementById('platform')?.scrollIntoView({ behavior: 'smooth' })}>
                  See how it works →
                </button>
              </div>
            </div>

            <div className="hero-video-wrap">
              <div className="hero-video-overlay">
                <div className="play-btn-circle">
                  <svg viewBox="0 0 24 24" style={{ width: 28, height: 28, fill: '#fff', marginLeft: 4 }}>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="hero-video-label">Watch 2-min overview</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}