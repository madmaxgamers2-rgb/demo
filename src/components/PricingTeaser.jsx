const plans = [
  { name: 'Launch', price: '$2,500', detail: 'Foundational growth sprint', featured: false },
  { name: 'Scale', price: '$6,800', detail: 'Cross-channel monthly retainer', featured: true },
  { name: 'Dominance', price: '$14,000', detail: 'Full-funnel embedded growth team', featured: false },
];

export function PricingTeaser() {
  return (
    <section className="container section" id="pricing">
      <div className="section-heading reveal-up framed-heading">
        <p className="eyebrow">Pricing</p>
        <h2>Flexible retainers for the stage your brand is in right now</h2>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, idx) => (
          <article
            className={`plan-card reveal-stagger ${plan.featured ? 'featured' : ''}`}
            style={{ '--delay': `${idx * 80}ms` }}
            key={plan.name}
          >
            {plan.featured && <span className="pill">Most Popular</span>}
            <h3>{plan.name}</h3>
            <p className="price">{plan.price}<span>/month</span></p>
            <p>{plan.detail}</p>
            <a href="#" className={`button ${plan.featured ? 'button-primary' : 'button-secondary'}`}>
              Choose {plan.name}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
