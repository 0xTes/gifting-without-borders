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
              Public legacy material identifies Gifting Without Borders and describes four areas of support: empowerment and training, medical outreach, feeding outreach, and widows outreach. The broader legacy profile describes a philosophy of care that reaches beyond social boundaries. This record provides historical context; it does not confirm current activity or results.
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
              The legacy homepage describes an emphasis on community empowerment, sustainable development, and education. It also framed its philosophy as care that reaches beyond social boundaries. That wording is retained here as historical context, not as a current approved mission statement.
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
            eyebrow="Previously published guiding principles"
            id="values-heading"
            intro="The legacy site presented these three principles. They are preserved as historic public material and are not presented as a newly confirmed statement of current values."
          >
            Guiding principles from the legacy record.
          </SectionHeading>
          <ol className="values-list">
            <li>
              <span>01</span>
              <div>
                <h3>Community-centred</h3>
                <p>The legacy record described working alongside communities and local partners so initiatives reflect community needs and priorities.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Integrity &amp; transparency</h3>
                <p>The legacy record described accountability and transparency as guides to how resources should be used and explained.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Sustainability</h3>
                <p>The legacy record described designing support with long-term community maintenance in mind.</p>
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

      <section className="section section--surface" aria-labelledby="location-heading">
        <div className="container about-location">
          <div>
            <p className="eyebrow">Location</p>
            <h2 id="location-heading">Find us in Mushin.</h2>
          </div>
          <div>
            <p className="body-large">Palm Avenue, Mushin, Lagos, Nigeria.</p>
            <p>
              This conservative location reference has been approved by the project owner for current publication. Legacy contact details are shared as supplied; detailed office information and hours are not currently published.
            </p>
            <p className="about-location__contact"><a href="tel:+2349123528792">+234 9123 528 792</a><a href="mailto:giftwob@gmail.com">giftwob@gmail.com</a></p>
            <div className="about-location__map-wrap">
              <iframe
                loading="lazy"
                referrerPolicy="no-referrer"
                src="https://www.google.com/maps?q=Palm%20Avenue%2C%20Mushin%2C%20Lagos%2C%20Nigeria&output=embed"
                title="Map showing Palm Avenue in Mushin, Lagos, Nigeria"
              />
            </div>
            <a className="text-link" href="https://www.google.com/maps/search/?api=1&query=Palm%20Avenue%2C%20Mushin%2C%20Lagos%2C%20Nigeria" rel="noreferrer" target="_blank">
              Open location in maps <span aria-hidden="true">↗</span>
            </a>
          </div>
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
