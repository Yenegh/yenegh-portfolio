import { notFound } from "next/navigation";
import Image from "next/image";
import { getProjectBySlug, projects } from "@/data/projects";
import ProjectGallery from "@/components/ProjectGallery";

type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
};

type ProjectRecord = {
  slug: string;
  number?: string;
  title: string;
  year?: string;
  category?: string;
  scale?: string;
  status?: string;
  heroImage?: string;
  summary?: string;
  body?: string[];
  tags?: string[];
  images?: ProjectImage[];
  isPublic?: boolean;
};

export function generateStaticParams() {
  return projects
    .filter((project) => project.isPublic !== false)
    .map((project) => ({ slug: project.slug }));
}

function buildMetaItems(project: ProjectRecord): string[] {
  return [project.year, project.category, project.scale].filter(
    (item): item is string => Boolean(item && item.trim())
  );
}

function buildGallery(project: ProjectRecord) {
  if (project.images && project.images.length > 0) {
    return project.images.map((image, index) => ({
      src: image.src,
      alt: image.alt || `${project.title} image ${index + 1}`,
      caption: image.caption || "",
      layout: index === 1 || index === 2 ? ("half" as const) : ("full" as const),
    }));
  }

  if (project.heroImage) {
    return [
      {
        src: project.heroImage,
        alt: `${project.title} placeholder 1`,
        caption: "Placeholder image 01",
        layout: "full" as const,
      },
      {
        src: project.heroImage,
        alt: `${project.title} placeholder 2`,
        caption: "Placeholder image 02",
        layout: "half" as const,
      },
      {
        src: project.heroImage,
        alt: `${project.title} placeholder 3`,
        caption: "Placeholder image 03",
        layout: "half" as const,
      },
      {
        src: project.heroImage,
        alt: `${project.title} placeholder 4`,
        caption: "Placeholder image 04",
        layout: "full" as const,
      },
    ];
  }

  return [];
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);

  if (!project || project.isPublic === false) {
    notFound();
  }

  const metaItems = buildMetaItems(project);
  const galleryImages = buildGallery(project);

  return (
    <article className="project-page">
      {project.heroImage ? (
        <section className="project-hero">
          <figure className="project-hero__figure">
            <Image
              src={project.heroImage}
              alt={project.title}
              width={2200}
              height={1400}
              className="project-hero__image"
              priority
              sizes="100vw"
            />
          </figure>
        </section>
      ) : null}

      <section className="project-intro">
        <div className="project-intro__text">
          {project.number ? <p className="section-label">{project.number}</p> : null}
          <h1>{project.title}</h1>
        </div>
      </section>

      {metaItems.length > 0 ? (
        <section className="project-meta" aria-label="Project metadata">
          <p className="project-meta__line">
            {metaItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </p>
        </section>
      ) : null}

      <section className="project-body">
        <div className="project-body__text">
          {project.body?.map((paragraph, index) => (
            <p key={`${project.slug}-paragraph-${index}`}>{paragraph}</p>
          ))}
        </div>
      </section>

      {galleryImages.length > 0 ? <ProjectGallery images={galleryImages} /> : null}
    </article>
  );
}