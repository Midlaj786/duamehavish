import React, { useState, useEffect } from 'react';
import AudioPlayer from './AudioPlayer';
import { Sparkles, Heart } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-glass ${scrolled ? 'scrolled' : ''}`}>
      <div 
        className="nav-brand"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
      >
        <Sparkles size={20} color="var(--accent-gold)" />
        <span className="font-serif" style={{ fontSize: '1.45rem', letterSpacing: '0.08em', fontWeight: '500' }}>
          DUA MEHAVISH
        </span>
        <span className="brand-sub-badge">
          Editorial Storybook
        </span>
      </div>

      <nav className="nav-links-wrap" style={{ display: 'flex', alignItems: 'center', gap: '2.2rem' }}>
        <a 
          href="#story" 
          className="nav-link"
        >
          Story
        </a>
        <a 
          href="#animated-showcase" 
          className="nav-link"
        >
          Motion Keepsake
        </a>
        <a 
          href="#moments" 
          className="nav-link"
        >
          35mm Reel
        </a>
        <a 
          href="#gallery" 
          className="nav-link"
        >
          18 Masterpieces
        </a>

        <AudioPlayer />
      </nav>
    </header>
  );
}
