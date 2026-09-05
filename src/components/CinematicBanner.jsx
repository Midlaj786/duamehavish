import React from 'react';
import { Star } from 'lucide-react';

export default function CinematicBanner({ photo, onOpenLightbox }) {
  const displayPhoto = photo || { src: '/photos/pathu-17.jpeg', title: 'Forever Young' };

  return (
    <section className="parallax-banner-section">
      <img 
        src={displayPhoto.src} 
        alt="Cinematic Parallax Finale Photography" 
        className="banner-bg"
      />
      
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(26,24,22,0.4) 0%, rgba(26,24,22,0.7) 100%)'
        }} 
      />

      <div className="banner-content">
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', color: 'var(--accent-gold)', marginBottom: '1.5rem' }}>
          <Star size={18} fill="currentColor" />
          <Star size={18} fill="currentColor" />
          <Star size={18} fill="currentColor" />
        </div>

        <blockquote className="banner-quote">
          “There are no words to describe the magic of growing up — only photographs that preserve the feeling forever.”
        </blockquote>

        <div className="handwritten" style={{ fontSize: '1.8rem', color: 'var(--accent-gold)' }}>
          Forever Young • Chapter V
        </div>

        <button
          onClick={() => onOpenLightbox(displayPhoto)}
          style={{
            marginTop: '2.5rem',
            background: 'rgba(250, 247, 242, 0.15)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(250, 247, 242, 0.3)',
            color: '#FAF7F2',
            padding: '0.8rem 2rem',
            borderRadius: '40px',
            fontSize: '0.85rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'all 0.3s'
          }}
        >
          Expand Finale Photograph
        </button>
      </div>
    </section>
  );
}
