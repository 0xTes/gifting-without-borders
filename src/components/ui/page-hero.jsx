export default function PageHero({ children, eyebrow, intro, title }) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="page-hero__content">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="body-large">{intro}</p>
          {children}
        </div>
      </div>
    </section>
  );
}
