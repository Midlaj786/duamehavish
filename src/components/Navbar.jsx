import React, { useState, useEffect } from 'react';
import AudioPlayer from './AudioPlayer';
import { Sparkles, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-glass ${scrolled ? 'scrolled' : ''}`}>
      <div 
        className="nav-brand"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setMobileMenuOpen(false);
        }}
        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.6rem' }}
      >
        <Sparkles size={18} color="var(--accent-gold)" />
        <span className="font-serif brand-title" style={{ letterSpacing: '0.08em', fontWeight: '500' }}>
          DUA MEHAVISH
        </span>
        <span className="brand-sub-badge">
          Storybook
        </span>
      </div>

      {/* Desktop & Tablet Navigation */}
      <nav className={`nav-links-wrap ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <a 
          href="#story" 
          className="nav-link"
          onClick={() => setMobileMenuOpen(false)}
        >
          Story
        </a>
        <a 
          href="#animated-showcase" 
          className="nav-link"
          onClick={() => setMobileMenuOpen(false)}
        >
          Keepsake
        </a>
        <a 
          href="#moments" 
          className="nav-link"
          onClick={() => setMobileMenuOpen(false)}
        >
          35mm Reel
        </a>
        <a 
          href="#gallery" 
          className="nav-link"
          onClick={() => setMobileMenuOpen(false)}
        >
          18 Plates
        </a>
      </nav>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
        <AudioPlayer />
        
        {/* Mobile Menu Toggle Button */}
        <button
          className="mobile-nav-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
    </header>
  );
}
