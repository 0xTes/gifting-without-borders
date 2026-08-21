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
            <p className="eyebrow">Project</p>
            <h1>{project.title}</h1>
            <p className="body-large">{project.description}</p>
            <p className="project-detail-hero__source">Project information is shared with the context currently available.</p>
          </div>
          {project.image ? (
            <figure className="project-detail-hero__image">
              <Image alt={project.imageAlt} fill priority sizes="(min-width: 62rem) 43vw, 100vw" src={project.image} />
            </figure>
          ) : (
            <div aria-hidden="true" className="project-detail-hero__image project-detail-hero__image--fallback">Project</div>
          )}
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="project-context-heading">
        <div className="container-sm project-detail-copy">
          <p className="eyebrow">Project context</p>
          <h2 id="project-context-heading">Work with purpose and context.</h2>
          <p>
            Gifting Without Borders shares {project.title.toLowerCase()} as an area of its work. This page brings together the available description, visual context, and future space for reporting.
          </p>
        </div>
      </section>

      {project.gallery?.length ? (
        <section className="section project-gallery" aria-labelledby="project-gallery-heading">
          <div className="container">
            <div className="project-gallery__heading">
              <div>
                <p className="eyebrow">Gallery</p>
                <h2 id="project-gallery-heading">Moments from the work.</h2>
              </div>
              <p>
                Photographs bring a human dimension to the project area and its practical focus.
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

      <section className="section section--surface" aria-labelledby="project-updates-heading">
        <div className="container project-updates">
          <div>
            <p className="eyebrow">Project updates</p>
            <h2 id="project-updates-heading">{project.updates?.length ? "Selected project updates." : "Project updates will be shared here."}</h2>
          </div>
          {project.updates?.length ? (
            <div className="project-updates__list">
              {project.updates.map((update) => (
                <article className="project-update" key={`${update.title}-${update.location}`}>
                  <p className="project-update__status">{update.status}</p>
                  <h3>{update.title}</h3>
                  <dl>
                    <div><dt>Location</dt><dd>{update.location}</dd></div>
                    <div><dt>Published</dt><dd>{update.record}</dd></div>
                  </dl>
                </article>
              ))}
            </div>
          ) : (
            <p className="project-updates__empty">New project updates will appear here as they are prepared for publication.</p>
          )}
          <p className="project-updates__note">Project progress is shared through clear status updates rather than percentage bars.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="project-transparency-heading">
        <div className="container project-transparency">
          <div>
            <p className="eyebrow">Transparency note</p>
            <h2 id="project-transparency-heading">Reporting with clarity.</h2>
          </div>
          <div>
            <p>{project.sourceNote}</p>
            <p>
              Future reporting can add methodology, date context, delivery updates, and outcomes as the information is prepared.
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
