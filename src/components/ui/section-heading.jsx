export default function SectionHeading({ children, eyebrow, id, intro }) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="heading-section" id={id}>
        {children}
      </h2>
      {intro ? <p className="body-large section-heading__intro">{intro}</p> : null}
    </div>
  );
}
