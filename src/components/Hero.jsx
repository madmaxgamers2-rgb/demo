export function Hero() {
  return (
    <section className="hero section container">
      <div className="hero-copy reveal-up">
        <p className="eyebrow">Ascentra Marketing Agency</p>
        <h1>Growth is designed, not guessed.</h1>
        <p className="subhead">
          We blend brand strategy, performance media, and creative direction to
          build predictable growth systems for ambitious teams.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#">Book Strategy Call</a>
          <a className="button button-secondary" href="#services">View Services</a>
        </div>
      </div>

      <div className="hero-visual reveal-up-delay" aria-hidden="true">
        <span className="float-geo geo-a" />
        <span className="float-geo geo-b" />
        <span className="float-geo geo-c" />
        <div className="hero-frame">
          <div className="frame-title">Q2 Growth Blueprint</div>
          <div className="hero-board">
            <div className="board-card">
              <h4>Brand Narrative</h4>
              <p>Positioning and message framework</p>
            </div>
            <div className="board-card pink">
              <h4>Paid Media</h4>
              <p>Creative testing and CAC optimization</p>
            </div>
            <div className="board-card">
              <h4>Analytics</h4>
              <p>Weekly dashboards and growth loops</p>
            </div>
          </div>
          <div className="metric-pill">Avg client growth +128%</div>
          <div className="hero-lines">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </section>
  );
}
