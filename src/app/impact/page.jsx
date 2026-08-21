import ButtonLink from "@/components/ui/button-link";
import PageHero from "@/components/ui/page-hero";
import { legacyImpactMetrics, legacyImpactQualifier } from "@/data/legacy-records";

export default function ImpactPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Impact"
        intro="Impact is more than a headline figure. It is the relationship between a real need, the work carried out, what can be evidenced, and what still needs to be learned."
        title="A public record, read with care."
      />

      <section className="section section--teal impact-snapshot" aria-labelledby="legacy-impact-heading">
        <div className="container">
          <div>
            <p className="eyebrow">Legacy public impact snapshot</p>
            <h2 id="legacy-impact-heading">Figures preserved from the public record.</h2>
          </div>
          <dl className="metrics-grid impact-snapshot__metrics">
            {legacyImpactMetrics.map((metric) => (
              <div className="metric" key={metric.label}>
                <dt>{metric.label}</dt>
                <dd>{metric.value}</dd>
                <p>Legacy public record</p>
              </div>
            ))}
          </dl>
          <p className="impact-snapshot__qualifier">{legacyImpactQualifier}</p>
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="impact-context-heading">
        <div className="container impact-page__intro">
          <div>
            <p className="eyebrow">Reading the record</p>
            <h2 id="impact-context-heading">What these figures establish—and what they do not.</h2>
          </div>
          <p className="body-large">
            The figures establish that these measures were publicly presented by the organisation’s legacy site and have been approved by the project owner for republication. They do not establish a reporting period, methodology, source documents, or the counting scope behind each figure.
          </p>
        </div>
      </section>

      <section className="section section--teal impact-page__reporting" aria-labelledby="reporting-heading">
        <div className="container impact-page__reporting-grid">
          <div>
            <p className="eyebrow">Reporting context to build next</p>
            <h2 id="reporting-heading">What future impact reporting should make clear.</h2>
          </div>
          <ul>
            <li>Project purpose and context</li>
            <li>Activities and updates that can be verified</li>
            <li>Relevant measures of participation or reach</li>
            <li>Clear notes about what a report can and cannot show</li>
          </ul>
        </div>
      </section>

      <section className="section impact-page__cta">
        <div className="container-sm">
          <p className="eyebrow">Explore the record</p>
          <h2>Start with the work itself.</h2>
          <p>Visit our current project archive to see the public descriptions that form the beginning of a more complete evidence base.</p>
          <ButtonLink href="/projects">View projects</ButtonLink>
        </div>
      </section>
    </main>
  );
}
