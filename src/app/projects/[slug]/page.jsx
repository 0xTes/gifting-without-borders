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
            <p className="eyebrow">Legacy public record</p>
            <h1>{project.title}</h1>
            <p className="body-large">{project.description}</p>
            <p className="project-detail-hero__source">Historical description from the organisation homepage · current reporting pending verification</p>
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
          <h2 id="project-context-heading">What this historic public record establishes.</h2>
          <p>
            Gifting Without Borders publicly identified {project.title.toLowerCase()} as an area of its work. The legacy description above is preserved here as the available statement of purpose.
          </p>
        </div>
      </section>

      {project.gallery?.length ? (
        <section className="section project-gallery" aria-labelledby="project-gallery-heading">
          <div className="container">
            <div className="project-gallery__heading">
              <div>
                <p className="eyebrow">Legacy project gallery</p>
                <h2 id="project-gallery-heading">Photographs from the legacy project record.</h2>
              </div>
              <p>
                These photographs were grouped with this area on the organisation-controlled legacy gallery. They preserve public visual context; they do not confirm current activity, dates, places, or outcomes.
              </p>
            </div>
            <div className="project-gallery__grid">
              {project.gallery.map((image, index) => (
                <figure className="project-gallery__item" key={image.src}>
                  <Image
                    alt={image.alt}
                    fill
                    sizes={index === 0 ? "(min-width: 62rem) 78vw, 100vw" : "(min-width: 62rem) 38vw, 100vw"}
                    src={image.src}
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>
      ) : null}

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
