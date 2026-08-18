export default function ContentReadyPanel({ children, label = "In preparation", title }) {
  return (
    <article className="content-ready-panel">
      <p className="content-ready-panel__label">{label}</p>
      <h3 className="heading-card">{title}</h3>
      <p className="body-copy">{children}</p>
    </article>
  );
}
