import './App.css'

export default function App() {
  return (
    <>
      {/* 3px gold bar across the very top of the page, above the navbar */}
      <div className="top-bar" />

      {/* ───────────── Navbar (sticky) ───────────── */}
      <header className="navbar">
        <div className="container navbar__inner">
          <a className="navbar__brand" href="/" aria-label="Accurate Power & Technology — home">
            <img
              className="navbar__logo"
              src="/assets/APT_Logo_2026_white.png"
              alt="Accurate Power & Technology"
            />
          </a>

          <nav className="navbar__nav" aria-label="Primary">
            <a className="navbar__link" href="#services">Services</a>
            <a className="navbar__link" href="#projects">Projects</a>
            <a className="navbar__link" href="#generator-division">Generator Division</a>
            <a className="navbar__link" href="#about">About</a>
          </nav>

          <a className="btn btn--gold navbar__cta" href="#contact">Get a Bid</a>
        </div>
      </header>

      {/* ───────────── Hero ───────────── */}
      <section className="hero">
        <div className="container">
          <span className="hero__eyebrow">
            Licensed Commercial Electrical Contractor · Central Florida
          </span>

          <h1 className="hero__title">
            Central Florida&apos;s commercial electrical{' '}
            <span className="hero__title-accent">partner.</span>
          </h1>

          <p className="hero__subhead">
            Service upgrades, tenant improvements, EV charging, and standby
            power — built for general contractors who need it done right.
          </p>

          <div className="hero__actions">
            <a className="btn btn--gold" href="#contact">Request a bid</a>
            <a className="btn btn--outline" href="#projects">View our work</a>
          </div>
        </div>
      </section>

      {/* ───────────── Trust bar ───────────── */}
      <section className="trust-bar">
        <div className="container trust-bar__inner">
          <span className="trust-bar__label">Trusted by:</span>
          <span className="trust-bar__pill">Big Dan&apos;s Car Wash</span>
          <span className="trust-bar__pill">Tommy&apos;s Car Wash</span>
          <span className="trust-bar__pill">Kohler Platinum Dealer</span>
        </div>
      </section>

      {/* ───────────── Stub sections (to be filled in later) ───────────── */}

      {/* TODO: Services section — content to be added later */}
      <section id="services" />

      {/* TODO: Projects section — content to be added later */}
      <section id="projects" />

      {/* TODO: Generator Division section — content to be added later */}
      <section id="generator-division" />

      {/* TODO: About section — content to be added later */}
      <section id="about" />

      {/* TODO: Contact / Get a Bid section — content to be added later */}
      <section id="contact" />
    </>
  )
}
