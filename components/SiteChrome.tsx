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

      <footer
        style={{
          borderTop: "1px solid rgba(0,0,0,0.15)",
          marginTop: "64px",
          paddingTop: "20px",
          paddingBottom: "20px",
          fontSize: "0.9rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <a
          href="#top"
          style={{
            textDecoration: "none",
            color: "inherit",
            opacity: 0.7,
          }}
        >
          ↑ Top
        </a>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <a
            href="mailto:yenegh@gmail.com"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/yenegh/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            LinkedIn
          </a>

          <a
            href="https://www.instagram.com/yenegh/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
}