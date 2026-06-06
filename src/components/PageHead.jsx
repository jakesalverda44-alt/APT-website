export default function PageHead({ eyebrow, title, lead }) {
  return (
    <section className="pagehead">
      <div className="container">
        {eyebrow && <span className="pagehead__eyebrow">{eyebrow}</span>}
        <h1 className="pagehead__title">{title}</h1>
        {lead && <p className="pagehead__lead">{lead}</p>}
      </div>
    </section>
  )
}
