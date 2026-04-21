"use client";

import { useEffect, useState } from "react";

type TemporalImage = {
  id: string;
  src: string;
  alt: string;
  label: string;
  title: string;
  description: string;
  role: "primary" | "secondary";
  energy: "low" | "waning" | "passive" | "moderate" | "productive" | "high";
  className: string;
};

export const phases: TemporalImage[] = [
  {
    id: "low-primary",
    src: "/images/manawataki/1 Low/low-primary.jpg",
    alt: "Low energy primary spatial drawing",
    label: "Low",
    title: "Whirowhiti",
    description:
      "The opening low-energy condition. Architecture withdraws into a quieter mode, supporting solitude, reduced interaction, and minimal physical demand. Space becomes restorative rather than performative, allowing reflection, recalibration, and the setting of intention before activity begins.",
    role: "primary",
    energy: "low",
    className: "phase-1",
  },
  {
    id: "low-secondary",
    src: "/images/manawataki/1 Low/low-secondary.jpg",
    alt: "Low energy supporting spatial drawing",
    label: "Low",
    title: "Mutuwhenua",
    description:
      "A closing low-energy condition at the end of the cycle. Architecture supports release, retreat, and the emptying out of use. Programme contracts, occupation thins, and space holds a necessary pause before renewal can begin again.",
    role: "secondary",
    energy: "low",
    className: "phase-2",
  },

  {
    id: "waning-primary",
    src: "/images/manawataki/2 Wanning/waning-primary.jpg",
    alt: "Waning energy primary spatial drawing",
    label: "Waning",
    title: "Māure",
    description:
      "A strengthening but still measured condition where architecture supports growing readiness, steadier occupation, and increasing coordination. Space shifts out of retreat and begins to gather momentum without yet reaching full intensity.",
    role: "primary",
    energy: "waning",
    className: "phase-3",
  },
  {
    id: "waning-secondary",
    src: "/images/manawataki/2 Wanning/waning-secondary.jpg",
    alt: "Waning energy supporting spatial drawing",
    label: "Waning",
    title: "Ōmutu",
    description:
      "A thinning and closing condition where activity eases off and architecture supports reduced use. Space becomes quieter, less social, and more reflective, helping the cycle release pressure before stillness returns.",
    role: "secondary",
    energy: "waning",
    className: "phase-4",
  },

  {
    id: "passive-primary",
    src: "/images/manawataki/3 Passive/passive-primary.jpg",
    alt: "Passive energy primary spatial drawing",
    label: "Passive",
    title: "Korekore-te-Ngangana",
    description:
      "A fluctuating and unstable condition where use is possible but uneven. Architecture supports provisional occupation, partial activation, and adaptability. Instead of enforcing certainty, space allows for shifting intensity and changing opportunities across the day.",
    role: "primary",
    energy: "passive",
    className: "phase-5",
  },
  {
    id: "passive-secondary",
    src: "/images/manawataki/3 Passive/passive-secondary.jpg",
    alt: "Passive energy supporting spatial drawing",
    label: "Passive",
    title: "Atuahaehae",
    description:
      "A transitional and exposed condition where architecture remains attentive rather than forceful. Space supports adjustment, observation, and careful occupation as circumstances shift and energy remains unsettled.",
    role: "secondary",
    energy: "passive",
    className: "phase-6",
  },

  {
    id: "moderate-primary",
    src: "/images/manawataki/4 Moderate/moderate-primary.jpg",
    alt: "Moderate energy primary spatial drawing",
    label: "Moderate",
    title: "Ō Uenuku",
    description:
      "A stable, workable condition where architecture supports reliable everyday use. Movement, occupation, and programme become more legible and coordinated. Space is neither withdrawn nor amplified; it is organised, available, and ready for steady engagement.",
    role: "primary",
    energy: "moderate",
    className: "phase-7",
  },
  {
    id: "moderate-secondary",
    src: "/images/manawataki/4 Moderate/moderate-secondary.jpg",
    alt: "Moderate energy supporting spatial drawing",
    label: "Moderate",
    title: "Tamateatūātahi",
    description:
      "A cautionary but usable condition where architecture must stay functional without assuming full stability. Space supports measured activity, guarded movement, and tactical adjustment in response to exposed or hazardous conditions.",
    role: "secondary",
    energy: "moderate",
    className: "phase-8",
  },

  {
    id: "productive-primary",
    src: "/images/manawataki/5 Productive/productive-primary.jpg",
    alt: "Productive energy primary spatial drawing",
    label: "Productive",
    title: "Tangaroa-ā-kiokio",
    description:
      "A strongly productive condition where architecture supports gathering, coordinated labour, exchange, and shared occupation. Space expands in capacity and usefulness, enabling multiple activities to coexist and making collective energy spatially visible.",
    role: "primary",
    energy: "productive",
    className: "phase-9",
  },
  {
    id: "productive-secondary",
    src: "/images/manawataki/5 Productive/productive-secondary.jpg",
    alt: "Productive energy supporting spatial drawing",
    label: "High",
    title: "Rākaunui",
    description:
      "A peak amplified condition where architecture operates at maximum intensity. Space supports dense occupation, strong visibility, and fully activated systems, holding collective energy at its most concentrated moment.",
    role: "secondary",
    energy: "high",
    className: "phase-10",
  },

  {
    id: "high-primary",
    src: "/images/manawataki/6 High/high-primary.jpg",
    alt: "High energy primary spatial drawing",
    label: "Waning",
    title: "Ōrongonui",
    description:
      "A strong but softening condition where architecture begins to slow without shutting down. Space remains active and socially capable, but intensity starts to ease, supporting restoration, balance, and a more therapeutic mode of occupation.",
    role: "primary",
    energy: "waning",
    className: "phase-11",
  },
  {
    id: "high-secondary",
    src: "/images/manawataki/6 High/high-secondary.jpg",
    alt: "High energy supporting spatial drawing",
    label: "High",
    title: "Māwharu",
    description:
      "A condition of abundance and heightened availability where architecture supports full use, collective energy, and expanded occupation. Space feels open, generous, and capable of holding activity across multiple layers at once.",
    role: "secondary",
    energy: "high",
    className: "phase-12",
  },
];

