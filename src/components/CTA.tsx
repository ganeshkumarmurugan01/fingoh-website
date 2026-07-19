interface CTAProps {
  onOpenModal: () => void;
}

export default function CTA({ onOpenModal }: CTAProps) {
  return (
    <section id="cta">
      <div className="cta-glow" />
      <div className="container">
        <h2>Your next show is closer than you think</h2>
        <p>
          Get set up in 30 minutes. Have your prospect list ready weeks before you arrive.
          Follow up automatically the moment the show ends.
        </p>
        <div className="cta-actions">
          <button className="btn-cta-primary" onClick={onOpenModal}>
            Book a Demo
          </button>
          <button
            className="btn-cta-ghost"
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Pricing
          </button>
        </div>
      </div>
    </section>
  );
}