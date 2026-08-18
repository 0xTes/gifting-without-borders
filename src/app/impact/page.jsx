import ButtonLink from "@/components/ui/button-link";
import PageHero from "@/components/ui/page-hero";

export default function ImpactPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Impact"
        intro="Impact is more than a headline figure. It is the relationship between a real need, the work carried out, what can be evidenced, and what still needs to be learned."
        title="Impact should be understood with care."
      />

      <section className="section section--surface" aria-labelledby="measurement-heading">
        <div className="container impact-page__intro">
          <div>
            <p className="eyebrow">What impact means here</p>
            <h2 id="measurement-heading">A commitment to context before conclusions.</h2>
          </div>
          <p className="body-large">
            Gifting Without Borders will publish figures only where they can be verified and explained. Until then, this page is a clear statement of the standard that future reporting should meet.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="principles-heading">
        <div className="container">
          <p className="eyebrow">Measurement principles</p>
          <h2 id="principles-heading">What responsible reporting should show.</h2>
          <ol className="impact-principles">
            <li><span>01</span><div><h3>Purpose before figures</h3><p>Why an initiative matters and the need it was intended to address.</p></div></li>
            <li><span>02</span><div><h3>Context alongside numbers</h3><p>Figures are more useful when their source, scope, and limitations are clear.</p></div></li>
            <li><span>03</span><div><h3>Learning, not just celebration</h3><p>Progress should leave room for reflection and better future decisions.</p></div></li>
            <li><span>04</span><div><h3>Publicly shareable evidence</h3><p>Information should be published only when it can be responsibly supported.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="section section--teal impact-page__reporting" aria-labelledby="reporting-heading">
        <div className="container impact-page__reporting-grid">
          <div>
            <p className="eyebrow">Future reporting</p>
            <h2 id="reporting-heading">What visitors can expect to find over time.</h2>
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
