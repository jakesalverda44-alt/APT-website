import { Link } from 'react-router-dom'
import PageHead from '../components/PageHead.jsx'
import { PROJECTS } from '../data.js'

export default function Projects() {
  return (
    <>
      <PageHead
        eyebrow="Our Work"
        title="Projects"
        lead="A selection of commercial work delivered for our general contractor partners across Central Florida."
      />

      <section className="section">
        <div className="container">
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

          <div className="section__cta">
            <Link className="btn btn--gold" to="/contact">Start your project</Link>
          </div>
        </div>
      </section>
    </>
  )
}
