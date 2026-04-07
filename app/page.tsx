import Link from "next/link";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div>
          <p className="section-label">Architecture Portfolio</p>
          <h1>Design-led thinking with delivery fluency.</h1>
        </div>
        <div>
          <p className="lead">
            This portfolio brings together built work, technical delivery, and design research, positioning architecture as both a practical and ecological discipline.
          </p>
        </div>
      </section>

      <section>
        <p className="section-label">Selected Projects</p>
        <div className="card-grid">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="project-card">
              <div>
                <div className="section-label">{project.number}</div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
              <div>
                <div>{project.category}</div>
                <div>{project.year}</div>
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
