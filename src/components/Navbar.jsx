const navItems = ['Services', 'Process', 'Pricing'];

export function Navbar() {
  return (
    <header className="site-header">
      <nav className="container nav-wrap">
        <a className="brand" href="#">
          <span className="brand-mark" />
          Ascentra
        </a>

        <ul className="nav-links" aria-label="Primary Navigation">
          {navItems.map((item) => (
            <li key={item}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a className="link-button" href="#contact">Contact</a>
          <a className="button button-primary" href="#">Book Strategy Call</a>
        </div>
      </nav>
    </header>
  );
}
