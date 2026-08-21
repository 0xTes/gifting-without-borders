import ButtonLink from "@/components/ui/button-link";
import SectionHeading from "@/components/ui/section-heading";

const principles = [
  ["01", "Community-centred", "Support is most useful when it begins with the people, places, and priorities closest to the work."],
  ["02", "Integrity & transparency", "Care deserves clear communication, thoughtful stewardship, and room for questions."],
  ["03", "Sustainability", "Practical help is strongest when it can contribute to lasting possibilities over time."],
];

export default function MissionSnapshot() {
  return (
    <section aria-labelledby="mission-heading" className="section section--surface">
      <div className="container mission-snapshot">
        <SectionHeading
          eyebrow="Our approach"
          id="mission-heading"
          intro="A thoughtful approach to care can be local, practical, and lasting."
        >
          Generosity can be thoughtful, local, and lasting.
        </SectionHeading>

        <div className="mission-snapshot__principles">
          {principles.map(([number, title, detail]) => (
            <article className="mission-principle" key={number}>
              <p className="mission-principle__number">{number}</p>
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>

        <ButtonLink href="/about" variant="text">
          Learn about our approach <span aria-hidden="true">→</span>
        </ButtonLink>
      </div>
    </section>
  );
}
