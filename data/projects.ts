export type Project = {
  slug: string;
  number: string;
  title: string;
  year: string;
  category: string;
  scale: string;
  status: "Built" | "Research" | "Competition" | "Concept" | "Ongoing";
  award?: string;
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
    status: "Ongoing",
    award: "Recipient of Dean's Award for Excellence in Postgraduate Study",
    heroImage: "/images/manawataki/hero.jpg",
    summary:
      "An ongoing research project exploring architecture as ecological partner through narrative, drawing, and typological reframing.",
    scope: ["Design Research", "Temporal Systems", "Ecological Urbanism"],
    tags: ["Ecology", "Thesis", "Representation", "Speculation"],
    featured: true,
    isPublic: true,
    cardImage: "/images/manawataki/card.png",
    body: [
      "Manawataki is a practice-led thesis that explores how indigenous temporal knowledge can reshape the way housing is conceived in Aotearoa. Developed through a design-research process, the project asks how architecture might move beyond static, performance-driven models to engage more deeply with ecological cycles, cultural knowledge, and lived rhythms.",
      "Grounded in the Maramataka of Te Arawa, the work positions time as a primary design driver, informing spatial organisation, patterns of occupation, and relationships between people, land, and non-human systems. It proposes a housing model that supports Mauri Ora, framing wellbeing as a holistic condition shaped by environmental, social, and cultural interdependencies.",
      "Originally developed as a 2022 thesis, the project now continues as an active line of research through ongoing writing, and future publication. Rather than offering a fixed solution, it establishes a framework for living that is adaptive, relational, and regenerative. The full thesis can be accessed <a href='https://openrepository.aut.ac.nz/items/8660b541-aef5-4b5b-9214-05a168cf7664' target='_blank' rel='noopener noreferrer'>here</a>, where the project is developed in full as both argument and proposition."
    ], //
    images: [
      {
        src: "/images/manawataki/diagram-01.png",
        alt: "Temporal Driver to Spatial System diagram",
        caption: "Temporal Driver → Spatial System. Maramataka-derived temporal amplitudes calibrate ecological mapping and establish a spatial framework for occupation."
      },
      {
        src: "/images/manawataki/diagram-02.jpg",
        alt: "Temporal phases and programme mapping",
        caption: "Temporal phases mapped to programme. Fluctuations in intensity structure cycles of gathering, cultivation, retreat, and regeneration."
      },
      {
        src: "/images/manawataki/plan-01.jpg",
        alt: "Roof plan",
        caption: "Plan — spatial organisation structured by temporal rhythms, with programme distributed along a continuous circulation spine."
      },
      {
        src: "/images/manawataki/Axon-01.jpg",
        alt: "Aerial axonometric",
        caption: "Axonometric — distributed housing clusters and shared infrastructure embedded within a food-producing landscape."
      },
      {
        src: "/images/manawataki/detail-01.png",
        alt: "Engawa detail",
        caption: "Threshold detail — elevated structure and engawa mediate occupation between interior space and ecological ground."
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
    featured: false,
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
    title: "Devonport Renovation",
    year: "2020",
    category: "Special Character",
    scale: "Residential",
    status: "Built",
    summary:
      "Rear reconfiguration of a Devonport villa, translating concept intent through resource consent, building consent, and construction documentation to create a more continuous living space.",
      scope: [
      "Resource & Building Consent Documentation",
    "Detail Design Development",
     "Consultant Coordination", "RFI Management"
    ],
    tags: ["Residential", "Renovation", "Built", "Consent", "Adaptive Reuse"],
    featured: true,
    isPublic: true,
    cardImage: "/images/devonport-renovation/card.png",
    body: [
      "A rear reconfiguration of an existing Devonport villa, opening a fragmented ground floor into a more continuous living space.",
      "Following initial concept work by Judy Eden of House of Eden Architecture, I developed the project through resource consent, building consent, and technical documentation. The work involved translating an early design direction into a buildable and coordinated set of architectural information.",
      "The intervention combined selective demolition, structural insertion, service reorganisation, and new rear joinery to consolidate the living, dining, and kitchen areas into a more continuous domestic space.",
      "This project sits at the intersection of design and delivery, showing my ability to carry architectural intent through consent, coordination, and construction within the realities of an existing building."
    ],
    images: [
    {
      src: "/images/devonport-renovation/01.png",
      alt: "Completed interior view of the Devonport renovation",
      caption: "Completed rear living space following reconfiguration of the existing villa."
    },
    {
      src: "/images/devonport-renovation/02.png",
      alt: "Existing and proposed floor plans for the Devonport renovation",
      caption: "Existing and proposed plans showing the spatial reorganisation of the rear of the house."
    },
    {
      src: "/images/devonport-renovation/03.jpg",
      alt: "Demolition and structural transformation during construction",
      caption: "Construction in progress, revealing the structural changes required to open the plan."
    },
    {
      src: "/images/devonport-renovation/04.png",
      alt: "Rear elevation after removal of internal partitions and chimney, enabling a more continuous living space with direct garden access.",
      caption: "Rear elevation after removal of internal partitions and chimney, enabling a more continuous living space with direct garden access."
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