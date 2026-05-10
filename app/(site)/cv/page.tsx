type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  projectLinks?: {
    label: string;
    href: string;
  }[];
};

type EducationItem = {
  qualification: string;
  institution: string;
  note: string;
};

const experience: ExperienceItem[] = [
  {
    role: "Architectural Graduate",
    company: "Oxygen Architecture",
    location: "Auckland, NZ",
    period: "May 2022 – Jan 2023",
    description: [
      "Produced full Revit documentation sets for Kāinga Ora housing projects, including three-storey walk-up apartment buildings.",
      "Developed construction drawings from developed design through to building consent, coordinating with structural, services, and fire consultants.",
      "Maintained compliance with NZ Building Code (NZBC) and relevant standards through coordination and drawing resolution.",
      "Tested layouts and buildability within Revit, balancing cost efficiency and housing performance requirements.",
      "Reviewed drawing packages prior to issue, improving consistency and reducing coordination errors.",
    ],
  },
 {
  role: "Design Practice & Research (Self-Directed)",
  company: "Independent",
  location: "New Zealand",
  period: "Feb 2023 – Feb 2024",
  projectLinks: [
    {
      label: "Manawataki – To Be Rhythmical",
      href: "https://futureenvironments.aut.ac.nz/work/manawataki-to-be-rhythmical?dept=Architecture",
    },
  ],
  description: [
    "Completed Master of Architecture (Professional), First Class Honours; recipient of the Dean's Award for Excellence in Postgraduate Study.",
    "Developed the Manawataki thesis exploring regenerative, place-based architecture through Indigenous temporal frameworks.",
    "Positioned time as a primary design driver, shaping spatial organisation, occupation patterns, and environmental relationships.",
    "Extended practice into UX/UI design through Google UX Design certification.",
  ],
  },
  {
  role: "Architectural Technician & Designer (Contract)",
  company: "KBS Design Group",
  location: "Auckland, NZ",
  period: "Jun 2020 – Dec 2020",
  projectLinks: [
    {
      label: "Henderson Green (Panuku Development)",
      href: "https://www.audo.co.nz/projects/henderson-green/",
    },
  ],
  description: [
    "Prepared building consent documentation for the Henderson Green housing development.",
    "Delivered Homestar assessments aligned with sustainability targets and rating requirements.",
    "Coordinated consultant information into consent packages, maintaining drawing accuracy and supporting a smooth consent process.",
  ],
  },
  {
    role: "Architectural Technician (Contract)",
    company: "Maynard Marks",
    location: "Auckland, NZ",
    period: "Sept 2019 – Feb 2020",
    description: [
      "Produced remediation documentation for multi-unit residential buildings, including envelope upgrades.",
      "Translated existing building conditions into accurate construction drawings ensuring NZBC compliance.",
      "Delivered clear detailing that reduced Requests for Information (RFIs) during construction.",
    ],
  },
  {
    role: "Architectural Designer (Contract)",
    company: "Collate Ltd",
    location: "Auckland, NZ",
    period: "Aug 2017 – May 2019",
    description: [
      "Delivered residential and small commercial projects from concept design through to building consent.",
      "Produced Revit documentation and coordinated consultant inputs across project stages.",
      "Developed client briefs into buildable, code-compliant design solutions.",
      "Created visualisations to support design communication and project approvals.",
    ],
  },
  {
    role: "Architectural Designer",
    company: "SGA & A+W NZ",
    location: "Auckland, NZ",
    period: "Jul 2017 – Feb 2018",
    projectLinks: [
      {
        label: "Motu Kaikoura",
        href: "https://www.sgaltd.co.nz/community-commercial/motu-kaikoura",
      },
    ],
    description: [
      "Participated in the construction of prefabricated modules for the Motu Kaikoura community facility.",
      "Worked within remote, off-grid conditions, engaging with logistics, assembly, and site delivery constraints.",
      "Gained hands-on experience in prefabrication and sustainable construction systems.",
    ],
  },
  {
    role: "Architectural Designer (Contract)",
    company: "Bespoke NZ Design Ltd",
    location: "Auckland, NZ",
    period: "Jul 2014 – Jul 2017",
    description: [
      "Managed Revit models across multiple concurrent residential projects.",
      "Produced building consent documentation aligned with NZ Building Code requirements.",
      "Generated renders and visualisations for client communication and design approvals.",
      "Maintained drawing consistency across all project stages.",
    ],
  },
  {
    role: "Architectural Technician (Contract)",
    company: "Scribble Ltd",
    location: "Auckland, NZ",
    period: "Jul 2007 – Jul 2009",
    description: [
      "Produced working drawings and specifications for residential alterations and recladding projects.",
      "Delivered Building Consent and Resource Consent documentation through submission and approval.",
      "Developed strong knowledge of NZBC compliance including E2/AS1, durability, and weathertightness detailing.",
    ],
  },
];

