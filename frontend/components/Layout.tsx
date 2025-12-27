import Link from "next/link";

export default function Layout({ children }: any) {
  return (
    <div className="container">
      <h2>LandTrust</h2>
      <nav>
        <Link href="/">Verify</Link> |{" "}
        <Link href="/register">Register</Link> |{" "}
        <Link href="/transfer">Transfer</Link>
      </nav>
      {children}
    </div>
  );
}
