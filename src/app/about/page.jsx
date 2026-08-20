import Image from "next/image";
import ButtonLink from "@/components/ui/button-link";
import SectionHeading from "@/components/ui/section-heading";

export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="about-hero">
        <div className="container about-hero__grid">
          <div>
            <p className="eyebrow">About Gifting Without Borders</p>
            <h1>Practical care, shared with dignity.</h1>
            <p className="body-large about-hero__intro">
              Public legacy material identifies Gifting Without Borders and describes four areas of support: empowerment and training, medical outreach, feeding outreach, and widows outreach. This record provides historical context; it does not confirm current activity or results.
            </p>
            <ButtonLink href="/projects">Explore our project records</ButtonLink>
          </div>
          <figure className="about-hero__image">
            <Image
              alt="People wearing Gifting Without Borders shirts stand beside food and household supplies."
              fill
              priority
              sizes="(min-width: 62rem) 42vw, 100vw"
              src="/images/projects/feeding-outreach.jpg"
            />
            <figcaption>Public legacy documentation from Gifting Without Borders.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="mission-heading">
        <div className="container about-statements">
          <div>
            <p className="eyebrow">Legacy public record</p>
            <h2 id="mission-heading">An historic description of the work.</h2>
            <p className="body-large">
              The legacy homepage describes an emphasis on community empowerment, sustainable development, and education. That wording is retained here as historical context, not as a current approved mission statement.
            </p>
          </div>
          <div>
            <p className="eyebrow">Still to be confirmed</p>
            <h2>Current direction and leadership.</h2>
            <p className="body-large">
              Current mission, vision, values, governance, and leadership information will be published only when the organisation has approved it for public use.
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="values-heading">
        <div className="container">
          <SectionHeading
            eyebrow="How we aim to work"
            id="values-heading"
            intro="These are publication principles for this website, not a claimed list of the organisation’s adopted values."
          >
            Principles for a truthful public record.
          </SectionHeading>
          <ol className="values-list">
            <li>
              <span>01</span>
              <div>
                <h3>Dignity</h3>
                <p>Support should respect people’s agency, privacy, and full humanity.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Community</h3>
                <p>Listening to local context matters as much as delivering practical assistance.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Stewardship</h3>
                <p>Generosity deserves thoughtful use, clear communication, and care over time.</p>
              </div>
            </li>
            <li>
              <span>04</span>
              <div>
                <h3>Accountability</h3>
                <p>We believe trust is strengthened when information is shared with clarity and context.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="section section--teal about-leadership" aria-labelledby="leadership-heading">
        <div className="container about-leadership__grid">
          <SectionHeading
            eyebrow="Leadership"
            id="leadership-heading"
            intro="The organisation’s accessible legacy public pages do not provide current leadership information suitable for republication."
          >
            People should be introduced with accuracy, not assumption.
          </SectionHeading>
          <p>
            Verified leadership profiles will be shared here when the organisation has confirmed names, roles, and biographies for publication.
          </p>
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="support-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Ways to support"
            id="support-heading"
            intro="There are many ways to stand alongside humanitarian work. The right pathways will be published as they are confirmed."
          >
            Support can take more than one form.
          </SectionHeading>
          <div className="support-grid">
            <article><h3>Volunteer</h3><p>Volunteer opportunities will be shared when roles and safeguarding information are confirmed.</p></article>
            <article><h3>Partner</h3><p>Organisations interested in collaboration can look for verified partnership information here.</p></article>
            <article><h3>Sponsor</h3><p>Sponsorship pathways will be published with clear scope and accountability information.</p></article>
            <article className="support-grid__donate"><h3>Donate</h3><p>Explore the organisation’s verified giving structure and future payment updates.</p><ButtonLink href="/donate" variant="text">Visit Donate <span aria-hidden="true">→</span></ButtonLink></article>
          </div>
        </div>
      </section>
    </main>
  );
}
