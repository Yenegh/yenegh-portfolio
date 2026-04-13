export default function CVPage() {
  return (
    <main className="cv-page">
      <section className="cv-header">
        <p className="section-label">About</p>

        <a className="cv-download" href="/cv/Yenegh-Badimayalew-CV.pdf" download>
          Download CV
        </a>
      </section>

      <section className="cv-section">
        <h1 className="page-title">Yenegh Badimayalew</h1>
      </section>

      <section className="cv-section">
        <h2>About</h2>
        <p>
          Architectural Designer with a Master of Architecture (Professional,
          First Class Honours) and over 10 years of experience across
          residential, multi-unit housing, and remediation projects in
          Aotearoa.
        </p>
        <p>
          Experienced in Revit-based documentation from developed design
          through to consent, with strong capability in NZ Building Code
          compliance, consultant coordination, and Homestar assessment.
        </p>
        <p>
          Brings a practical understanding of construction, documentation, and
          weathertightness alongside a design-led approach to housing and
          environmentally responsive architecture.
        </p>
      </section>

      <section className="cv-section">
        <h2>Experience</h2>

        <div className="cv-item">
          <div className="cv-meta">Collate Limited · Director</div>
          <div className="cv-detail">Auckland · 2017–2025</div>
        </div>
        <p>
          Led residential and small commercial projects from concept through to
          consent and construction documentation. Delivered Revit-based drawing
          sets, coordinated consultant input, and managed compliance,
          programme, and client scope.
        </p>

        <div className="cv-item">
          <div className="cv-meta">Oxygen Architecture · Architectural Designer</div>
          <div className="cv-detail">Auckland · 2022–2023</div>
        </div>
        <p>
          Contributed to design development and documentation in a design-led
          practice. Produced Revit documentation for planning, building consent,
          and construction, and coordinated detailing and compliance with senior
          staff and consultants.
        </p>

        <div className="cv-item">
          <div className="cv-meta">
            Kingstone Property Group · Architectural Designer | Homestar Consultant
          </div>
          <div className="cv-detail">Auckland · 2020</div>
        </div>
        <p>
          Worked across housing documentation and sustainability inputs,
          balancing developer constraints with design intent, compliance, and
          Homestar requirements.
        </p>

        <div className="cv-item">
          <div className="cv-meta">Bespoke NZ Design · Architectural Designer</div>
          <div className="cv-detail">Auckland · 3 years</div>
        </div>

        <div className="cv-item">
          <div className="cv-meta">Scribble Ltd · Architectural Designer</div>
          <div className="cv-detail">Auckland · 2 years</div>
        </div>

        <div className="cv-item">
          <div className="cv-meta">Maynard Marks · Architectural Role</div>
          <div className="cv-detail">Auckland · 9 months</div>
        </div>
      </section>

      <section className="cv-section">
        <h2>Education</h2>

        <div className="cv-item">
          <div className="cv-meta">
            Master of Architecture (Professional, First Class Honours)
          </div>
        </div>

        <div className="cv-item">
          <div className="cv-meta">Bachelor of Architectural Studies</div>
        </div>
      </section>

      <section className="cv-section">
        <h2>Skills</h2>
        <p>
          Revit, technical documentation, NZ Building Code compliance,
          consultant coordination, Homestar assessment, drawing production,
          architectural detailing, design development, BIM workflows, Adobe
          Illustrator, Adobe InDesign, visual communication, and rendering.
        </p>
      </section>
    </main>
  );
}