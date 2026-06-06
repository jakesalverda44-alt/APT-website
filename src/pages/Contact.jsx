import PageHead from '../components/PageHead.jsx'
import { OFFICES } from '../data.js'

export default function Contact() {
  return (
    <>
      <PageHead
        eyebrow="Get a Bid"
        title="Contact us"
        lead="Tell us about your project and we'll get you a competitive bid. For outages and standby power failures, our emergency line runs 24/7/365."
      />

      <section className="section">
        <div className="container">
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
    </>
  )
}
