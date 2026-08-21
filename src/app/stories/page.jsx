import PageHero from "@/components/ui/page-hero";
import { legacyStories } from "@/data/legacy-records";

export default function StoriesPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Stories"
        intro="Stories can bring context to humanitarian work. These two quotations are preserved from the public legacy record and shared with project-owner approval."
        title="Voices from the public record."
      />

      <section className="section section--surface" aria-labelledby="stories-purpose-heading">
        <div className="container stories-purpose">
          <div>
            <p className="eyebrow">Legacy testimonials</p>
            <h2 id="stories-purpose-heading">Published as written, without new claims.</h2>
          </div>
          <p className="body-large">
            The names, roles, and quotations below reproduce the legacy public presentation. They are not supplemented with inferred programme dates, individual history, or portrait imagery.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="legacy-voices-heading">
        <div className="container">
          <div>
            <p className="eyebrow">Two featured voices</p>
            <h2 id="legacy-voices-heading">Testimony belongs with its source.</h2>
          </div>
          <div className="story-grid">
            {legacyStories.map((story) => (
              <article className="story-card" key={story.name}>
                <p className="story-card__quote-mark" aria-hidden="true">“</p>
                <p className="story-card__name">{story.name}</p>
                <p className="story-card__role">{story.role}</p>
                <blockquote>{story.quote}</blockquote>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--teal stories-future" aria-labelledby="future-voices-heading">
        <div className="container">
          <p className="eyebrow">Publication note</p>
          <h2 id="future-voices-heading">Text first, with room for fuller context.</h2>
          <div className="stories-future__grid">
            <p>Community members</p><p>Volunteers</p><p>Partners</p><p>Donors</p>
          </div>
          <p className="stories-future__note">The supplied legacy portraits are not used because their subject provenance and image rights were not available. Future records can add consent, publication context, and approved imagery beside each story.</p>
        </div>
      </section>
    </main>
  );
}
