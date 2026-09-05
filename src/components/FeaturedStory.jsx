import React from 'react';
import { Sparkles, Maximize2 } from 'lucide-react';

export default function FeaturedStory({ photos, onOpenLightbox }) {
  const storyPhotos = photos.filter(p => [3, 4, 5].includes(p.id));

  return (
    <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '8rem 4rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ textAlignment: 'left', marginBottom: '4rem', maxWidth: '700px' }}>
          <span className="handwritten" style={{ fontSize: '1.8rem', color: 'var(--accent-gold-dark)' }}>
            Chapter 02 • Sunlit Moments
          </span>
          <h2 className="font-serif" style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)', color: 'var(--text-primary)', marginTop: '0.5rem' }}>
            Asymmetrical Visual Storytelling
          </h2>
        </div>

        <div className="overlap-container">
          {/* Primary Featured Photo */}
          {storyPhotos[0] && (
            <div 
              className="overlap-image-primary image-reveal-wrapper"
              onClick={() => onOpenLightbox(storyPhotos[0])}
              style={{ cursor: 'pointer', position: 'relative' }}
            >
              <img 
                src={storyPhotos[0].src} 
                alt={storyPhotos[0].title} 
                className="editorial-img"
              />
              <div 
                style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.5rem',
                  background: 'rgba(250, 247, 242, 0.9)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.8rem 1.4rem',
                  borderRadius: '30px',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div className="font-serif" style={{ fontSize: '1.2rem' }}>{storyPhotos[0].title}</div>
                <div className="handwritten" style={{ fontSize: '1.1rem' }}>{storyPhotos[0].annotation}</div>
              </div>
            </div>
          )}

          {/* Secondary Overlapping Photo */}
          {storyPhotos[1] && (
            <div 
              className="overlap-image-secondary image-reveal-wrapper"
              onClick={() => onOpenLightbox(storyPhotos[1])}
              style={{ cursor: 'pointer', position: 'relative' }}
            >
              <img 
                src={storyPhotos[1].src} 
                alt={storyPhotos[1].title} 
                className="editorial-img"
              />
              <div 
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  background: 'rgba(26, 24, 22, 0.85)',
                  color: '#FAF7F2',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.85rem'
                }}
              >
                <Maximize2 size={14} />
                <span>Click to Expand</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
