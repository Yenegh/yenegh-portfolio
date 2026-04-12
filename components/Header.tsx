"use client";

import { useState } from "react";
import Link from "next/link";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="site-identity">
        <p className="site-title">
          <Link href="/" onClick={closeMenu}>
            YENEGH BADIMAYALEW
          </Link>
        </p>
        <p className="site-role">Architectural Designer</p>
      </div>

      <nav className="main-nav" aria-label="Main navigation">
        <Link href="/">Home</Link>
        <Link href="/cv">CV</Link>
        <Link href="/archive">Archive</Link>
      </nav>

      <button
        type="button"
        className="hamburger"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      {menuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-menu__nav" aria-label="Mobile navigation">
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>
            <Link href="/cv" onClick={closeMenu}>
              CV
            </Link>
            <Link href="/archive" onClick={closeMenu}>
              Archive
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}