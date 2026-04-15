import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <section
        style={{
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "16px",
          maxWidth: "720px",
          paddingTop: "48px",
          paddingBottom: "56px",
        }}
      >
        <p className="section-label">404</p>
        <h1>Page not found.</h1>
        <p>This page could not be found.</p>
        <Link href="/">Return home →</Link>
      </section>
    </main>
  );
}