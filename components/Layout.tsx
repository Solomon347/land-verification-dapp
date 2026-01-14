import Link from 'next/link';
import { useState, useEffect } from 'react';
import { isAuthenticated, logout, getUser } from '../utils/auth';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isAuth, setIsAuth] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setIsAuth(isAuthenticated());
    const user = getUser();
    if (user) {
      setUserEmail(user.email);
    }
  }, []);

  const handleLogout = () => {
    if (confirm('Are you sure you want to log out?')) {
      logout();
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="nav-container">
          <Link href="/" className="logo">
            <span className="logo-icon">🛡️</span>
            <span className="logo-text">Terratrust</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Navigation Links */}
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <Link href="/" className="nav-link">Verify Land</Link>
            <Link href="/register" className="nav-link">Register Land</Link>
            <Link href="/transfer" className="nav-link">Transfer</Link>
            <Link href="/dashboard" className="nav-link">Dashboard</Link>
            <Link href="/about" className="nav-link">About</Link>

            {/* Auth Buttons */}
            <div className="nav-auth">
              {isAuth ? (
                <>
                  <span className="user-email">{userEmail.split('@')[0]}</span>
                  <button onClick={handleLogout} className="button-logout">
                    Log Out
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" className="button-login">
                    Log In
                  </Link>
                  <Link href="/signup" className="button-signup">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main>{children}</main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>🛡️ Terratrust</h3>
            <p>Securing land ownership with blockchain technology</p>
          </div>

          <div className="footer-section">
            <h4>Product</h4>
            <Link href="/">Verify Land</Link>
            <Link href="/register">Register Land</Link>
            <Link href="/dashboard">Dashboard</Link>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <Link href="/about">About Us</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <a href="https://twitter.com/terratrust" target="_blank" rel="noopener noreferrer">
              𝕏 Twitter
            </a>
            <a href="https://github.com/terratrust" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://discord.gg/terratrust" target="_blank" rel="noopener noreferrer">
              Discord
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Terratrust. Built on Starknet. Made in Nigeria 🇳🇬</p>
        </div>
      </footer>
    </div>
  );
}
