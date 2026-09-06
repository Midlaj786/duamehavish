import React from 'react';
import { Sparkles, Maximize2, Heart } from 'lucide-react';

export default function FeaturedStory({ photos, onOpenLightbox }) {
  const storyPhotos = photos.filter(p => [3, 4, 15].includes(p.id));
  const primary = storyPhotos[0] || photos[2];
  const secondary = storyPhotos[1] || photos[3];
  const tertiary = storyPhotos[2] || photos[14];

  return (
    <section className="featured-story-section">
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div className="featured-story-header">
          <span className="handwritten" style={{ fontSize: '1.9rem', color: 'var(--accent-gold-dark)' }}>
            Chapter 02 • Sunlit Moments
          </span>
          <h2 className="font-serif" style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.6rem)', color: 'var(--text-primary)', marginTop: '0.4rem' }}>
            Asymmetrical Visual Storytelling
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginTop: '0.8rem', maxWidth: '650px', lineHeight: '1.75' }}>
            Unposed elegance and authentic laughter framed in natural ambient light — capturing memories as they naturally unfold.
          </p>
        </div>

        <div className="overlap-container">
          {/* Primary Featured Photo */}
          {primary && (
            <div 
              className="overlap-image-primary image-reveal-wrapper perspective-card"
              onClick={() => onOpenLightbox(primary)}
            >
              <img 
                src={primary.src} 
                onError={(e) => { if (primary.altSrc) e.currentTarget.src = primary.altSrc; }}
                alt={primary.title} 
                className="editorial-img"
              />
              <div className="overlap-caption-glass">
                <div className="font-serif" style={{ fontSize: '1.35rem', color: 'var(--text-primary)', fontWeight: '600' }}>
                  {primary.title}
                </div>
                <div className="handwritten" style={{ fontSize: '1.15rem', color: 'var(--accent-gold-dark)', marginTop: '0.2rem' }}>
                  {primary.annotation}
                </div>
              </div>
            </div>
          )}

          {/* Secondary Overlapping Photo */}
          {secondary && (
            <div 
              className="overlap-image-secondary image-reveal-wrapper perspective-card"
              onClick={() => onOpenLightbox(secondary)}
            >
              <img 
                src={secondary.src} 
                onError={(e) => { if (secondary.altSrc) e.currentTarget.src = secondary.altSrc; }}
                alt={secondary.title} 
                className="editorial-img"
              />
              <div className="expand-pill-badge">
                <Maximize2 size={14} />
                <span>Click to Expand</span>
              </div>
              <div className="overlap-caption-glass-dark">
                <div className="font-serif" style={{ fontSize: '1.2rem', color: '#FAF7F2' }}>
                  {secondary.title}
                </div>
                <div className="handwritten" style={{ fontSize: '1.05rem', color: 'var(--accent-champagne)' }}>
                  {secondary.annotation}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
