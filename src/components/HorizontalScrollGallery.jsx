import React, { useRef } from 'react';
import { ArrowRight, Film, Sparkles } from 'lucide-react';

export default function HorizontalScrollGallery({ photos, onOpenLightbox }) {
  const scrollRef = useRef(null);
  const filmPhotos = photos.filter(p => [6, 7, 8, 9].includes(p.id));

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 390, behavior: 'smooth' });
    }
  };

  return (
    <section id="moments" className="filmstrip-section">
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 4rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <div className="section-number" style={{ color: 'var(--accent-gold)' }}>Chapter 03</div>
          <h2 className="section-title" style={{ color: 'var(--text-light)', marginBottom: '0.5rem' }}>
            Moments in Motion — 35mm Studio Reel
          </h2>
          <p style={{ color: 'rgba(250, 247, 242, 0.75)', fontSize: '1.1rem' }}>
            Analog medium-format snapshot reel capturing Dua Mehavish in unscripted motion.
          </p>
        </div>

        <button 
          onClick={scrollRight}
          style={{
            background: 'rgba(197, 168, 128, 0.15)',
            border: '1px solid var(--accent-gold)',
            color: 'var(--text-light)',
            padding: '0.75rem 1.6rem',
            borderRadius: '30px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            cursor: 'pointer',
            fontSize: '0.85rem',
            letterSpacing: '0.08em',
            transition: 'all 0.3s'
          }}
        >
          <Film size={16} color="var(--accent-gold)" />
          <span>Next Film Frames</span>
          <ArrowRight size={16} />
        </button>
      </div>

      {/* 35mm Film Strip Track */}
      <div 
        ref={scrollRef}
        className="filmstrip-track"
      >
        {filmPhotos.map((photo) => (
          <div
            key={photo.id}
            className="filmstrip-frame"
            onClick={() => onOpenLightbox(photo)}
          >
            <div className="filmstrip-img-wrapper">
              <img 
                src={photo.src} 
                alt={photo.title} 
                className="filmstrip-img"
              />
            </div>
            <div className="filmstrip-info">
              <div className="filmstrip-title">{photo.title}</div>
              <div className="filmstrip-annotation">{photo.annotation}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
