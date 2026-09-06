import React from 'react';
import { Heart, Sparkles, BookOpen, Maximize2 } from 'lucide-react';

export default function StorybookIntro({ photo, onOpenLightbox }) {
  const displayPhoto = photo || { 
    id: 2, 
    src: '/photos/pathu-2.jpeg', 
    altSrc: '/photos/pathu 2.jpeg', 
    title: 'Innocence & Wonder', 
    annotation: 'Eyes filled with curiosity and quiet wonder 🌿' 
  };

  return (
    <section id="story" className="editorial-section">
      <div className="editorial-header">
        <div className="section-number">Chapter 01</div>
        <h2 className="section-title">
          Where Every Smile Tells Dua's Story
        </h2>
        <p className="section-subtitle">
          Childhood passes in the blink of an eye. Our photography is crafted to capture not just how Dua Mehavish looked, but how it felt to be in that precise, sunlit moment.
        </p>
      </div>

      <div 
        className="overlap-container"
        style={{ marginTop: '4.5rem' }}
      >
        <div 
          className="overlap-image-primary image-reveal-wrapper perspective-card"
          onClick={() => onOpenLightbox(displayPhoto)}
          style={{ cursor: 'pointer', position: 'relative' }}
        >
          <img 
            src={displayPhoto.src} 
            onError={(e) => { if (displayPhoto.altSrc) e.currentTarget.src = displayPhoto.altSrc; }}
            alt={displayPhoto.title} 
            className="editorial-img"
          />
          <div className="image-expand-hint">
            <Maximize2 size={16} />
            <span>Expand Story Portrait</span>
          </div>
        </div>

        <div className="storybook-text-block">
          <span className="handwritten drop-quote">
            "Children see magic because they look for it."
          </span>
          <h3 className="font-serif storybook-subheading">
            Preserving Dua’s Unfiltered Innocence & Joy
          </h3>
          <p className="storybook-paragraph">
            Every portrait of Dua Mehavish in this storybook is illuminated by natural light and genuine emotion. No forced poses, no rigid backdrops — only authentic expressions captured in organic environments.
          </p>
          
          <div className="storybook-signature">
            <Heart size={20} fill="var(--accent-gold)" color="var(--accent-gold)" />
            <span>Dedicated to Dua Mehavish • Curated with love</span>
          </div>
        </div>
      </div>
    </section>
  );
}
