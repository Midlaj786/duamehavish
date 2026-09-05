import React from 'react';
import { Heart } from 'lucide-react';

export default function StorybookIntro({ photo, onOpenLightbox }) {
  const displayPhoto = photo || { src: '/photos/pathu-2.jpeg', title: 'Innocence of Dua' };

  return (
    <section id="story" className="editorial-section">
      <div className="editorial-header">
        <div className="section-number">Chapter 01</div>
        <h2 className="section-title">
          Where Every Smile Tells Dua's Story
        </h2>
        <p className="section-subtitle">
          Childhood passes in the blink of an eye. Our photography is crafted to capture not just how Dua Mehavish looked, but how it *felt* to be in that precise, sunlit moment.
        </p>
      </div>

      <div 
        className="overlap-container"
        style={{ marginTop: '4rem' }}
      >
        <div 
          className="overlap-image-primary image-reveal-wrapper"
          onClick={() => onOpenLightbox(displayPhoto)}
          style={{ cursor: 'pointer' }}
        >
          <img 
            src={displayPhoto.src} 
            alt={displayPhoto.title} 
            className="editorial-img"
          />
        </div>

        <div style={{ gridColumn: '8 / span 5', paddingLeft: '2rem' }}>
          <span className="handwritten" style={{ fontSize: '1.6rem', display: 'block', marginBottom: '1rem' }}>
            "Children see magic because they look for it."
          </span>
          <h3 className="font-serif" style={{ fontSize: '2.4rem', fontWeight: '300', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            Preserving Dua’s Unfiltered Innocence & Joy
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            Every portrait of Dua Mehavish in this storybook is illuminated by natural light and genuine emotion. No forced poses, no rigid backdrops — only authentic expressions captured in organic environments.
          </p>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--accent-gold-dark)', fontFamily: 'var(--font-handwritten)', fontSize: '1.4rem' }}>
            <Heart size={20} fill="var(--accent-gold)" color="var(--accent-gold)" />
            <span>Dedicated to Dua Mehavish • Curated with love</span>
          </div>
        </div>
      </div>
    </section>
  );
}
