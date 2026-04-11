"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
  layout?: "full" | "half";
};

type ProjectGalleryProps = {
  images: GalleryImage[];
};

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeImage = activeIndex !== null ? images[activeIndex] : null;

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((prev) =>
          prev === null ? null : (prev + 1) % images.length
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((prev) =>
          prev === null ? null : (prev - 1 + images.length) % images.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, images.length]);

  return (
    <>
      <section className="project-gallery-section" aria-label="Project gallery">
        <div className="gallery">
          {images.map((image, index) => (
            <figure
              key={`${image.src}-${index}`}
              className={`gallery-item gallery-item--${image.layout ?? "full"}`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="gallery-image-wrap">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1600}
                  height={1000}
                  sizes={
                    image.layout === "half"
                      ? "(max-width: 768px) 100vw, 50vw"
                      : "100vw"
                  }
                />
              </div>

              {image.caption ? <figcaption>{image.caption}</figcaption> : null}
            </figure>
          ))}
        </div>
      </section>

      {activeImage ? (
        <div
          className="lightbox"
          onClick={() => setActiveIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded project image"
        >
          <button
            className="lightbox-close"
            onClick={(event) => {
              event.stopPropagation();
              setActiveIndex(null);
            }}
            aria-label="Close image"
            type="button"
          >
            ×
          </button>

          {images.length > 1 ? (
            <button
              className="lightbox-nav lightbox-nav--prev"
              onClick={(event) => {
                event.stopPropagation();
                setActiveIndex((prev) => {
                  if (prev === null) return prev;
                  return (prev - 1 + images.length) % images.length;
                });
              }}
              aria-label="Previous image"
              type="button"
            >
              ‹
            </button>
          ) : null}

          <div
            className="lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              width={2200}
              height={1400}
              className="lightbox-image"
              sizes="100vw"
            />

            {activeImage.caption ? (
              <p className="lightbox-caption">{activeImage.caption}</p>
            ) : null}
          </div>

          {images.length > 1 ? (
            <button
              className="lightbox-nav lightbox-nav--next"
              onClick={(event) => {
                event.stopPropagation();
                setActiveIndex((prev) => {
                  if (prev === null) return prev;
                  return (prev + 1) % images.length;
                });
              }}
              aria-label="Next image"
              type="button"
            >
              ›
            </button>
          ) : null}
        </div>
      ) : null}
    </>
  );
}