import PageHero from "@/components/ui/page-hero";

export default function StoriesPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Stories"
        intro="Stories can bring context to humanitarian work—but only when they are shared with consent, care, and enough detail to be understood honestly."
        title="Voices should never be used as decoration."
      />

      <section className="section section--surface" aria-labelledby="stories-purpose-heading">
        <div className="container stories-purpose">
          <div>
            <p className="eyebrow">Editorial purpose</p>
            <h2 id="stories-purpose-heading">A place for context, not polished soundbites.</h2>
          </div>
          <p className="body-large">
            This page will hold approved perspectives from people connected to the work—without turning private experiences into promotional material.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="story-standard-heading">
        <div className="container story-standard">
          <div>
            <p className="eyebrow">The standard</p>
            <h2 id="story-standard-heading">What makes a story ready to share.</h2>
          </div>
          <div className="story-standard__rules">
            <article><h3>Consent</h3><p>People should understand how their experience and image may be used.</p></article>
            <article><h3>Context</h3><p>A story should make room for the circumstances around it, not isolate a single moment.</p></article>
            <article><h3>Dignity</h3><p>Language and imagery should honour people rather than ask them to perform hardship.</p></article>
          </div>
        </div>
      </section>

      <section className="section section--teal stories-future" aria-labelledby="future-voices-heading">
        <div className="container">
          <p className="eyebrow">Future voices</p>
          <h2 id="future-voices-heading">A fuller picture of the work.</h2>
          <div className="stories-future__grid">
            <p>Community members</p><p>Volunteers</p><p>Partners</p><p>Donors</p>
          </div>
          <p className="stories-future__note">No individual stories or quotations are published here until they can be represented accurately and with permission.</p>
        </div>
      </section>
    </main>
  );
}
