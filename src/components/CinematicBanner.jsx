import React from 'react';
import { Star, Maximize2 } from 'lucide-react';

export default function CinematicBanner({ photo, onOpenLightbox }) {
  const displayPhoto = photo || { 
    id: 17, 
    src: '/photos/pathu-17.jpeg', 
    altSrc: '/photos/pathu 17.jpeg', 
    title: 'Forever Dua',
    annotation: 'May her heart always remain this joyful and free 🕊️✨'
  };

  return (
    <section className="parallax-banner-section">
      <img 
        src={displayPhoto.src} 
        onError={(e) => { if (displayPhoto.altSrc) e.currentTarget.src = displayPhoto.altSrc; }}
        alt="Cinematic Parallax Finale Photography" 
        className="banner-bg"
      />
      
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(22,20,18,0.45) 0%, rgba(22,20,18,0.78) 100%)'
        }} 
      />

      <div className="banner-content">
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', color: 'var(--accent-gold)', marginBottom: '1.5rem' }}>
          <Star size={18} fill="currentColor" />
          <Star size={18} fill="currentColor" />
          <Star size={18} fill="currentColor" />
        </div>

        <blockquote className="banner-quote">
          “There are no words to describe the magic of growing up — only photographs that preserve the feeling forever.”
        </blockquote>

        <div className="handwritten" style={{ fontSize: '1.9rem', color: 'var(--accent-gold)' }}>
          Forever Dua • Chapter V Finale
        </div>

        <button
          onClick={() => onOpenLightbox(displayPhoto)}
          style={{
            marginTop: '2.5rem',
            background: 'rgba(250, 247, 242, 0.15)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(250, 247, 242, 0.35)',
            color: '#FAF7F2',
            padding: '0.85rem 2.2rem',
            borderRadius: '40px',
            fontSize: '0.85rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--accent-gold)';
            e.currentTarget.style.color = '#161412';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(250, 247, 242, 0.15)';
            e.currentTarget.style.color = '#FAF7F2';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <Maximize2 size={16} />
          <span>Expand Grand Finale Photograph</span>
        </button>
      </div>
    </section>
  );
}
