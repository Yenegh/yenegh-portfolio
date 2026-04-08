"use client";

import { useState } from "react";
import Image from "next/image";

type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

type ProjectGalleryProps = {
  images: GalleryImage[];
};

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <section className="gallery">
        {images.map((image) => (
          <figure
            key={image.src}
            className="gallery-item"
            onClick={() => setActiveImage(image)}
          >
            <div className="gallery-image-wrap">
              <Image
                src={image.src}
                alt={image.alt}
                width={1600}
                height={1000}
              />
            </div>
            <figcaption>{image.caption}</figcaption>
          </figure>
        ))}
      </section>

      {activeImage && (
        <div
          className="lightbox"
          onClick={() => setActiveImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded project image"
        >
          <button
            className="lightbox-close"
            onClick={(e) => {
              e.stopPropagation();
              setActiveImage(null);
            }}
            aria-label="Close image"
          >
            ×
          </button>

          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              width={2200}
              height={1400}
              className="lightbox-image"
            />
            {activeImage.caption && (
              <p className="lightbox-caption">{activeImage.caption}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}