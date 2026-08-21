import Image from "next/image";
import PageHero from "@/components/ui/page-hero";
import { stories } from "@/data/organization-content";

export default function StoriesPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Stories"
        intro="Moments of care, practical support, and shared effort from Gifting Without Borders."
        title="Stories from the work."
      />

      <section className="section stories-feature" aria-labelledby="featured-story-heading">
        <div className="container stories-feature__grid">
          <figure className="stories-feature__image">
            <Image alt="Three people stand outdoors holding a bag." fill sizes="(min-width: 62rem) 52vw, 100vw" src="/images/stories/food-support.webp" />
          </figure>
          <div className="stories-feature__copy">
            <p className="eyebrow">Featured moment</p>
            <h2 id="featured-story-heading">Care begins with a conversation.</h2>
            <p className="body-large">Practical support has its strongest meaning when it is shaped by the people, places, and everyday realities it is meant to meet.</p>
            <p>Across the work, Gifting Without Borders brings people together around small, tangible acts of care—listening, learning, sharing, and showing up.</p>
          </div>
        </div>
      </section>

      <section className="section section--surface stories-voices" aria-labelledby="stories-voices-heading">
        <div className="container">
          <div className="stories-voices__heading">
            <div>
              <p className="eyebrow">Voices of support</p>
              <h2 id="stories-voices-heading">Words that carry the work forward.</h2>
            </div>
            <p>These voices sit beside moments from the work, recognising that every story carries its own context.</p>
          </div>
          <div className="story-grid">
            {stories.map((story) => (
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

      <section className="section stories-records" aria-labelledby="stories-records-heading">
        <div className="container">
          <div className="stories-records__intro">
            <p className="eyebrow">Stories from the work</p>
            <h2 id="stories-records-heading">Care takes many practical forms.</h2>
          </div>
          <article className="story-record">
            <figure className="story-record__image">
              <Image alt="People sit around a table outdoors." fill sizes="(min-width: 62rem) 48vw, 100vw" src="/images/stories/medical-community.webp" />
            </figure>
            <div className="story-record__copy">
              <p className="eyebrow">Medical outreach</p>
              <h3>Care that meets people where they are.</h3>
              <p>When support begins with listening, each encounter can be practical and personal. Shared spaces make room for questions, connection, and everyday care.</p>
            </div>
          </article>
          <article className="story-record story-record--reverse">
            <figure className="story-record__image">
              <Image alt="Two people wearing blue shirts stand beside an older woman holding bags." fill sizes="(min-width: 62rem) 48vw, 100vw" src="/images/projects/widows-outreach/widows-outreach-01.webp" />
            </figure>
            <div className="story-record__copy">
              <p className="eyebrow">Widows outreach</p>
              <h3>Giving with dignity in view.</h3>
              <p>Practical help is most meaningful when it respects the person receiving it. The work makes room for presence, encouragement, and care that feels human.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section section--teal stories-mosaic" aria-labelledby="stories-mosaic-heading">
        <div className="container">
          <div className="stories-mosaic__heading">
            <p className="eyebrow">On the ground</p>
            <h2 id="stories-mosaic-heading">A shared picture of support.</h2>
          </div>
          <div className="stories-mosaic__grid">
            <figure className="stories-mosaic__large">
              <Image alt="A person in a blue shirt hands a wrapped item to another person indoors." fill sizes="(min-width: 62rem) 54vw, 100vw" src="/images/projects/feeding-outreach/feeding-outreach-02.webp" />
            </figure>
            <figure>
              <Image alt="People sit at tables while someone speaks at the front of a room." fill sizes="(min-width: 62rem) 25vw, 100vw" src="/images/projects/empowerment-training/empowerment-training-03.webp" />
            </figure>
            <figure>
              <Image alt="A person wearing a Gifting Without Borders shirt stands beside an older woman outdoors." fill sizes="(min-width: 62rem) 25vw, 100vw" src="/images/home/hero.webp" />
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
}
