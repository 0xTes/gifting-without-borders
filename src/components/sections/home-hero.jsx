import ButtonLink from "@/components/ui/button-link";
import { siteConfig } from "@/config/site";

export default function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="home-heading">
      <div className="container-wide home-hero__grid">
        <div className="home-hero__content">
          <p className="eyebrow">{siteConfig.name}</p>
          <h1 className="heading-display" id="home-heading">
            Compassion in action. <span>Impact without borders.</span>
          </h1>
          <p className="body-large home-hero__intro">
            We connect generosity with community-centered humanitarian action, led with care, dignity, and a commitment to accountability.
          </p>
          <div className="button-group">
            <ButtonLink href={siteConfig.donateHref}>Donate</ButtonLink>
            <ButtonLink href="/projects" variant="secondary">
              Explore projects
            </ButtonLink>
          </div>
        </div>

        <aside className="home-hero__statement" aria-label="Our approach">
          <div className="home-hero__statement-rule" />
          <p className="home-hero__statement-label">Our approach</p>
          <p className="home-hero__statement-copy">
            Humanitarian support should make people feel seen—not reduced to a statistic.
          </p>
          <p className="home-hero__statement-meta">Community first · dignity always</p>
        </aside>
      </div>
    </section>
  );
}
