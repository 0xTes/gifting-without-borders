import ButtonLink from "@/components/ui/button-link";
import SectionHeading from "@/components/ui/section-heading";

const principles = [
  ["01", "Community-centred", "The legacy site described working alongside communities and local partners so initiatives reflect community needs and priorities."],
  ["02", "Integrity & transparency", "The legacy site framed accountability and transparent stewardship as guides to its work."],
  ["03", "Sustainability", "The legacy site described looking for support that could be sustained over time."],
];

export default function MissionSnapshot() {
  return (
    <section aria-labelledby="mission-heading" className="section section--surface">
      <div className="container mission-snapshot">
        <SectionHeading
          eyebrow="From the legacy public record"
          id="mission-heading"
          intro="The previous public site described a philosophy of care beyond social boundaries. It is retained here as historical context, not a newly adopted mission."
        >
          A history of service, told with care.
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
