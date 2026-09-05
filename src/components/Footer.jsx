import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-gold)', marginBottom: '1rem' }}>
          <Sparkles size={20} />
        </div>

        <h2 className="footer-logo">
          DUA MEHAVISH
        </h2>

        <p className="footer-quote">
          "Little moments today become big memories tomorrow."
        </p>

        <div className="footer-divider" />

        <div style={{ marginBottom: '2.5rem' }}>
          <button
            onClick={scrollToTop}
            style={{
              background: 'none',
              border: '1px solid rgba(197, 168, 128, 0.3)',
              color: 'var(--text-light)',
              padding: '0.7rem 1.6rem',
              borderRadius: '30px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.85rem',
              letterSpacing: '0.08em',
              transition: 'all 0.3s'
            }}
          >
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} DUA MEHAVISH Children Photography. All rights reserved. Crafted with care for timeless memories.
        </p>
      </div>
    </footer>
  );
}
