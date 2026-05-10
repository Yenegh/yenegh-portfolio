import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectGallery from "@/components/ProjectGallery";

export function generateStaticParams() {
  return projects
    .filter((p) => p.isPublic !== false)
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.title };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project || project.isPublic === false) notFound();

  return (
    <article className="project-page">
      {project.heroImage && (
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
      )}

      <section className="project-intro">
        <div className="project-intro__text">
          <p className="section-label">{project.number}</p>
          <h1>{project.title}</h1>
        </div>
      </section>

      <section className="project-meta" aria-label="Project metadata">
        <p className="project-meta__line">
          <span>{project.year}</span>
          <span>{project.category}</span>
          <span>{project.scale}</span>
        </p>
      </section>

      <section className="project-body">
        <div className="project-body__text">
          {project.body.map((paragraph, i) => (
            <p
              key={`${project.slug}-paragraph-${i}`}
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
        </div>
      </section>

      <ProjectGallery images={project.images} />
    </article>
  );
}
