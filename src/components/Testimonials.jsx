const testimonials = [
  {
    quote:
      'Ascentra helped us align brand and performance under one strategy. Pipeline quality improved within the first month.',
    name: 'Nadia Brooks',
    role: 'CMO, Helios Commerce',
  },
  {
    quote:
      'Their team built a testing culture we were missing. Our paid channels now scale with confidence instead of guesswork.',
    name: 'Evan Rossi',
    role: 'VP Growth, Northline',
  },
  {
    quote:
      'From creative to analytics, every deliverable felt senior-level. We finally have clarity in our monthly growth roadmap.',
    name: 'Camila Hart',
    role: 'Founder, Arbor Foods',
  },
];

export function Testimonials() {
  return (
    <section className="container section">
      <div className="section-heading reveal-up framed-heading">
        <p className="eyebrow">Testimonials</p>
        <h2>Partners trust Ascentra to deliver strategic, compounding results</h2>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((item, idx) => (
          <article className="testimonial-card reveal-stagger" style={{ '--delay': `${idx * 80}ms` }} key={item.name}>
            <p>“{item.quote}”</p>
            <div className="author">
              <span className="avatar" />
              <div>
                <strong>{item.name}</strong>
                <small>{item.role}</small>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
