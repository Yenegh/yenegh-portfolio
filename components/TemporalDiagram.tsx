"use client";

import { useEffect, useState } from "react";

type PhaseImage = {
  src: string;
  alt: string;
  className: string;
  title: string;
  description: string;
};

const phaseImages: PhaseImage[] = [
  {
    src: "/images/manawataki/FINAL38.jpg",
    alt: "Phase image 1",
    className: "phase-1",
    title: "Whirowhiti",
    description:
      "An initial condition of occupation and orientation, framing how dwelling begins in relation to time, land, and seasonal rhythm.",
  },
  {
    src: "/images/manawataki/FINAL39.jpg",
    alt: "Phase image 2",
    className: "phase-2",
    title: "Mutuwhenua",
    description:
      "A period of movement, exchange, and adjustment, where spatial use responds to changing cycles and shared activity.",
  },
  {
    src: "/images/manawataki/FINAL40.jpg",
    alt: "Phase image 3",
    className: "phase-3",
    title: "Māure",
    description:
      "A denser moment of collective occupation, where domestic life, resource use, and environmental conditions overlap.",
  },
  {
    src: "/images/manawataki/FINAL41.jpg",
    alt: "Phase image 4",
    className: "phase-4",
    title: "Ōrongonui",
    description:
      "A quieter phase of recovery and recalibration, supporting continuity through cyclical return rather than fixed repetition.",
  },
];

export default function TemporalDiagram() {
  const [activePhase, setActivePhase] = useState<PhaseImage | null>(null);

  useEffect(() => {
    if (!activePhase) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActivePhase(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activePhase]);

  return (
    <>
      <section
        className="temporal-diagram"
        aria-label="Temporal phases diagram"
      >
        <div className="temporal-diagram__frame">
          <img
            src="/images/manawataki/temporal-base.svg"
            alt="Temporal phases mapped to programme"
            className="temporal-diagram__base"
          />

          <div className="temporal-diagram__overlay" aria-hidden="true">
            {phaseImages.map((image) => (
              <button
                key={image.className}
                type="button"
                className={`temporal-diagram__phase ${image.className}`}
                onClick={() => setActivePhase(image)}
                aria-label={`Open ${image.title}`}
              >
                <img src={image.src} alt={image.alt} />
                <span className="temporal-diagram__phase-label">
                  {image.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {activePhase && (
        <div
          className="temporal-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activePhase.title}
          onClick={() => setActivePhase(null)}
        >
          <div
            className="temporal-lightbox__content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="temporal-lightbox__close"
              onClick={() => setActivePhase(null)}
              aria-label="Close expanded phase image"
            >
              ×
            </button>

            <div className="temporal-lightbox__image-wrap">
              <img
                src={activePhase.src}
                alt={activePhase.alt}
                className="temporal-lightbox__image"
              />
            </div>

            <div className="temporal-lightbox__meta">
              <p className="temporal-lightbox__eyebrow">Temporal Phase</p>
              <h3 className="temporal-lightbox__title">
                {activePhase.title}
              </h3>
              <p className="temporal-lightbox__description">
                {activePhase.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}