const stats = [
  { top: 'No. of Clients', value: '120+', bottom: 'we are working with' },
  { top: 'No. of Clients', value: '640+', bottom: 'we have worked with' },
  { top: 'No. of people', value: '9,400+', bottom: 'contacted us' },
];

export function StatsStrip() {
  return (
    <section className="container section-sm">
      <div className="stats-strip reveal-up">
        {stats.map((stat) => (
          <article key={`${stat.top}-${stat.bottom}`}>
            <p className="stat-top">{stat.top}</p>
            <h3>{stat.value}</h3>
            <p>{stat.bottom}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
