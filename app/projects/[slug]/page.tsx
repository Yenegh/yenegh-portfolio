import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";
import ProjectGallery from "@/components/ProjectGallery";
import ProjectHeroLightbox from "@/components/ProjectHeroLightbox";

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

  return [];
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || project.isPublic === false) {
    notFound();
  }

  const metaItems = buildMetaItems(project);
  const galleryImages = buildGallery(project);

  return (
    <article className="project-page">
      {project.heroImage ? (
        <ProjectHeroLightbox src={project.heroImage} alt={project.title} />
      ) : null}

      <section className="project-header">
        {project.number ? <p className="section-label">{project.number}</p> : null}
        <h1>{project.title}</h1>

        {metaItems.length > 0 ? (
          <p className="project-meta__line" aria-label="Project metadata">
            {metaItems.map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </p>
        ) : null}
      </section>

      {project.body?.length ? (
        <section className="project-body">
          {project.body.map((paragraph, index) => (
            <p
              key={`${project.slug}-paragraph-${index}`}
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
        </section>
      ) : null}

      {galleryImages.length > 0 ? <ProjectGallery images={galleryImages} /> : null}
    </article>
  );
}