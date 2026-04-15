export type Project = {
  slug: string;
  number: string;
  title: string;
  year: string;
  category: string;
  scale: string;
  status: "Built" | "Research" | "Competition" | "Concept";
  summary: string;
  scope: string[];
  tags: string[];
  body: string[];
  images: { src: string; alt: string; caption: string }[];
  featured: boolean;
  isPublic?: boolean;
  cardImage?: string;
  heroImage?: string;
};

export const projects: Project[] = [
  
  {
    slug: "manawataki",
    number: "01",
    title: "Manawataki",
    year: "2022",
    category: "Thesis",
    scale: "Architectural Research",
    status: "Research",
    heroImage: "/images/manawataki/hero.jpg",
    summary:
      "A research-led project exploring architecture as ecological partner through narrative, drawing, and typological reframing.",
    scope: ["Research", "Drawing", "Spatial Narrative"],
    tags: ["Ecology", "Thesis", "Representation", "Speculation"],
    featured: true,
    isPublic: true,
    cardImage: "/images/manawataki/card.jpg",
    body: [
      "Manawataki is a practice-led thesis that explores how indigenous temporal knowledge can reshape the way housing is conceived in Aotearoa. Developed through a design-research process, the project asks how architecture might move beyond static, performance-driven models to engage more deeply with ecological cycles, cultural knowledge, and lived rhythms.",
      "Grounded in the Maramataka of Te Arawa, the work positions time as a primary design driver, informing spatial organisation, patterns of occupation, and relationships between people, land, and non-human systems. It proposes a housing model that supports Mauri Ora, framing wellbeing as a holistic condition shaped by environmental, social, and cultural interdependencies.",
      "Rather than offering a fixed solution, the project establishes a framework for living that is adaptive, relational, and regenerative. The full thesis can be accessed <a href='https://openrepository.aut.ac.nz/items/8660b541-aef5-4b5b-9214-05a168cf7664' target='_blank' rel='noopener noreferrer'>here</a>, where the project is developed in full as both argument and proposition."
    ], //
    images: [
      {
    src: "/images/manawataki/plan-01.jpg",
    alt: "Roof Plan",
    caption: "Built form intervention."
  },
  {
    src: "/images/manawataki/detail-01.png",
    alt: "Engawa",
    caption: "Engawa detail study."
  },
  {
    src: "/images/manawataki/plan-02.jpg",
    alt: "Elevations",
    caption: "Orthographic unfolded projection"
  },
  {
    src: "/images/manawataki/Axon-01.jpg",
    alt: "Aerial axonometric",
    caption: "Site axonometric showing engawa spine, food forest, and phased residential cluster"
  }
    ]
  },

  {
    slug: "ellen-melville-centre",
    number: "02",
    title: "Ellen Melville Centre",
    year: "2023",
    category: "Adaptive Reuse",
    scale: "Public Building",
    status: "Built",
    summary:
      "The adaptive reuse of the Ellen Melville Centre repositions an existing civic building within Auckland’s city centre as a contemporary community hub.",
    scope: ["Technical Documentation", "Consultant Coordination", "Adaptive Reuse"],
    tags: ["Public Architecture", "Adaptive Reuse", "Built"],
    featured: true,
    isPublic: false,
    cardImage: "/images/ellen-melville/card.jpg",
    body: [
      "The Ellen Melville Centre is an adaptive reuse project that reworks an existing civic building in central Auckland as a renewed public and community-focused space. The project balances retention of the existing structure with contemporary spatial, programme, and accessibility requirements.",
      "My contribution focused on delivery-oriented work, including drawing development, coordination with consultants, and resolving design information within the constraints of an existing building fabric.",
      "The project is important within the portfolio because it demonstrates experience beyond new-build housing, showing the ability to work with existing conditions, public architecture, and the layered technical demands of adaptive reuse."
    ],
    images: [
      {
        src: "/images/ellen-melville/01.png",
        alt: "Ellen Melville Centre exterior or interior view",
        caption: "Adaptive reuse project documentation and delivery work."
      }
    ]
  },

  {
    slug: "panuku-housing",
    number: "03",
    title: "Panuku Housing",
    year: "2024",
    category: "Housing",
    scale: "Medium Density",
    status: "Built",
    summary:
      "A delivery-focused housing project centred on coordinated documentation, consultant alignment, and clear drawing packages.",
    scope: ["General Arrangement", "Consultant Coordination", "Documentation"],
    tags: ["Revit", "Housing", "NZ Practice", "Built Work", "Homestar 5"],
    featured: false,
    isPublic: false,
    cardImage: "/images/panuku-housing/card.jpg",
    body: [
      "A medium-density housing development in Henderson delivering 38 townhouses in the first stage, with subsequent apartment buildings currently underway. The project prioritises environmentally responsive design, achieving a Homestar 6 rating to improve energy efficiency, thermal performance, and long-term affordability for residents.",
      "My role focused on technical documentation and delivery. This included developing drawing packages, coordinating with consultants across disciplines, and resolving design information through iterative revisions to support consent and construction stages.",
      "The completed stage contributes to the intensification of Henderson’s town centre, supporting improved access to public transport and local amenities. The project demonstrates how coordinated delivery and environmentally conscious design can work together to produce practical, buildable housing outcomes at scale."
    ],
    images: [
      {
        src: "/images/panuku-housing/01.jpg",
        alt: "Panuku Housing placeholder image one",
        caption: "Replace with a hero image, elevation, or drawing extract."
      },
      {
        src: "/images/panuku-housing/02.svg",
        alt: "Panuku Housing placeholder image two",
        caption: "Use captions for role, scale, package type, or drawing note."
      }
    ]
  },
  {
    slug: "devonport-residential-renovation",
    number: "04",
    title: "Devonport Residential Renovation",
    year: "2022",
    category: "Heritage Renovation",
    scale: "Residential",
    status: "Built",
    summary:
      "A residential renovation project in Devonport involving the reworking of an existing dwelling to improve spatial flow, functionality, and connection to its site context.",
    scope: ["Technical Documentation", "Design Development", "Coordination"],
    tags: ["Residential", "Renovation", "Built"],
    featured: false,
    isPublic: false,
    cardImage: "/images/devonport-renovation/card.jpg",
    body: [
      "This project involved the renovation of an existing residential dwelling in Devonport, working within the constraints of the existing structure while improving spatial organisation and liveability. The design approach focused on refining internal layouts and strengthening connections between interior spaces and the surrounding site.",
      "My role focused on developing drawing packages and resolving design information through coordination and iterative refinement. This included producing documentation suitable for construction and working through the practical constraints associated with modifying an existing building.",
      "The project demonstrates the ability to work at a smaller residential scale while navigating the challenges of renovation, including existing conditions, spatial limitations, and buildability. It adds a domestic and detail-focused layer to the overall portfolio."
    ],
    images: [
      {
        src: "/images/devonport-renovation/01.png",
        alt: "Devonport residential renovation view",
        caption: "Residential renovation project in Devonport."
      }
    ]
  },
  {
    slug: "interior-renovation",
    number: "05",
    title: "Interior Renovation",
    year: "2022",
    category: "Bathroom Renovation",
    scale: "Residential",
    status: "Built",
    summary:
      "A residential renovation project in Devonport involving the reworking of an existing dwelling to improve spatial flow, functionality, and connection to its site context.",
    scope: ["Technical Documentation", "Design Development", "Coordination"],
    tags: ["Residential", "Renovation", "Built"],
    featured: false,
    isPublic: false,
    cardImage: "/images/interior-renovation/card.jpg",
    body: [
      "This project involved the renovation of an existing residential dwelling in Devonport, working within the constraints of the existing structure while improving spatial organisation and liveability. The design approach focused on refining internal layouts and strengthening connections between interior spaces and the surrounding site.",
      "My role focused on developing drawing packages and resolving design information through coordination and iterative refinement. This included producing documentation suitable for construction and working through the practical constraints associated with modifying an existing building.",
      "The project demonstrates the ability to work at a smaller residential scale while navigating the challenges of renovation, including existing conditions, spatial limitations, and buildability. It adds a domestic and detail-focused layer to the overall portfolio."
    ],
    images: [
      {
        src: "/images/interior-renovation/01.png",
        alt: "Interior residential renovation view",
        caption: "Bathroom renovation project."
      }
    ]
  }
  
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}