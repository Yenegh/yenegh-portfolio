export default function CVPage() {
  return (
    <main className="cv-page">
      <section className="cv-header">
        <p className="section-label">Curriculum Vitae</p>
        <h1>Yenegh Badimayalew</h1>
        <p className="lead">
          Architectural Designer with experience across technical delivery,
          consultant coordination, adaptive reuse, housing, and design-led
          research.
        </p>
      </section>

      <section className="cv-section">
        <h2>Profile</h2>
        <p>
          Design-led architectural graduate with a strong grounding in technical
          documentation, consultant coordination, and project delivery. My work
          spans housing, civic adaptive reuse, and research-driven design,
          bringing together spatial thinking, buildability, and a growing
          interest in architecture as an ecological partner.
        </p>
      </section>

      <section className="cv-section">
        <h2>Experience</h2>

        <div className="cv-item">
          <div className="cv-meta">Collate Limited · Director</div>
          <div className="cv-detail">Auckland · 3 years</div>
        </div>

        <div className="cv-item">
          <div className="cv-meta">Bespoke NZ Design</div>
          <div className="cv-detail">Architectural design and documentation · 3 years</div>
        </div>

        <div className="cv-item">
          <div className="cv-meta">Scribble Ltd</div>
          <div className="cv-detail">Architectural design and documentation · 2 years</div>
        </div>

        <div className="cv-item">
          <div className="cv-meta">Maynard Marks</div>
          <div className="cv-detail">Architectural role · 9 months</div>
        </div>
      </section>

      <section className="cv-section">
        <h2>Education</h2>

        <div className="cv-item">
          <div className="cv-meta">Master of Architecture (Professional)</div>
        </div>

        <div className="cv-item">
          <div className="cv-meta">Bachelor of Architectural Studies</div>
        </div>
      </section>

      <section className="cv-section">
        <h2>Skills</h2>
        <p>
          Autodesk Revit, technical documentation, consultant coordination,
          Adobe Illustrator, Adobe InDesign, architectural drawing, design
          development, BIM workflows, rendering, visual communication.
        </p>
      </section>

      <section className="cv-section">
        <h2>Professional Affiliations</h2>
        <p>NZIA Graduate Member</p>
      </section>

      <section className="cv-section">
        <h2>Contact</h2>
        <p>Email: yenegh@email.com</p>
        <p>LinkedIn: linkedin.com/in/yenegh</p>
      </section>
    </main>
  );
}