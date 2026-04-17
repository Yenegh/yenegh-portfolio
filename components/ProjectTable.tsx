import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectTable({ projects }: { projects: Project[] }) {
  const publicProjects = projects.filter((project) => project.isPublic !== false);

  return (
    <>
      <div className="project-table project-table--desktop">
        <div className="project-table-head">
          <div>No.</div>
          <div>Project</div>
          <div>Type</div>
          <div>Scope</div>
          <div>Year</div>
        </div>

        {publicProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="project-row"
          >
            <div>{project.number}</div>

            <div>
              <div className="project-title">{project.title}</div>
              <div>{project.status}</div>
            </div>

            <div>
              <div>{project.category}</div>
              <div>{project.scale}</div>
            </div>

            <div className="meta-list">
              {project.scope.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div>{project.year}</div>
          </Link>
        ))}
      </div>

      <div className="project-table-mobile">
        {publicProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="project-table-mobile__card"
          >
            <div className="project-table-mobile__number">{project.number}</div>

            <div className="project-table-mobile__title">
              <div className="project-title">{project.title}</div>
              <div>{project.status}</div>
            </div>

            <div className="project-table-mobile__meta">
              <div>
                <span className="project-table-mobile__label">Type</span>
                <div>{project.category}</div>
                <div>{project.scale}</div>
              </div>

              <div>
                <span className="project-table-mobile__label">Year</span>
                <div>{project.year}</div>
              </div>
            </div>

            <div className="project-table-mobile__scope">
              <span className="project-table-mobile__label">Scope</span>
              <div className="meta-list">
                {project.scope.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}