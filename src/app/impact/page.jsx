import ButtonLink from "@/components/ui/button-link";
import AnimatedMetric from "@/components/ui/animated-metric";
import PageHero from "@/components/ui/page-hero";
import { impactMetrics, impactReportingNote } from "@/data/organization-content";

export default function ImpactPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Impact"
        intro="Impact is more than a headline figure. It is the relationship between a real need, practical work, and what can be learned together."
        title="Progress begins with people."
      />

      <section className="section section--teal impact-snapshot" aria-labelledby="impact-snapshot-heading">
        <div className="container">
          <div>
            <p className="eyebrow">Impact snapshot</p>
            <h2 id="impact-snapshot-heading">Numbers that tell a story.</h2>
          </div>
          <dl className="metrics-grid impact-snapshot__metrics">
          {impactMetrics.map((metric) => (
              <div className="metric" key={metric.label}>
                <dt>{metric.label}</dt>
                <dd aria-label={`${metric.value} ${metric.label}`}><AnimatedMetric countTo={metric.countTo} suffix={metric.suffix} /></dd>
              </div>
            ))}
          </dl>
          <p className="impact-snapshot__qualifier">{impactReportingNote}</p>
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="impact-context-heading">
        <div className="container impact-page__intro">
          <div>
            <p className="eyebrow">How we think about impact</p>
            <h2 id="impact-context-heading">Care is measured in more than one way.</h2>
          </div>
          <p className="body-large">
            A number can signal reach, participation, or shared effort. It becomes more useful when it sits beside the purpose of the work, the people involved, and a clear account of how it was measured.
          </p>
        </div>
      </section>

      <section className="section section--teal impact-page__reporting" aria-labelledby="reporting-heading">
        <div className="container impact-page__reporting-grid">
          <div>
            <p className="eyebrow">Reporting &amp; accountability</p>
            <h2 id="reporting-heading">Clearer reporting is part of the work.</h2>
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
          <p className="eyebrow">Projects behind the numbers</p>
          <h2>Start with the work itself.</h2>
          <p>Explore the project areas where practical support, learning, health outreach, and food support come into view.</p>
          <ButtonLink href="/projects">View projects</ButtonLink>
        </div>
      </section>
    </main>
  );
}
