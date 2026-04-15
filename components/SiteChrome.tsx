"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/Header";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";

  if (isLandingPage) {
    return <>{children}</>;
  }

  return (
    <div className="site-shell site-shell--fade-in">
      <Header />

      {children}

      <footer className="site-footer">
        <div className="site-footer__row site-footer__row--primary">
          <a href="mailto:yenegh@gmail.com" className="site-footer__link">
            Email
          </a>

          <a
            href="https://www.instagram.com/spatial.practice?igsh=NXdvM3Fkb2gyMWNj"
            target="_blank"
            rel="noopener noreferrer"
            className="site-footer__link"
          >
            Instagram
          </a>

          <a
            href="https://www.linkedin.com/in/yenegh/"
            target="_blank"
            rel="noopener noreferrer"
            className="site-footer__link"
          >
            LinkedIn
          </a>
        </div>

        <div className="site-footer__row site-footer__row--secondary">
          <a href="#top" className="site-footer__link site-footer__link--muted">
            ↑ Top
          </a>

          <span className="site-footer__text site-footer__text--muted">
            © 2026 Yenegh
          </span>

          <a
            href="/privacy"
            className="site-footer__link site-footer__link--muted"
          >
            Privacy
          </a>
        </div>
      </footer>
    </div>
  );
}