import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';
import { APP_INFO } from '../constants/appInfo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/">
            <BrandLogo size={36} />
          </Link>
          <p>Connect, go live, and earn rewards with the ultimate social streaming experience.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/#creators">Live Creators</a></li>
            <li><a href="/#features">Features</a></li>
            <li><a href="/#how-it-works">How It Works</a></li>
            <li><a href="/#download">Download</a></li>
            <li><a href="/#faq">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Legal</h4>
          <ul>
            <li><a href="/#about">About CRIMZO</a></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms &amp; Conditions</Link></li>
          </ul>
        </div>

        <div className="footer-contact" id="about">
          <h4>Contact</h4>
          <a href={`mailto:${APP_INFO.email}`} className="contact-email">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            {APP_INFO.email}
          </a>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>&copy; 2026 CRIMZO. All rights reserved.</p>
      </div>
    </footer>
  );
}