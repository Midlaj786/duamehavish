import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, Film, Sparkles, Play, Pause } from 'lucide-react';

export default function HorizontalScrollGallery({ photos, onOpenLightbox }) {
  const scrollRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const filmPhotos = photos.filter(p => [6, 7, 8, 9].includes(p.id));

  const scroll = (direction) => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    let interval;
    if (isAutoScrolling) {
      interval = setInterval(() => {
        if (scrollRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
          if (scrollLeft + clientWidth >= scrollWidth - 10) {
            scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
          }
        }
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  return (
    <section id="moments" className="filmstrip-section">
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 4rem 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div>
          <div className="section-number" style={{ color: 'var(--accent-gold)' }}>Chapter 03</div>
          <h2 className="section-title" style={{ color: 'var(--text-light)', marginBottom: '0.5rem' }}>
            Moments in Motion — 35mm Studio Reel
          </h2>
          <p style={{ color: 'rgba(250, 247, 242, 0.8)', fontSize: '1.05rem', maxWidth: '600px' }}>
            An analog medium-format snapshot strip capturing spontaneous smiles, quiet laughter, and playful curiosity.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <button
            onClick={() => setIsAutoScrolling(!isAutoScrolling)}
            className="film-control-btn"
            title={isAutoScrolling ? 'Pause Auto Scroll' : 'Play Auto Scroll'}
          >
            {isAutoScrolling ? <Pause size={15} /> : <Play size={15} />}
            <span>{isAutoScrolling ? 'Auto-Glide On' : 'Auto-Glide'}</span>
          </button>

          <button 
            onClick={() => scroll('left')}
            className="film-nav-arrow"
            title="Previous Frame"
          >
            <ArrowLeft size={17} />
          </button>

          <button 
            onClick={() => scroll('right')}
            className="film-nav-arrow"
            title="Next Frame"
          >
            <ArrowRight size={17} />
          </button>
        </div>
      </div>

      {/* 35mm Film Strip Track */}
      <div 
        ref={scrollRef}
        className="filmstrip-track"
        onMouseEnter={() => { if (isAutoScrolling) setIsAutoScrolling(false); }}
      >
        {filmPhotos.map((photo) => (
          <div
            key={photo.id}
            className="filmstrip-frame"
            onClick={() => onOpenLightbox(photo)}
          >
            <div className="film-sprocket-top">
              <span>EXP {String(photo.id).padStart(2, '0')}</span>
              <span>KODAK GOLD 200</span>
            </div>
            
            <div className="filmstrip-img-wrapper">
              <img 
                src={photo.src} 
                onError={(e) => { if (photo.altSrc) e.currentTarget.src = photo.altSrc; }}
                alt={photo.title} 
                className="filmstrip-img"
                loading="lazy"
              />
            </div>

            <div className="filmstrip-info">
              <div className="filmstrip-title">{photo.title}</div>
              <div className="filmstrip-annotation">"{photo.annotation}"</div>
            </div>

            <div className="film-sprocket-bottom">
              <span>• • •</span>
              <span>DUA MEHAVISH</span>
              <span>• • •</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
