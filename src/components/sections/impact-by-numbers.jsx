import ButtonLink from "@/components/ui/button-link";
import SectionHeading from "@/components/ui/section-heading";
import { legacyImpactMetrics, legacyImpactQualifier } from "@/data/legacy-records";

export default function ImpactByNumbers() {
  return (
    <section aria-labelledby="impact-heading" className="section section--teal">
      <div className="container">
        <div className="impact-layout">
          <SectionHeading
            eyebrow="Impact by numbers"
            id="impact-heading"
            intro="A preserved public snapshot of the organisation’s legacy figures, presented with its limitations intact."
          >
            Numbers deserve their context.
          </SectionHeading>
          <div className="impact-layout__aside">
            <p>
              These figures were published on the legacy homepage and are now shared with project-owner approval. They are not presented as audited or current totals.
            </p>
            <ButtonLink href="/impact" variant="text-light">
              Explore our impact approach <span aria-hidden="true">→</span>
            </ButtonLink>
          </div>
        </div>

        <dl className="metrics-grid">
          {legacyImpactMetrics.map((metric) => (
            <div className="metric" key={metric.label}>
              <dt>{metric.label}</dt>
              <dd>{metric.value}</dd>
              <p>Legacy public record</p>
            </div>
          ))}
        </dl>
        <p className="impact-layout__qualifier">{legacyImpactQualifier}</p>
      </div>
    </section>
  );
}
