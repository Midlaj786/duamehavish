import React from 'react';
import { ChevronDown, Star, Maximize2 } from 'lucide-react';

export default function Hero({ onOpenLightbox }) {
  // Explicitly set pathu 18.jpeg as the primary hero photograph
  const photo = {
    id: 18,
    src: '/photos/pathu 18.jpeg',
    altSrc: '/photos/pathu-18.jpeg',
    title: 'Dua Mehavish — Hero Masterpiece',
    subtitle: 'Chapter I — Pure Wonder',
    date: 'Golden Dawn',
    category: 'Portraits',
    annotation: 'Dua Mehavish’s radiant hero portrait 👑✨',
    description: 'The crowning hero portrait of Dua Mehavish, capturing pure wonder and eternal elegance.'
  };

  return (
    <section 
      className="hero-container" 
      style={{ 
        position: 'relative', 
        width: '100%', 
        height: '100vh', 
        minHeight: '750px', 
        backgroundColor: 'var(--bg-dark)', 
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end'
      }}
    >
      {/* Full Viewport Photography (pathu 18.jpeg) */}
      <div 
        className="hero-image-wrapper"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1
        }}
      >
        <img 
          src={photo.src} 
          onError={(e) => { e.currentTarget.src = photo.altSrc; }}
          alt="Dua Mehavish Full Viewport Hero (pathu 18.jpeg)" 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 15%', /* Aligns Dua's face perfectly in view */
            transform: 'scale(1.02)',
            animation: 'kenBurns 25s infinite alternate ease-in-out',
            filter: 'brightness(0.92) contrast(1.04)'
          }}
        />

        {/* Soft Bottom-Only Gradient (Leaves upper 75% of image 100% clear & open!) */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, transparent 0%, transparent 45%, rgba(22,20,18,0.7) 80%, rgba(22,20,18,0.95) 100%)',
            pointerEvents: 'none'
          }}
        />
      </div>

      {/* Floating Top Badge */}
      <div 
        style={{
          position: 'absolute',
          top: '6rem',
          left: '3.5rem',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          background: 'rgba(250, 247, 242, 0.15)',
          backdropFilter: 'blur(16px)',
          padding: '0.5rem 1.2rem',
          borderRadius: '30px',
          border: '1px solid rgba(250, 247, 242, 0.3)',
          color: '#FAF7F2',
          fontSize: '0.78rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase'
        }}
      >
        <Star size={14} fill="var(--accent-gold)" color="var(--accent-gold)" />
        <span>Dua Mehavish • pathu 18.jpeg</span>
      </div>

      {/* Hero Text & CTA Block - Positioned Strictly at Bottom so Face is 100% Open & Visible */}
      <div 
        className="hero-content"
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '900px',
          margin: '0 auto 3.5rem',
          textAlign: 'center',
          padding: '0 2rem'
        }}
      >
        <h1 
          className="hero-title"
          style={{
            fontSize: 'clamp(2.4rem, 5vw, 4.5rem)',
            fontWeight: '300',
            lineHeight: '1.05',
            color: 'var(--text-light)',
            marginBottom: '0.8rem',
            textShadow: '0 3px 15px rgba(0,0,0,0.6)'
          }}
        >
          <span style={{ fontSize: '0.45em', display: 'block', textTransform: 'uppercase', letterSpacing: '0.22em', color: 'var(--accent-gold)', marginBottom: '0.2rem', fontFamily: 'var(--font-sans)', fontWeight: '500' }}>
            Dua Mehavish
          </span>
          Little Moments. <span style={{ fontStyle: 'italic', fontWeight: '300', color: 'var(--accent-gold)' }}>Big Memories.</span>
        </h1>

        <p 
          style={{
            fontSize: '1.05rem',
            color: 'rgba(250, 247, 242, 0.88)',
            maxWidth: '600px',
            margin: '0 auto 1.8rem',
            lineHeight: '1.6',
            fontWeight: '300',
            textShadow: '0 2px 8px rgba(0,0,0,0.6)'
          }}
        >
          An editorial photography storybook celebrating pure wonder and unscripted smiles.
        </p>

        <button
          onClick={() => onOpenLightbox(photo)}
          style={{
            background: 'var(--accent-gold)',
            border: 'none',
            color: '#161412',
            padding: '0.8rem 2.2rem',
            borderRadius: '40px',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.85rem',
            fontWeight: '600',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            boxShadow: 'var(--shadow-gold)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 12px 30px rgba(212, 175, 55, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'var(--shadow-gold)';
          }}
        >
          <Maximize2 size={16} />
          <span>Expand pathu 18.jpeg</span>
        </button>
      </div>

      {/* Scroll Down Indicator */}
      <a href="#story" className="hero-scroll-indicator" style={{ bottom: '1.2rem' }}>
        <ChevronDown size={20} />
      </a>
    </section>
  );
}
