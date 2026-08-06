import Link from "next/dist/client/link";

interface PricingProps {
  onOpenModal: () => void;
  onOpenSignup: () => void;
}

export default function Pricing({ onOpenModal, onOpenSignup }: PricingProps) {
  const plans = [
    {
      name: 'Starter',
      for: 'Solo exhibitors and small teams attending 1–2 shows per year',
      amount: 'Contact Sales',
      features: [
        'Up to 500 ICP-matched prospects',
        'Up to 50 Deep IEI analysis reports',
        'Live badge scan scoring',
        'Post-show follow-up (1 sequence)',
        'CSV export',
      ],
      featured: false,
      cta: 'Start Free Trial',
      ctaAction: 'signup' as const,
    },
    {
      name: 'Growth',
      for: 'Teams attending 3–6 shows per year who want full automation',
      amount: 'Contact Sales',
      features: [
        'Up to 2,000 ICP-matched prospects',
        'Up to 200 Deep IEI analysis reports',
        'Multi-channel outreach (email + LinkedIn)',
        'Live intent scoring dashboard',
        'Post-show follow-up (3 sequences)',
        'CRM Integration (Zoho CRM, HubSpot, Salesforce)',
        'Show ROI reporting',
      ],
      featured: true,
      cta: 'Start Free Trial',
      ctaAction: 'signup' as const,
    },
    {
      name: 'Scale',
      for: 'Enterprise teams with multiple shows, regions and products',
      amount: 'Custom pricing',
      features: [
        'Unlimited prospects',
        'Dedicated account manager',
        'Custom outreach templates',
        'Multi-show dashboard',
        'API access',
        'White-glove onboarding',
      ],
      featured: false,
      cta: 'Talk to Sales',
      ctaAction: 'demo' as const,
    },
  ];

  return (
    <section id="pricing">
      <div className="container">
        <div className="pricing-header">
          <h2>Simple, show-based pricing</h2>
          <p>Pay per show. No annual lock-in. Cancel any time.</p>
          <div className="pricing-philosophy">
            <strong>Our philosophy:</strong> You should only pay when you exhibit.
            Fingoh pricing is tied to shows, not seats — so your whole team is included.
          </div>
        </div>

        <div className="pricing-cards">
          {plans.map((plan, i) => (
            <div key={i} className={`price-card${plan.featured ? ' featured' : ''}`}>
              {plan.featured && <div className="popular-tag">Most Popular</div>}
              <div className="price-name">{plan.name}</div>
              <div className="price-for">{plan.for}</div>
              <div className="price-amount">{plan.amount}</div>
              <ul className="price-features">
                {plan.features.map((f, j) => (
                  <li key={j}>{f}</li>
                ))}
              </ul>
              <Link href="/signup">
                <button className={`btn-price ${plan.featured ? 'primary-btn' : 'ghost-btn'}`}>
                {plan.cta}
                </button>
                </Link>
            </div>
          ))}
        </div>
        {/* Add-ons note */}
        <div style={{
          textAlign: 'center',
          marginTop: 24,
          padding: '16px 24px',
          background: 'rgba(0,194,168,0.04)',
          border: '1px solid rgba(0,194,168,0.15)',
          borderRadius: 10,
          fontSize: 14,
          color: 'var(--slate)',
          lineHeight: 1.6,
        }}>
          🧩 <strong style={{ color: 'var(--navy)' }}>Need more?</strong> All plans support
          add-ons — purchase additional ICP-matched contacts, Deep IEI analysis reports, or
          extra outreach sequences on demand.{' '}
          <button
            onClick={onOpenModal}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--teal)',
              fontWeight: 600,
              cursor: 'pointer',
              fontSize: 14,
              padding: 0,
            }}
          >
            Talk to us about add-ons →
          </button>
        </div>
      </div>
    </section>
  );
}
