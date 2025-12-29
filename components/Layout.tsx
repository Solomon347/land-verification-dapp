import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-container">
          <Link href="/" className="logo">
            🏡 LandTrust
          </Link>
          <div className="nav-links">
            <Link href="/" className="nav-link">Verify</Link>
            <Link href="/register" className="nav-link">Register</Link>
            <Link href="/transfer" className="nav-link">Transfer</Link>
          </div>
        </div>
      </nav>
      <main>{children}</main>
      <footer className="footer">
        <p>🇳🇬 Protecting Nigerian land ownership with blockchain technology</p>
      </footer>
    </div>
  );
}
