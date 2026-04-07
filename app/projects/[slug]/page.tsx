import Image from "next/image";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="project-page">
      <section className="project-intro">
        <div>
          <p className="section-label">{project.number}</p>
          <h1>{project.title}</h1>
          <p className="lead">{project.summary}</p>

          <div style={{ paddingTop: "24px" }}>
            {project.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <aside className="project-facts">
          <div>
            <span>Year</span>
            <span>{project.year}</span>
          </div>
          <div>
            <span>Category</span>
            <span>{project.category}</span>
          </div>
          <div>
            <span>Scale</span>
            <span>{project.scale}</span>
          </div>
          <div>
            <span>Status</span>
            <span>{project.status}</span>
          </div>
          <div>
            <span>Tags</span>
            <span>{project.tags.join(", ")}</span>
          </div>
        </aside>
      </section>

      <section className="gallery">
        {project.images.map((image) => (
          <figure key={image.src} className="gallery-item">
            <Image src={image.src} alt={image.alt} width={1600} height={1000} />
            <figcaption>{image.caption}</figcaption>
          </figure>
        ))}
      </section>
    </main>
  );
}
