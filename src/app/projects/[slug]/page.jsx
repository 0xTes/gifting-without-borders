import Image from "next/image";
import { notFound } from "next/navigation";
import ButtonLink from "@/components/ui/button-link";
import { getProjectBySlug, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main id="main-content">
      <section className="project-detail-hero">
        <div className="container project-detail-hero__grid">
          <div>
            <p className="eyebrow">Project record</p>
            <h1>{project.title}</h1>
            <p className="body-large">{project.description}</p>
            <p className="project-detail-hero__source">Public legacy description · reporting details pending verification</p>
          </div>
          {project.image ? (
            <figure className="project-detail-hero__image">
              <Image alt={project.imageAlt} fill priority sizes="(min-width: 62rem) 43vw, 100vw" src={project.image} />
            </figure>
          ) : (
            <div aria-hidden="true" className="project-detail-hero__image project-detail-hero__image--fallback">Project archive</div>
          )}
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="project-context-heading">
        <div className="container-sm project-detail-copy">
          <p className="eyebrow">Project context</p>
          <h2 id="project-context-heading">What this public record establishes.</h2>
          <p>
            Gifting Without Borders publicly identified {project.title.toLowerCase()} as an area of its work. The legacy description above is preserved here as the available statement of purpose.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="project-transparency-heading">
        <div className="container project-transparency">
          <div>
            <p className="eyebrow">Transparency note</p>
            <h2 id="project-transparency-heading">A clear boundary around what is not yet known.</h2>
          </div>
          <div>
            <p>{project.sourceNote}</p>
            <p>
              As verified records become available, this page can grow to include dates, location context, delivery updates, and outcomes without changing its structure.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--teal project-detail-support">
        <div className="container-sm">
          <p className="eyebrow">Support with confidence</p>
          <h2>Giving should follow understanding.</h2>
          <p>Explore verified giving information before deciding how you would like to support Gifting Without Borders.</p>
          <ButtonLink href="/donate" variant="secondary">Visit Donate</ButtonLink>
        </div>
      </section>
    </main>
  );
}
