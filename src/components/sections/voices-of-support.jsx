import ButtonLink from "@/components/ui/button-link";
import SectionHeading from "@/components/ui/section-heading";
import { stories } from "@/data/organization-content";

export default function VoicesOfSupport() {
  return (
    <section aria-labelledby="voices-heading" className="section section--surface">
      <div className="container voices-layout">
        <div>
          <SectionHeading
            eyebrow="Voices of Support"
            id="voices-heading"
            intro="Two voices that speak to the practical difference made through care, learning, and shared effort."
          >
            Voices from the work.
          </SectionHeading>
          <ButtonLink href="/stories" variant="text">
            Read more stories <span aria-hidden="true">→</span>
          </ButtonLink>
        </div>

        <div className="voices-layout__panels">
          {stories.map((story) => (
            <article className="voice-card" key={story.name}>
              <p className="voice-card__quote-mark" aria-hidden="true">“</p>
              <p className="voice-card__name">{story.name}</p>
              <p className="voice-card__role">{story.role}</p>
              <blockquote>{story.quote}</blockquote>
            </article>
          ))}
          <aside className="voices-layout__note">
            <p className="eyebrow">More stories</p>
            <p>
              More voices and fuller project context will be added here as new stories are prepared for publication.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
