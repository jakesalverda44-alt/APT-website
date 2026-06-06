import PageHead from '../components/PageHead.jsx'
import { CORE_VALUES } from '../data.js'

export default function About() {
  return (
    <>
      <PageHead
        eyebrow="Established 2005"
        title="About"
        lead="An established, family-run Florida business serving Central Florida and the Gulf Coast."
      />

      <section className="section">
        <div className="container about">
          <div className="about__main">
            <p className="about__text">
              Accurate Power and Technology, Inc. is a Florida State Certified
              Electrical Contractor founded in 2005, specializing in commercial
              electrical service and standby backup power. We carry a deep
              public-sector and life-safety track record, and we pride ourselves
              on being confident and competent without being corporate.
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
    </>
  )
}
