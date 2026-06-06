import './App.css'

/* ───────────── Content (sourced from the company Website Build Brief in Drive) ───────────── */

const SERVICES = [
  {
    title: 'Commercial Electrical',
    blurb: 'New construction and commercial electrical build-out, start to finish.',
    items: [
      'Bidding & estimating from project plans',
      'Contracting & permitting',
      'Qualified on-staff electricians for all electrical work',
      'Project management',
    ],
  },
  {
    title: 'Generators',
    blurb: 'New generator equipment sales, install, and transfer switches.',
    items: [
      'Kohler, Generac, Gillette, Briggs & Stratton, Cummins',
      'Residential & industrial standby power',
      'ASCO & Thomson transfer switches',
      'Sizing, installation & startup',
    ],
  },
  {
    title: 'Maintenance Plans',
    blurb: 'Flexible preventive maintenance for every generator and transfer switch.',
    items: [
      'Monthly, quarterly, semi-annual & annual PM plans',
      'Service all major generator & transfer-switch brands',
      'Resistive/reactive load bank testing',
      'NFPA110 & AHCA compliance · coastal & flood-zone packages',
    ],
  },
]

const ALA_CARTE = [
  'Remote monitoring',
  'Facilities automation integration',
  'Systems analysis',
  'Thermography',
  'Owner training',
  'Installation services',
  'Fuel delivery',
  'Fuel polishing',
  '24/7/365 on-demand service',
  'Hurricane plans',
  'Emergency response teams',
  'Commercial lighting (interior & exterior)',
  'Generator rentals',
]

const GENERATOR_CAPABILITIES = [
  '500KW plus six 100KW load banks — load testing rentals up to 2MW',
  'In-house fuel polishing & fuel testing (Polaris Labs)',
  'Engine diagnostics & ATS software',
  'OSHA 10–40 & NFPA110 certified in-house training',
  'Life-safety specialists — nursing homes & assisted living facilities',
  'Authorized dealer & servicer for Kohler, Generac, and Cummins',
]

const PROJECTS = [
  { name: '7-Eleven #42758', gc: 'Presmont GC', type: 'Commercial Electrical' },
  { name: '7-Eleven #42906', gc: 'Presmont GC', type: 'Commercial Electrical' },
  { name: 'Aquashine Express Car Wash', gc: 'Presmont GC', type: 'Commercial Electrical' },
  { name: "Big Dan's Car Wash", gc: 'Bay to Bay Properties', type: 'Commercial Electrical' },
  { name: 'TSS — Self Storage', gc: 'Bay to Bay Properties', type: 'Commercial Electrical' },
]

const CORE_VALUES = [
  'We believe our employees come first, and we respect our suppliers.',
  'We stay involved in our community and are dedicated to helping the less fortunate.',
  'We have a passion for execution.',
  'We are experience-focused rather than price-focused.',
  'We strive to achieve 100% customer satisfaction.',
]

const OFFICES = [
  {
    label: 'Headquarters',
    lines: ['15519 W. US Highway 441, Suite A101', 'Eustis, FL 32726'],
    phone: '352-735-8285',
  },
  {
    label: 'Sarasota',
    lines: ['6341 Porter Road, Unit 8', 'Sarasota, FL 34240'],
    phone: '941-867-6580',
  },
]

