const features = [
  'Brand Strategy',
  'Paid Media',
  'Creative Studio',
  'Analytics & CRO',
];

export function FeaturesGrid() {
  return (
    <section className="container section" id="services">
      <div className="section-heading reveal-up framed-heading">
        <p className="eyebrow">Services</p>
        <h2>Integrated capabilities for brands that want measurable momentum</h2>
      </div>

      <div className="feature-grid">
        {features.map((feature, idx) => (
          <article className="feature-card reveal-stagger" style={{ '--delay': `${idx * 70}ms` }} key={feature}>
            <span className="icon-dot" aria-hidden="true" />
            <h3>{feature}</h3>
            <p>
              We plan, launch, and optimize each channel with the same strategic
              backbone and performance discipline.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
