import { Link } from 'react-router-dom'
import PageHead from '../components/PageHead.jsx'
import { ELECTRICAL_SERVICES, ALA_CARTE } from '../data.js'

export default function Services() {
  return (
    <>
      <PageHead
        eyebrow="Commercial Electrical Contractor"
        title="Services"
        lead="Full-scope commercial electrical work for general contractors and facility owners across Central Florida and the Gulf Coast."
      />

      <section className="section">
        <div className="container">
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

      <section className="section section--alt">
        <div className="container teaser">
          <div className="teaser__text">
            <h2 className="section__title">Need standby power?</h2>
            <p className="section__lead teaser__lead">
              Our Power Generation Division provides new standby power install and
              full preventive maintenance — see what we offer.
            </p>
          </div>
          <Link className="btn btn--gold" to="/power-generation">Power Generation Division</Link>
        </div>
      </section>
    </>
  )
}
