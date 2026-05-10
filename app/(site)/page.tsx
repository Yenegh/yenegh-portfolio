"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const [showNav, setShowNav] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNav(true);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = (href: string) => {
    setIsExiting(true);

    setTimeout(() => {
      router.push(href);
    }, 450);
  };

  return (
    <main className={`landing-page ${isExiting ? "is-exiting" : ""}`}>
      <div className="landing-page__inner">
        <p className="landing-page__name">YENEGH BADIMAYALEW</p>

        <nav
          className={`landing-page__nav ${showNav ? "is-visible" : ""}`}
          aria-label="Landing navigation"
        >
          <button
            type="button"
            className="landing-page__link"
            onClick={() => handleNavigate("/portfolio")}
          >
            Portfolio
          </button>

          <button
            type="button"
            className="landing-page__link"
            onClick={() => handleNavigate("/archive")}
          >
            Archive
          </button>

          <button
            type="button"
            className="landing-page__link"
            onClick={() => handleNavigate("/cv")}
          >
            CV
          </button>
        </nav>
      </div>
    </main>
  );
}