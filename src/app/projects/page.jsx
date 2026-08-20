import ButtonLink from "@/components/ui/button-link";
import PageHero from "@/components/ui/page-hero";
import ProjectCard from "@/components/cards/project-card";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Projects"
        intro="These project records are drawn from Gifting Without Borders’ public legacy website. They describe established areas of work while avoiding claims that the source did not support."
        title="Practical work deserves a clear record."
      >
        <div className="button-group page-hero__actions">
          <ButtonLink href="/impact">How we think about impact</ButtonLink>
          <ButtonLink href="/donate" variant="secondary">Support the work</ButtonLink>
        </div>
      </PageHero>

      <section className="section section--surface" aria-labelledby="project-list-heading">
        <div className="container">
          <div className="project-index__heading">
            <div>
              <p className="eyebrow">Public project archive</p>
              <h2 id="project-list-heading">Four established areas of support.</h2>
            </div>
            <p>Each profile distinguishes published project purpose from information that still needs verification.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
        </div>
      </section>

      <section className="section project-index__method" aria-labelledby="method-heading">
        <div className="container project-index__method-grid">
          <div>
            <p className="eyebrow">A careful archive</p>
            <h2 id="method-heading">Context belongs beside the project name.</h2>
          </div>
          <div>
            <p>
              As project information is refreshed, each record can grow to include verified context, dates, updates, and reported outcomes—without replacing evidence with broad promises.
            </p>
            <ButtonLink href="/impact" variant="text">Read our reporting approach <span aria-hidden="true">→</span></ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
