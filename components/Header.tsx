import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <div>
        <div><Link href="/">YENEGH BADIMAYALEW</Link>
        <div></div><strong>Architectural Designer | MArch(Prof)</strong></div>
        <div>Auckland, New Zealand</div>
      </div>

      <nav aria-label="Main navigation">
        <Link href="/">Home</Link>
        <Link href="/archive">Archive</Link>
      </nav>

      <div className="tagline">
        Design-led architecture portfolio.<br />
      </div>
    </header>
  );
}
