const steps = [
  {
    title: 'Audit',
    desc: 'We map your funnel, brand signals, and unit economics to find precise growth leverage.',
  },
  {
    title: 'Architect',
    desc: 'A custom marketing strategy is built for your brand, including excellent digital promotion with website, optimization and automation',
  },
  {
    title: 'Activate',
    desc: 'Campaigns launch with rapid testing loops and creative production sprints.',
  },
  {
    title: 'Accelerate',
    desc: 'Weekly analytics reviews refine budget allocation and improve conversion outcomes.',
  },
];

export function HowItWorks() {
  return (
    <section className="container section" id="process">
      <div className="section-heading reveal-up framed-heading">
        <p className="eyebrow">Process</p>
        <h2>A transparent framework built to compound growth</h2>
      </div>

      <div className="timeline">
        {steps.map((step, index) => (
          <article className="timeline-step reveal-stagger" style={{ '--delay': `${index * 90}ms` }} key={step.title}>
            <div className="step-num">0{index + 1}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
