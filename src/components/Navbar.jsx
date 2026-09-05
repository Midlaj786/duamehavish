import React, { useState, useEffect } from 'react';
import AudioPlayer from './AudioPlayer';
import { Sparkles } from 'lucide-react';

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
        <span className="font-serif" style={{ fontSize: '1.4rem', letterSpacing: '0.08em', fontWeight: '500' }}>
          DUA MEHAVISH
        </span>
        <span style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.7, borderLeft: '1px solid currentColor', paddingLeft: '0.75rem' }}>
          Visual Stories
        </span>
      </div>

      <nav style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
        <a 
          href="#story" 
          style={{ textDecoration: 'none', color: 'inherit', fontSize: '0.9rem', letterSpacing: '0.05em', transition: 'color 0.3s' }}
        >
          Story
        </a>
        <a 
          href="#moments" 
          style={{ textDecoration: 'none', color: 'inherit', fontSize: '0.9rem', letterSpacing: '0.05em', transition: 'color 0.3s' }}
        >
          Moments
        </a>
        <a 
          href="#gallery" 
          style={{ textDecoration: 'none', color: 'inherit', fontSize: '0.9rem', letterSpacing: '0.05em', transition: 'color 0.3s' }}
        >
          Gallery
        </a>

        <AudioPlayer />
      </nav>
    </header>
  );
}
