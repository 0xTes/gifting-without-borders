import ButtonLink from "@/components/ui/button-link";
import PageHero from "@/components/ui/page-hero";
import ProjectCard from "@/components/cards/project-card";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Projects"
        intro="Explore the areas of work that bring practical support, learning, health outreach, and food support into community life."
        title="Practical work, centred on people."
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
              <p className="eyebrow">Our projects</p>
              <h2 id="project-list-heading">Four areas of support.</h2>
            </div>
            <p>Each project brings together its purpose, visual context, and the updates that can be shared clearly.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
        </div>
      </section>

      <section className="section project-index__method" aria-labelledby="method-heading">
        <div className="container project-index__method-grid">
          <div>
            <p className="eyebrow">With care and context</p>
            <h2 id="method-heading">Understanding belongs beside the project name.</h2>
          </div>
          <div>
            <p>
              Each project can grow with dates, updates, and reported outcomes as new information is prepared and shared.
            </p>
            <ButtonLink href="/impact" variant="text">Read our reporting approach <span aria-hidden="true">→</span></ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
