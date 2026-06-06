import { Link } from 'react-router-dom'
import PageHead from '../components/PageHead.jsx'
import { PG_INSTALL, PG_MAINTENANCE, PG_CAPABILITIES } from '../data.js'

export default function PowerGeneration() {
  return (
    <>
      <PageHead
        eyebrow="A division of Accurate Power & Technology"
        title="Power Generation Division"
        lead="Standby power for commercial, industrial, and life-safety facilities — new install and full preventive maintenance, all from licensed in-house crews."
      />

      <section className="section">
        <div className="container">
          <div className="split">
            <article className="split__col">
              <h2 className="split__title">New Install</h2>
              <ul className="feature-list feature-list--single">
                {PG_INSTALL.map((i) => (
                  <li className="feature-list__item" key={i}>{i}</li>
                ))}
              </ul>
            </article>

            <article className="split__col">
              <h2 className="split__title">Maintenance</h2>
              <ul className="feature-list feature-list--single">
                {PG_MAINTENANCE.map((m) => (
                  <li className="feature-list__item" key={m}>{m}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <h2 className="section__title">Capabilities on hand</h2>
          <ul className="feature-list">
            {PG_CAPABILITIES.map((c) => (
              <li className="feature-list__item" key={c}>{c}</li>
            ))}
          </ul>

          <div className="section__cta">
            <Link className="btn btn--gold" to="/contact">Request a quote</Link>
          </div>
        </div>
      </section>
    </>
  )
}
