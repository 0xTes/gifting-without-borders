import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      {project.image ? (
        <div className="project-card__image-wrap">
          <Image
            alt={project.imageAlt}
            className="project-card__image"
            fill
            sizes="(min-width: 62rem) 33vw, (min-width: 40rem) 50vw, 100vw"
            src={project.image}
          />
        </div>
      ) : (
        <div aria-hidden="true" className="project-card__image-wrap project-card__image-wrap--textile">
          <span>Project record</span>
        </div>
      )}
      <div className="project-card__body">
        <p className="project-card__label">Legacy public record</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <Link className="text-link project-card__link" href={`/projects/${project.slug}`}>
          View project <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
