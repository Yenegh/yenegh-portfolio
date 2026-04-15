"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type ProjectHeroLightboxProps = {
  src: string;
  alt: string;
};

export default function ProjectHeroLightbox({
  src,
  alt,
}: ProjectHeroLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <section className="project-hero">
        <figure
          className="project-hero__figure project-hero__figure--clickable"
          onClick={() => setIsOpen(true)}
        >
          <Image
            src={src}
            alt={alt}
            width={2200}
            height={1400}
            className="project-hero__image"
            priority
            sizes="100vw"
          />
        </figure>
      </section>

      {isOpen ? (
        <div
          className="lightbox"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded hero image"
        >
          <button
            className="lightbox-close"
            onClick={(event) => {
              event.stopPropagation();
              setIsOpen(false);
            }}
            aria-label="Close image"
            type="button"
          >
            ×
          </button>

          <div
            className="lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              width={2200}
              height={1400}
              className="lightbox-image"
              sizes="100vw"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}