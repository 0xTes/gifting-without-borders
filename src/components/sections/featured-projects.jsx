import ProjectCard from "@/components/cards/project-card";
import ButtonLink from "@/components/ui/button-link";
import SectionHeading from "@/components/ui/section-heading";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section aria-labelledby="projects-heading" className="section">
      <div className="container">
        <div className="section-split-heading">
          <SectionHeading
            eyebrow="Featured projects"
            id="projects-heading"
            intro="Explore the areas of work that bring practical support, learning, and care into community life."
          >
            Work worth understanding before it is supported.
          </SectionHeading>
          <ButtonLink className="section-split-heading__link" href="/projects" variant="text">
            View all projects <span aria-hidden="true">→</span>
          </ButtonLink>
        </div>

        <div className="project-readiness-grid project-readiness-grid--featured" aria-label="Featured project records">
          {projects.slice(0, 3).map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
        <p className="section-note">
          Project updates are shared where the available information is clear. Progress is reported with context, not percentage bars.
        </p>
      </div>
    </section>
  );
}
