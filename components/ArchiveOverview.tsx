"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";

export function ArchiveOverview({ projects }: { projects: Project[] }) {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section className="archive-overview">
      <div className="archive-overview__preview">
  <div
    className={`archive-overview__image-wrap ${
      activeProject?.cardImage ? "is-visible" : ""
    }`}
  >
    {activeProject?.cardImage ? (
      <img
        src={activeProject.cardImage}
        alt=""
        aria-hidden="true"
        className="archive-overview__image"
      />
    ) : null}
  </div>
</div>

      <div
            className="archive-overview__list"
            onMouseLeave={() => setActiveProject(null)}
        >
        <div className="archive-overview__head">
          <div>No.</div>
          <div>Project</div>
          <div>Type</div>
          <div>Scope</div>
          <div>Year</div>
        </div>

        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className={`archive-overview__row ${
              activeProject?.slug === project.slug ? "is-active" : ""
            }`}
            onMouseEnter={() => setActiveProject(project)}
            onFocus={() => setActiveProject(project)}
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
    </section>
  );
}