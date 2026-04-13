"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header" id="top">
      <div className="site-identity">
        <p className="site-title">
          <Link href="/">YENEGH BADIMAYALEW</Link>
        </p>
        <p className="site-role">Architectural Designer</p>
      </div>

      <nav className="main-nav" aria-label="Main navigation">
        <Link href="/" className={pathname === "/" ? "is-active" : ""}>
          Home
        </Link>
        <Link
          href="/portfolio"
          className={pathname === "/portfolio" ? "is-active" : ""}
        >
          Portfolio
        </Link>
        <Link href="/cv" className={pathname === "/cv" ? "is-active" : ""}>
          CV
        </Link>
        <Link
          href="/archive"
          className={pathname === "/archive" ? "is-active" : ""}
        >
          Archive
        </Link>
      </nav>

      <button
        className="hamburger"
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      {menuOpen ? (
        <div className="mobile-menu">
          <nav className="mobile-menu__nav" aria-label="Mobile navigation">
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>
            <Link href="/portfolio" onClick={closeMenu}>
              Portfolio
            </Link>
            <Link href="/cv" onClick={closeMenu}>
              CV
            </Link>
            <Link href="/archive" onClick={closeMenu}>
              Archive
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}