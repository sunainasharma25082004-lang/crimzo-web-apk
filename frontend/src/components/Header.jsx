import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BrandLogo from './BrandLogo';
import { useHeaderScroll } from '../hooks/useHeaderScroll';

const NAV_ITEMS = [
  { label: 'Creators', href: '#creators' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works', short: 'Steps' },
  { label: 'Screenshots', href: '#screenshots', short: 'Preview' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Download', href: '#download', cta: true },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useHeaderScroll();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const getHref = (href) => (isHome ? href : `/${href}`);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <nav className="nav container">
        <Link to="/" aria-label="CRIMZO Home" onClick={closeMenu}>
          <BrandLogo size={40} />
        </Link>

        <button
          className="nav-toggle"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={getHref(item.href)}
                className={item.cta ? 'nav-cta' : undefined}
                onClick={closeMenu}
              >
                <span className="nav-label-full">{item.label}</span>
                <span className="nav-label-short">{item.short || item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}