import { ProjectTable } from "@/components/ProjectTable";
import { projects } from "@/data/projects";

export default function ArchivePage() {
  return (
    <main>
      <section style={{ paddingBottom: "24px" }}>
        <p className="section-label">Overview / Index</p>
        <h1 className="page-title">Archive</h1>
        <p className="lead">A structured view of work by project, type, scope, and year.</p>
      </section>

      <ProjectTable projects={projects} />
    </main>
  );
}
