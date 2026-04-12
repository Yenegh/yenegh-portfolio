import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "YENEGH",
  description: "Minimal architecture portfolio."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
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
  {/* LEFT — back to top */}
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

  {/* RIGHT — contact */}
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
      style={{ textDecoration: "none", color: "inherit" }}
    >
      LinkedIn
    </a>

    <a
      href="https://www.instagram.com/yenegh/"
      target="_blank"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      Instagram
    </a>
  </div>
</footer>
        </div>
      </body>
    </html>
  );
}
