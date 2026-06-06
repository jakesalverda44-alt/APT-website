import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/power-generation', label: 'Power Generation Division' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link className="navbar__brand" to="/" aria-label="Accurate Power & Technology — home">
          <img
            className="navbar__logo"
            src="/assets/APT_Logo_2026_white.png"
            alt="Accurate Power & Technology"
          />
        </Link>

        <nav className="navbar__nav" aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                'navbar__link' + (isActive ? ' navbar__link--active' : '')
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <Link className="btn btn--gold navbar__cta" to="/contact">Get a Bid</Link>
      </div>
    </header>
  )
}
