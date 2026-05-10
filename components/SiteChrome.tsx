"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Header } from "@/components/Header";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";
  const isBarePage = isLandingPage || pathname === "/dunnage";

  useEffect(() => {
    document.documentElement.style.background = "#f8f8f6";
    document.body.style.background = "#f8f8f6";
    return () => {
      document.documentElement.style.background = "";
      document.body.style.background = "";
    };
  }, []);

  if (isBarePage) {
    return <>{children}</>;
  }

  return (
    <div className="site-shell site-shell--fade-in" id="top">
      <Header />

      {children}

      <footer className="site-footer">
        <div className="site-footer__group">
          <a href="mailto:yenegh@gmail.com" className="site-footer__link">Email</a>
          <a href="https://www.instagram.com/spatial.practice?igsh=NXdvM3Fkb2gyMWNj" target="_blank" rel="noopener noreferrer" className="site-footer__link">Instagram</a>
          <a href="https://www.linkedin.com/in/yenegh/" target="_blank" rel="noopener noreferrer" className="site-footer__link">LinkedIn</a>
        </div>
        <div className="site-footer__group">
          <a href="#top" className="site-footer__link">↑ Top</a>
          <span className="site-footer__text">© 2026 Yenegh</span>
          <a href="/privacy" className="site-footer__link">Privacy</a>
          <a href="/dunnage" className="site-footer__link">dunnage</a>
        </div>
      </footer>
    </div>
  );
}