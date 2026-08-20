import ButtonLink from "@/components/ui/button-link";
import Image from "next/image";
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
            The public legacy record describes care that reaches beyond social boundaries and four areas of support. This site keeps that history in view while current reporting is prepared.
          </p>
          <div className="button-group">
            <ButtonLink href={siteConfig.donateHref}>Donate</ButtonLink>
            <ButtonLink href="/projects" variant="secondary">
              Explore projects
            </ButtonLink>
          </div>
        </div>

        <figure className="home-hero__media">
          <Image
            alt="A Gifting Without Borders team member stands beside an older woman outdoors."
            fill
            priority
            sizes="(min-width: 62rem) 42vw, 100vw"
            src="/images/home/hero.webp"
          />
        </figure>
      </div>
    </section>
  );
}
