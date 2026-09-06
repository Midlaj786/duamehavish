import React, { useState, useEffect } from 'react';
import { ChevronDown, Star, Maximize2, Sparkles } from 'lucide-react';

export default function Hero({ photos, onOpenLightbox }) {
  // Hero flagship portraits
  const heroShowcasePhotos = photos.filter(p => [18, 13, 1, 17].includes(p.id));
  const [currentIdx, setCurrentIdx] = useState(0);

  const heroPhoto = heroShowcasePhotos[currentIdx] || photos[0];

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
      {/* Full Viewport Photography */}
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
          key={heroPhoto.id}
          src={heroPhoto.src} 
          onError={(e) => { if (heroPhoto.altSrc) e.currentTarget.src = heroPhoto.altSrc; }}
          alt={`Dua Mehavish — ${heroPhoto.title}`} 
          className="hero-active-image"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: heroPhoto.id === 18 ? 'center 15%' : 'center center',
            transform: 'scale(1.02)',
            animation: 'kenBurns 24s infinite alternate ease-in-out',
            filter: 'brightness(0.92) contrast(1.04)'
          }}
        />

        {/* Soft Bottom-Only Gradient */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(22,20,18,0.7) 78%, rgba(22,20,18,0.96) 100%)',
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
          padding: '0.5rem 1.3rem',
          borderRadius: '30px',
          border: '1px solid rgba(250, 247, 242, 0.28)',
          color: '#FAF7F2',
          fontSize: '0.78rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase'
        }}
      >
        <Star size={14} fill="var(--accent-gold)" color="var(--accent-gold)" />
        <span>Dua Mehavish • Fine Art Photography</span>
      </div>

      {/* Flagship Thumbnail Selector */}
      <div
        className="hero-stamp-selector"
        style={{
          position: 'absolute',
          top: '6rem',
          right: '3.5rem',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          background: 'rgba(22, 20, 18, 0.65)',
          backdropFilter: 'blur(16px)',
          padding: '0.4rem 0.6rem',
          borderRadius: '30px',
          border: '1px solid rgba(197, 168, 128, 0.3)'
        }}
      >
        {heroShowcasePhotos.map((p, i) => (
          <button
            key={p.id}
            onClick={() => setCurrentIdx(i)}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: i === currentIdx ? '2px solid var(--accent-gold)' : '2px solid transparent',
              cursor: 'pointer',
              padding: 0,
              background: 'none',
              transform: i === currentIdx ? 'scale(1.15)' : 'scale(1)',
              transition: 'all 0.3s ease',
              opacity: i === currentIdx ? 1 : 0.65
            }}
            title={p.title}
          >
            <img 
              src={p.src} 
              onError={(e) => { if (p.altSrc) e.currentTarget.src = p.altSrc; }}
              alt={p.title} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </button>
        ))}
      </div>

      {/* Hero Text & CTA Block */}
      <div 
        className="hero-content"
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '920px',
          margin: '0 auto 3.5rem',
          textAlign: 'center',
          padding: '0 2rem'
        }}
      >
        <h1 
          className="hero-title"
          style={{
            fontSize: 'clamp(2.4rem, 5.2vw, 4.6rem)',
            fontWeight: '300',
            lineHeight: '1.06',
            color: 'var(--text-light)',
            marginBottom: '0.8rem',
            textShadow: '0 4px 20px rgba(0,0,0,0.6)'
          }}
        >
          <span style={{ fontSize: '0.42em', display: 'block', textTransform: 'uppercase', letterSpacing: '0.24em', color: 'var(--accent-gold)', marginBottom: '0.3rem', fontFamily: 'var(--font-sans)', fontWeight: '600' }}>
            DUA MEHAVISH • MEMORY STORYBOOK
          </span>
          Little Moments. <span style={{ fontStyle: 'italic', fontWeight: '300', color: 'var(--accent-gold)' }}>Eternal Memories.</span>
        </h1>

        <p 
          style={{
            fontSize: '1.05rem',
            color: 'rgba(250, 247, 242, 0.9)',
            maxWidth: '620px',
            margin: '0 auto 1.8rem',
            lineHeight: '1.65',
            fontWeight: '300',
            textShadow: '0 2px 8px rgba(0,0,0,0.6)'
          }}
        >
          A luxury digital storybook celebrating pure wonder, sunlit smiles, and the timeless beauty of childhood.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => onOpenLightbox(heroPhoto)}
            style={{
              background: 'var(--accent-gold)',
              border: 'none',
              color: '#161412',
              padding: '0.85rem 2.2rem',
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
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(212, 175, 55, 0.45)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-gold)';
            }}
          >
            <Maximize2 size={16} />
            <span>Expand Portrait</span>
          </button>

          <a
            href="#gallery"
            style={{
              background: 'rgba(250, 247, 242, 0.12)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(250, 247, 242, 0.3)',
              color: '#FAF7F2',
              padding: '0.85rem 2rem',
              borderRadius: '40px',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.85rem',
              fontWeight: '500',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(250, 247, 242, 0.22)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(250, 247, 242, 0.12)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Sparkles size={16} color="var(--accent-gold)" />
            <span>View All 18 Stories</span>
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a href="#story" className="hero-scroll-indicator" style={{ bottom: '1.2rem' }}>
        <ChevronDown size={20} />
      </a>
    </section>
  );
}