const education: EducationItem[] = [
  {
    qualification:
      "Master of Architecture – MArch (Professional), First Class Honours",
    institution: "Auckland University of Technology",
    note: "Recipient, Dean's Award for Excellence in Postgraduate Study",
  },
  {
    qualification: "Bachelor of Architectural Studies – BAS (Honours)",
    institution: "Unitec Institute of Technology",
    note: "",
  },
  {
    qualification: "Google UX Design Certificate",
    institution: "Google / Coursera",
    note: "",
  },
];

const competencies = [
  "NZ Building Code (NZBC) Compliance",
  "Revit (Advanced)",
  "BIM Coordination",
  "Consent Documentation",
  "Homestar Assessment",
  "Consultant Coordination",
  "Construction Documentation",
  "Weathertightness & Remediation",
  "AutoCAD",
  "SketchUp",
  "Enscape",
  "Adobe Creative Suite",
  "3D Visualisation",
  "Prefabrication",
];

export default function CVPage() {
  return (
    <main className="cv-page">
      <section className="cv-header">
        <h1 className="page-title">Yenegh Badimayalew</h1>
        <p className="cv-subtitle">Architectural Designer</p>

        <div className="cv-contact">
          <span>021-243-6488</span>
          <span>www.yenegh.com</span>
          <span>Auckland, New Zealand</span>
        </div>

        <a
          className="cv-download"
          href="/cv/yenegh-badimayalew-cv.pdf"
          download
        >
          Download CV
        </a>
      </section>

      <section className="cv-section">
        <h2>Professional Summary</h2>
        <p>
          Architectural Designer with a Master of Architecture (Professional,
          First Class Honours) and over 10 years of experience across
          residential, multi-unit housing, and remediation projects in
          Aotearoa New Zealand.
        </p>
        <p>
          Experienced in delivering Revit-based documentation from developed
          design through to building consent, with strong capability in NZ
          Building Code (NZBC) compliance, consultant coordination, and
          Homestar assessment.
        </p>
        <p>
          Brings a practical understanding of construction, weathertightness,
          and documentation alongside a design-led approach to housing and
          environmentally responsive architecture.
        </p>
      </section>

      <section className="cv-section">
        <h2>Core Competencies</h2>
        <div className="cv-tags">
          {competencies.map((item) => (
            <span key={item} className="cv-tag">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="cv-section">
        <h2>Professional Experience</h2>

        {experience.map((job) => (
          <article
            className="cv-item cv-item--experience"
            key={`${job.company}-${job.role}-${job.period}`}
          >
            <div className="cv-item__sidebar">
              <div className="cv-meta">
                {job.role} · {job.company}
              </div>
              <div className="cv-detail">
                {job.location} · {job.period}
              </div>
            </div>

            <div className="cv-item__content">
              {job.projectLinks?.length ? (
                <div className="cv-project-links">
                  {job.projectLinks.map((project) => (
                    <a
                      key={project.href}
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cv-project-link"
                    >
                      View project: {project.label}
                    </a>
                  ))}
                </div>
              ) : null}

              <ul className="cv-list">
                {job.description.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="cv-section">
        <h2>Education</h2>

        {education.map((item) => (
          <article
            className="cv-item cv-item--education"
            key={item.qualification}
          >
            <div className="cv-meta">{item.qualification}</div>
            <div className="cv-detail">{item.institution}</div>
            <div className="cv-note">{item.note}</div>
          </article>
        ))}
      </section>

      <section className="cv-section">
        <h2>References</h2>
        <p>Available upon request.</p>
      </section>
    </main>
  );
}