import { Link } from 'react-router-dom'
import { ELECTRICAL_SERVICES, RELY_POINTS } from '../data.js'

export default function Home() {
  return (
    <>
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
            <Link className="btn btn--gold" to="/contact">Request a bid</Link>
            <Link className="btn btn--outline" to="/projects">View our work</Link>
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

      {/* ───────────── Why GCs rely on us ───────────── */}
      <section className="section">
        <div className="container">
          <h2 className="section__title">A commercial electrical contractor you can rely on</h2>
          <p className="section__lead">
            General contractors call us when the electrical scope has to be done
            right — licensed crews, clean bids, and schedules we hold to.
          </p>

          <div className="rely">
            {RELY_POINTS.map((p) => (
              <div className="rely__item" key={p.title}>
                <h3 className="rely__title">{p.title}</h3>
                <p className="rely__body">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Commercial electrical services overview ───────────── */}
      <section className="section section--alt">
        <div className="container">
          <h2 className="section__title">What we do</h2>
          <p className="section__lead">
            Full-scope commercial electrical work, from ground-up construction to
            tenant improvements and service upgrades.
          </p>

          <div className="cards">
            {ELECTRICAL_SERVICES.map((s) => (
              <article className="card" key={s.title}>
                <h3 className="card__title">{s.title}</h3>
                <ul className="card__list">
                  {s.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="section__cta">
            <Link className="btn btn--outline" to="/services">All services</Link>
          </div>
        </div>
      </section>

      {/* ───────────── Stats band (commercial focus) ───────────── */}
      <section className="stats">
        <div className="container stats__inner">
          <div className="stat">
            <span className="stat__value">2005</span>
            <span className="stat__label">Florida certified since</span>
          </div>
          <div className="stat">
            <span className="stat__value">EC13007737</span>
            <span className="stat__label">State electrical license</span>
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

      {/* ───────────── Power Generation teaser (secondary) ───────────── */}
      <section className="section">
        <div className="container teaser">
          <div className="teaser__text">
            <h2 className="section__title">Power Generation Division</h2>
            <p className="section__lead teaser__lead">
              Beyond commercial electrical, our Power Generation Division handles
              new standby power install and full preventive maintenance for
              commercial, industrial, and life-safety facilities.
            </p>
          </div>
          <Link className="btn btn--gold" to="/power-generation">Explore the division</Link>
        </div>
      </section>

      {/* ───────────── CTA band ───────────── */}
      <section className="cta-band">
        <div className="container cta-band__inner">
          <div>
            <h2 className="cta-band__title">Have a project to bid?</h2>
            <p className="cta-band__text">
              Send us the plans and we&apos;ll get you a competitive bid.
            </p>
          </div>
          <Link className="btn btn--gold" to="/contact">Get a bid</Link>
        </div>
      </section>
    </>
  )
}
