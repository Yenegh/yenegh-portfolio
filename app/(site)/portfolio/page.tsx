import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function PortfolioPage() {
  const featured = projects
    .filter((p) => p.isPublic !== false)
    .filter((p) => p.featured);

  return (
    <main>
      <div className="gallery-wall">
        {featured.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="gallery-wall__item"
          >
            {project.cardImage && (
              <div className="gallery-wall__image-wrap">
                <Image
                  src={project.cardImage}
                  alt=""
                  width={1200}
                  height={800}
                  className="gallery-wall__image"
                />
              </div>
            )}
            <p className="gallery-wall__caption">{project.title.toLowerCase()}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
