import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img
            className="footer__logo"
            src="/assets/APT_Logo_2026_white.png"
            alt="Accurate Power & Technology"
          />
          <div className="footer__meta">
            <span>Accurate Power and Technology, Inc.</span>
            <span>FL Certified Electrical Contractor · License EC13007737</span>
            <span>Eustis · Sarasota · Central Florida &amp; Gulf Coast</span>
          </div>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/power-generation">Power Generation Division</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Get a Bid</Link>
        </nav>
      </div>
    </footer>
  )
}
