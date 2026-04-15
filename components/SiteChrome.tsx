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
        <div className="site-footer__left">
          <a href="#top">↑ Top</a>
          <span>© 2026 Yenegh</span>
          <a href="/privacy">Privacy Policy</a>
        </div>

        <div className="site-footer__right">
          <a href="mailto:yenegh@gmail.com">Email</a>

          <a
            href="https://www.linkedin.com/in/yenegh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://www.instagram.com/spatial.practice/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
}