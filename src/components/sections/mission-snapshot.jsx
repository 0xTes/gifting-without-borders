import ButtonLink from "@/components/ui/button-link";
import SectionHeading from "@/components/ui/section-heading";

const principles = [
  ["01", "Dignity in every interaction", "People are more than the circumstances they face."],
  ["02", "Community-centered action", "We listen closely to the needs and context behind every initiative."],
  ["03", "Accountability in view", "Clear information helps supporters follow the purpose of their giving."],
];

export default function MissionSnapshot() {
  return (
    <section aria-labelledby="mission-heading" className="section section--surface">
      <div className="container mission-snapshot">
        <SectionHeading
          eyebrow="Mission snapshot"
          id="mission-heading"
          intro="Gifting Without Borders exists to support humanitarian work that helps people move forward with dignity, opportunity, and hope."
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
