export default function ProjectReadinessCard({ detail, title }) {
  return (
    <article className="project-readiness-card">
      <div aria-hidden="true" className="project-readiness-card__graphic">
        <span />
        <span />
        <span />
      </div>
      <p className="project-readiness-card__label">Project profile</p>
      <h3 className="heading-card">{title}</h3>
      <p className="body-copy">{detail}</p>
    </article>
  );
}
