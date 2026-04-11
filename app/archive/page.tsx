"use client";

import { useState } from "react";
import { ProjectTable } from "@/components/ProjectTable";
import { ArchiveOverview } from "@/components/ArchiveOverview";
import { projects } from "@/data/projects";

export default function ArchivePage() {
  const [view, setView] = useState<"index" | "overview">("index");

  return (
    <main>
      <section className="archive-header">
        <div>
          <p className="section-label">
            <button
              type="button"
              className={`archive-view-toggle ${view === "overview" ? "is-active" : ""}`}
              onClick={() => setView("overview")}
            >
              Overview
            </button>
            {" / "}
            <button
              type="button"
              className={`archive-view-toggle ${view === "index" ? "is-active" : ""}`}
              onClick={() => setView("index")}
            >
              Index
            </button>
          </p>

          <h1 className="page-title">Archive</h1>
          <p className="lead">
            A structured view of work by project, type, scope, and year.
          </p>
        </div>
      </section>

      {view === "index" ? (
        <ProjectTable projects={projects} />
      ) : (
        <ArchiveOverview projects={projects} />
      )}
    </main>
  );
}