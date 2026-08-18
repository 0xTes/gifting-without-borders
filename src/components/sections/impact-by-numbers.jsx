import ButtonLink from "@/components/ui/button-link";
import SectionHeading from "@/components/ui/section-heading";

const metricLabels = ["Projects", "People reached", "Communities", "Partners"];

export default function ImpactByNumbers() {
  return (
    <section aria-labelledby="impact-heading" className="section section--teal">
      <div className="container">
        <div className="impact-layout">
          <SectionHeading
            eyebrow="Impact by numbers"
            id="impact-heading"
            intro="Numbers matter when they are verifiable, meaningful, and placed in the right context."
          >
            We will show the evidence, not just the headline.
          </SectionHeading>
          <div className="impact-layout__aside">
            <p>
              Our first public impact summary is in preparation. Until reporting is verified, we will not publish placeholder statistics.
            </p>
            <ButtonLink href="/impact" variant="text-light">
              Explore our impact approach <span aria-hidden="true">→</span>
            </ButtonLink>
          </div>
        </div>

        <dl className="metrics-grid">
          {metricLabels.map((label) => (
            <div className="metric" key={label}>
              <dt>{label}</dt>
              <dd aria-label="Verified figure forthcoming">—</dd>
              <p>Verified figure forthcoming</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
