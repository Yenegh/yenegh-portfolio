import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
        <div className="site-identity">
  <p className="site-title">
    <Link href="/">YENEGH BADIMAYALEW</Link>
  </p>
  <p className="site-role">
    Architectural Designer | MArch(Prof)
  </p>
  <p className="site-location">
    Auckland, New Zealand
  </p>
</div>

      <nav aria-label="Main navigation">
        <Link href="/">Home</Link>
        <Link href="/cv">CV</Link>
        <Link href="/archive">Archive</Link>
      </nav>

      <div className="tagline">
        Design-led architecture portfolio.<br />
      </div>
    </header>
  );
}
