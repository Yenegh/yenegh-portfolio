"use client";

import { useState } from "react";
import { ProjectTable } from "@/components/ProjectTable";
import { ArchiveOverview } from "@/components/ArchiveOverview";
import { projects } from "@/data/projects";

export default function ArchivePage() {
  const [view, setView] = useState<"index" | "overview">("index");

  const description =
    view === "index"
      ? "A structured index of work by project, type, scope, and year."
      : "A visual overview of selected work across projects.";

  return (
    <main>
      <section className="archive-header">
        <div className="archive-header__top">
          <div className="archive-toggle" role="tablist" aria-label="Archive view">
            <button
              type="button"
              className={`archive-toggle__button ${
                view === "overview" ? "is-active" : ""
              }`}
              onClick={() => setView("overview")}
            >
              Overview
            </button>

            <button
              type="button"
              className={`archive-toggle__button ${
                view === "index" ? "is-active" : ""
              }`}
              onClick={() => setView("index")}
            >
              Index
            </button>
          </div>

          <h1 className="page-title">Archive</h1>
          <p className="lead">{description}</p>
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