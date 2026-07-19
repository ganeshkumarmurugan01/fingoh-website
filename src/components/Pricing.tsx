interface PricingProps {
  onOpenModal: () => void;
}

export default function Pricing({ onOpenModal }: PricingProps) {
  const plans = [
    {
      name: 'Starter',
      for: 'Solo exhibitors and small teams attending 1–2 shows per year',
      amount: 'From $299 / show',
      features: [
        'Up to 500 ICP-matched prospects',
        'Pre-show email sequences',
        'Live badge scan scoring',
        'Post-show follow-up (1 sequence)',
        'CSV export',
      ],
      featured: false,
      cta: 'Get Started',
    },
    {
      name: 'Growth',
      for: 'Teams attending 3–6 shows per year who want full automation',
      amount: 'From $799 / show',
      features: [
        'Up to 2,000 ICP-matched prospects',
        'Multi-channel outreach (email + LinkedIn)',
        'Live intent scoring dashboard',
        'Post-show follow-up (3 sequences)',
        'HubSpot & Salesforce sync',
        'Show ROI reporting',
      ],
      featured: true,
      cta: 'Get Started',
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
              <button
                className={`btn-price ${plan.featured ? 'primary-btn' : 'ghost-btn'}`}
                onClick={onOpenModal}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
