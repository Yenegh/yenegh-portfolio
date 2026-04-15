import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectTable({ projects }: { projects: Project[] }) {
  return (
    <div className="project-table">
      <div className="project-table-head">
        <div>No.</div>
        <div>Project</div>
        <div>Type</div>
        <div>Scope</div>
        <div>Year</div>
      </div>

      {projects
      .filter((project) => project.isPublic !== false)
      .map((project) => (
        <Link key={project.slug} href={`/projects/${project.slug}`} className="project-row">
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
  );
}