export default function TemporalDiagram() {
  const [activeImage, setActiveImage] = useState<TemporalImage | null>(null);

  useEffect(() => {
    if (!activeImage) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage]);

  return (
    <>
      <section className="temporal-diagram" aria-label="Temporal phases diagram">
        <div className="temporal-diagram__frame">
          <img
            src="/images/manawataki/temporal-base.svg"
            alt="Maramataka temporal diagram with spatial energy amplitudes"
            className="temporal-diagram__base"
          />

          <div className="temporal-diagram__overlay" aria-hidden="true">
            {phases.map((image) => (
              <button
                key={image.id}
                type="button"
                className={`temporal-diagram__phase temporal-diagram__phase--${image.role} temporal-diagram__phase--${image.energy} ${image.className}`}
                onClick={() => setActiveImage(image)}
                aria-label={`Open ${image.title}`}
              >
                <img src={image.src} alt={image.alt} />
                <span
                  className={`temporal-diagram__phase-label temporal-diagram__phase-label--${image.role}`}
                >
                  {image.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeImage ? (
        <div
          className="temporal-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.title}
          onClick={() => setActiveImage(null)}
        >
          <div
            className="temporal-lightbox__content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="temporal-lightbox__close"
              onClick={() => setActiveImage(null)}
              aria-label="Close expanded phase image"
            >
              ×
            </button>

            <div className="temporal-lightbox__image-wrap">
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                className="temporal-lightbox__image"
              />
            </div>

            <div className="temporal-lightbox__meta">
              {activeImage.role === "primary" ? (
                <p className="temporal-lightbox__eyebrow">{activeImage.label}</p>
              ) : null}

              <h3 className="temporal-lightbox__title">{activeImage.title}</h3>

              <p className="temporal-lightbox__description">
                {activeImage.description}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}