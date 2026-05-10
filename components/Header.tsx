"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="site-header" id="top">
      <div className="site-identity">
        <p className="site-title">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            YENEGH BADIMAYALEW
          </Link>
        </p>
      </div>

      <button
        className="hamburger"
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((p) => !p)}
      >
        <span />
        <span />
        <span />
      </button>

      {menuOpen && (
        <div className="nav-overlay" onClick={() => setMenuOpen(false)}>
          <nav
            className="nav-overlay__nav"
            onClick={(e) => e.stopPropagation()}
            aria-label="Main navigation"
          >
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link>
            <Link href="/archive" onClick={() => setMenuOpen(false)}>Archive</Link>
            <Link href="/cv" onClick={() => setMenuOpen(false)}>About</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
