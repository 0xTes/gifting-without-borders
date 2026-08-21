import ButtonLink from "@/components/ui/button-link";
import SectionHeading from "@/components/ui/section-heading";
import { legacyStories } from "@/data/legacy-records";

export default function VoicesOfSupport() {
  return (
    <section aria-labelledby="voices-heading" className="section section--surface">
      <div className="container voices-layout">
        <div>
          <SectionHeading
            eyebrow="Voices of Support"
            id="voices-heading"
            intro="Two voices preserved from the organisation’s legacy public record, republished with project-owner approval."
          >
            Voices from the public record.
          </SectionHeading>
          <ButtonLink href="/stories" variant="text">
            Read more stories <span aria-hidden="true">→</span>
          </ButtonLink>
        </div>

        <div className="voices-layout__panels">
          {legacyStories.map((story) => (
            <article className="voice-card" key={story.name}>
              <p className="voice-card__quote-mark" aria-hidden="true">“</p>
              <p className="voice-card__name">{story.name}</p>
              <p className="voice-card__role">{story.role}</p>
              <blockquote>{story.quote}</blockquote>
            </article>
          ))}
          <aside className="voices-layout__note">
            <p className="eyebrow">Publication note</p>
            <p>
              Names, roles, and quotations are reproduced as displayed in the legacy public record. Portraits are intentionally not reused because their provenance is unclear.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