export default function App() {
  return (
    <>
      {/* 3px gold bar across the very top of the page, above the navbar */}
      <div className="top-bar" />

      {/* ───────────── Navbar (sticky) ───────────── */}
      <header className="navbar">
        <div className="container navbar__inner">
          <a className="navbar__brand" href="#top" aria-label="Accurate Power & Technology — home">
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
      <section className="hero" id="top">
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

      {/* ───────────── Stats band ───────────── */}
      <section className="stats">
        <div className="container stats__inner">
          <div className="stat">
            <span className="stat__value">2005</span>
            <span className="stat__label">Florida certified since</span>
          </div>
          <div className="stat">
            <span className="stat__value">5,500+</span>
            <span className="stat__label">Generator engines maintained statewide</span>
          </div>
          <div className="stat">
            <span className="stat__value">3,500+</span>
            <span className="stat__label">Clients served</span>
          </div>
          <div className="stat">
            <span className="stat__value">24/7/365</span>
            <span className="stat__label">Emergency service</span>
          </div>
        </div>
      </section>

      {/* ───────────── Services ───────────── */}
      <section id="services" className="section">
        <div className="container">
          <h2 className="section__title">Services</h2>
          <p className="section__lead">
            Three pillars — commercial electrical, standby generators, and
            preventive maintenance — backed by qualified, on-staff electricians.
          </p>

          <div className="cards">
            {SERVICES.map((s) => (
              <article className="card" key={s.title}>
                <h3 className="card__title">{s.title}</h3>
                <p className="card__blurb">{s.blurb}</p>
                <ul className="card__list">
                  {s.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="alacarte">
            <span className="alacarte__label">Also available:</span>
            <div className="alacarte__pills">
              {ALA_CARTE.map((a) => (
                <span className="pill" key={a}>{a}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Projects ───────────── */}
      <section id="projects" className="section section--alt">
        <div className="container">
          <h2 className="section__title">Projects</h2>
          <p className="section__lead">
            A selection of active commercial work delivered for our general
            contractor partners across Central Florida.
          </p>

          <div className="projects">
            {PROJECTS.map((p) => (
              <article className="project" key={p.name}>
                {/* TODO: replace with job photo once project images are available in Drive */}
                <div className="project__thumb" aria-hidden="true">
                  <span className="project__bolt">⚡</span>
                </div>
                <div className="project__body">
                  <span className="project__type">{p.type}</span>
                  <h3 className="project__name">{p.name}</h3>
                  <p className="project__gc">General contractor — {p.gc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Generator Division ───────────── */}
      <section id="generator-division" className="section">
        <div className="container">
          <h2 className="section__title">Generator Division</h2>
          <p className="section__lead">
            Operating as <strong>&ldquo;A Generator Guy,&rdquo;</strong> our power
            generation division designs, installs, services, and tests standby
            power for commercial, industrial, and life-safety facilities.
          </p>

          <ul className="feature-list">
            {GENERATOR_CAPABILITIES.map((c) => (
              <li className="feature-list__item" key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────── About ───────────── */}
      <section id="about" className="section section--alt">
        <div className="container about">
          <div className="about__main">
            <h2 className="section__title">About</h2>
            <p className="about__text">
              Accurate Power and Technology, Inc. is a Florida State Certified
              Electrical Contractor founded in 2005, specializing in standby
              backup power generation and commercial electrical service. We&apos;re
              an established, family-run Florida business serving Central Florida
              and the Gulf Coast, with a deep public-sector and life-safety track
              record.
            </p>
            <blockquote className="about__mission">
              Accurate Power and Technology provides the best possible
              cutting-edge backup power product for any budget. We focus on the
              best value and service across every client we serve.
            </blockquote>

            <h3 className="about__subhead">Core values</h3>
            <ul className="values">
              {CORE_VALUES.map((v) => (
                <li key={v}>{v}</li>
              ))}
            </ul>
          </div>

          <aside className="about__side">
            <h3 className="about__subhead">Credentials</h3>
            <ul className="creds">
              <li><span>License</span>EC13007737</li>
              <li><span>Certified</span>Florida State Electrical Contractor</li>
              <li><span>Since</span>2005</li>
              <li><span>Compliance</span>NFPA110 &amp; AHCA</li>
            </ul>
          </aside>
        </div>
      </section>

      {/* ───────────── Contact ───────────── */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section__title">Get a bid</h2>
          <p className="section__lead">
            Tell us about your project and we&apos;ll get you a competitive bid.
            For outages and standby power failures, our emergency line runs
            24/7/365.
          </p>

          <div className="offices">
            {OFFICES.map((o) => (
              <div className="office" key={o.label}>
                <span className="office__label">{o.label}</span>
                {o.lines.map((l) => (
                  <span className="office__line" key={l}>{l}</span>
                ))}
                <a className="office__phone" href={`tel:${o.phone.replace(/-/g, '')}`}>
                  {o.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Footer ───────────── */}
      <footer className="footer">
        <div className="container footer__inner">
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
      </footer>
    </>
  )
}
