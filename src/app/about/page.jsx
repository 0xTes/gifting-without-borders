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
              Gifting Without Borders brings together practical care, shared learning, health outreach, food support, and a belief that dignity should guide every encounter.
            </p>
            <ButtonLink href="/projects">Explore our projects</ButtonLink>
          </div>
          <figure className="about-hero__image">
            <Image
              alt="People wearing Gifting Without Borders shirts stand beside food and household supplies."
              fill
              priority
              sizes="(min-width: 62rem) 42vw, 100vw"
              src="/images/projects/feeding-outreach.jpg"
            />
            <figcaption>Practical support, shared with care.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="mission-heading">
        <div className="container about-statements">
          <div>
            <p className="eyebrow">Our story</p>
            <h2 id="mission-heading">Care that reaches beyond borders.</h2>
            <p className="body-large">
              The organization’s public history has long centred community empowerment, sustainable development, education, and practical support. Its approach begins with a simple idea: people deserve to be met with care, respect, and attention to what matters locally.
            </p>
          </div>
          <div>
            <p className="eyebrow">Looking ahead</p>
            <h2>Current direction and leadership.</h2>
            <p className="body-large">
              Leadership profiles, governance information, and future reporting will be shared as they are prepared for publication.
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="values-heading">
        <div className="container">
          <SectionHeading
            eyebrow="What guides the work"
            id="values-heading"
            intro="The work is shaped by a commitment to people, accountability, and possibilities that can last."
          >
            Principles that guide the work.
          </SectionHeading>
          <ol className="values-list">
            <li>
              <span>01</span>
              <div>
                <h3>Community-centred</h3>
                <p>Listening closely to community needs helps make support more useful, relevant, and respectful.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Integrity &amp; transparency</h3>
                <p>Thoughtful stewardship and clear communication make it easier to understand how support is being directed.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Sustainability</h3>
                <p>Practical support can create stronger possibilities when it keeps the longer term in view.</p>
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
            intro="Leadership information will be introduced with the same care and clarity expected throughout the site."
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
              Reach out by phone or email, or find the organization on Palm Avenue in Mushin, Lagos.
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
            intro="There are many ways to stand alongside humanitarian work. Choose the pathway that fits your time, skills, or resources."
          >
            Support can take more than one form.
          </SectionHeading>
          <div className="support-grid">
            <article><h3>Volunteer</h3><p>Volunteer opportunities will be shared when roles and safeguarding information are available.</p></article>
            <article><h3>Partner</h3><p>Organizations interested in collaboration can look for partnership information here.</p></article>
            <article><h3>Sponsor</h3><p>Sponsorship pathways will be shared with clear scope and accountability information.</p></article>
            <article className="support-grid__donate"><h3>Donate</h3><p>Make a direct bank transfer through the organization’s published giving route.</p><ButtonLink href="/donate" variant="text">Visit Donate <span aria-hidden="true">→</span></ButtonLink></article>
          </div>
        </div>
      </section>
    </main>
  );
}
