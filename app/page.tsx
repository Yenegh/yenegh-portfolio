import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <main>
      <section className="hero">
        <div>
          <h1>Design-led thinking with delivery fluency.</h1>
        </div>
        <div>
          <p className="lead">
            This portfolio brings together built work, technical delivery, and
            design research, positioning architecture as both a practical and
            ecological discipline.
          </p>
        </div>
      </section>

      <section className="home-projects">
        <p className="section-label">Selected Projects</p>

        <div className="card-grid card-grid--atmospheric">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="project-card project-card--image"
            >
              <div className="project-card__media" aria-hidden="true">
                {project.cardImage && (
                  <Image
                    src={project.cardImage}
                    alt=""
                    width={1200}
                    height={800}
                  />
                )}
              </div>

              <div className="project-card__content">
                <div>
                  <div className="section-label">{project.number}</div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                </div>

                <div className="project-card__meta">
                  <div>{project.category}</div>
                  <div>{project.year}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ padding: "48px 0 56px" }}>
        <Link href="/archive">View full archive →</Link>
      </section>
    </main>
  );
}