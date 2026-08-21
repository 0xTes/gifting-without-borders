import ButtonLink from "@/components/ui/button-link";
import AnimatedMetric from "@/components/ui/animated-metric";
import SectionHeading from "@/components/ui/section-heading";
import { impactMetrics, impactReportingNote } from "@/data/organization-content";

export default function ImpactByNumbers() {
  return (
    <section aria-labelledby="impact-heading" className="section section--teal">
      <div className="container">
        <div className="impact-layout">
          <SectionHeading
            eyebrow="Impact snapshot"
            id="impact-heading"
            intro="A view of the people, places, learning, and collective effort reflected in published figures."
          >
            Numbers that tell a story.
          </SectionHeading>
          <div className="impact-layout__aside">
            <p>
              Numbers matter most when they are paired with care, context, and a commitment to clearer reporting over time.
            </p>
            <ButtonLink href="/impact" variant="text-light">
              Explore our impact approach <span aria-hidden="true">→</span>
            </ButtonLink>
          </div>
        </div>

        <dl className="metrics-grid">
          {impactMetrics.map((metric) => (
            <div className="metric" key={metric.label}>
              <dt>{metric.label}</dt>
              <dd aria-label={`${metric.value} ${metric.label}`}><AnimatedMetric countTo={metric.countTo} suffix={metric.suffix} /></dd>
            </div>
          ))}
        </dl>
        <p className="impact-layout__qualifier">{impactReportingNote}</p>
      </div>
    </section>
  );
}
