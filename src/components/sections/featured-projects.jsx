import ProjectReadinessCard from "@/components/cards/project-readiness-card";
import ButtonLink from "@/components/ui/button-link";
import SectionHeading from "@/components/ui/section-heading";

export default function FeaturedProjects() {
  return (
    <section aria-labelledby="projects-heading" className="section">
      <div className="container">
        <div className="section-split-heading">
          <SectionHeading
            eyebrow="Featured projects"
            id="projects-heading"
            intro="Project profiles will share the purpose, local context, and progress of each initiative once verified for publication."
          >
            Work worth understanding before it is supported.
          </SectionHeading>
          <ButtonLink className="section-split-heading__link" href="/projects" variant="text">
            View all projects <span aria-hidden="true">→</span>
          </ButtonLink>
        </div>

        <div className="project-readiness-grid" aria-label="Project information in preparation">
          <ProjectReadinessCard
            detail="Clear objectives and the practical need each initiative is designed to meet."
            title="Purpose and approach"
          />
          <ProjectReadinessCard
            detail="Relevant local context, shared with care and without reducing communities to a headline."
            title="Context and community"
          />
          <ProjectReadinessCard
            detail="Updates that make it easier to understand what is underway and what comes next."
            title="Progress and learning"
          />
        </div>
        <p className="section-note">
          Verified project records are being prepared. We will publish them when they can be shared responsibly.
        </p>
      </div>
    </section>
  );
}
