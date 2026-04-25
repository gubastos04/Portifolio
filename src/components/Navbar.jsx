import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../data';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <a href="#inicio" className="nav-logo" onClick={(e) => handleLink(e, '#inicio')}>
      </a>

      <ul className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={(e) => handleLink(e, link.href)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className={`nav-hamburger ${menuOpen ? 'nav-hamburger--open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
