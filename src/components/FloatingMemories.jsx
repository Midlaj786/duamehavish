import React, { useState, useEffect } from 'react';
import { Sparkles, Maximize2, RefreshCw, Heart, Eye } from 'lucide-react';

export default function FloatingMemories({ photos, onOpenLightbox }) {
  // Selected animated spotlight photo
  const animatedSet = photos.filter(p => [18, 1, 5, 13, 15, 17, 3, 2].includes(p.id));
  const [activeIdx, setActiveIdx] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % animatedSet.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, animatedSet.length]);

  const currentPhoto = animatedSet[activeIdx] || photos[0];

  // Floating polaroids around the showcase
  const floatingCards = [
    { photo: photos.find(p => p.id === 5) || photos[4], rot: '-4deg', delay: '0s', top: '10%', left: '4%' },
    { photo: photos.find(p => p.id === 13) || photos[12], rot: '5deg', delay: '1.2s', top: '55%', left: '2%' },
    { photo: photos.find(p => p.id === 1) || photos[0], rot: '6deg', delay: '0.6s', top: '8%', right: '4%' },
    { photo: photos.find(p => p.id === 17) || photos[16], rot: '-5deg', delay: '1.8s', top: '52%', right: '3%' },
  ];

  return (
    <section className="floating-showcase-section" id="animated-showcase">
      {/* Editorial Header */}
      <div className="editorial-header" style={{ marginBottom: '3.5rem' }}>
        <div className="section-number">Animated Keepsake</div>
        <h2 className="section-title">
          Timeless Moments in Gentle Motion
        </h2>
        <p className="section-subtitle">
          Hover and interact with our animated memory frames, bringing each golden smile of Dua Mehavish alive.
        </p>
      </div>

      <div className="floating-stage-container">
        {/* Ambient Glow Circles */}
        <div className="ambient-glow-orb glow-gold" />
        <div className="ambient-glow-orb glow-rose" />

        {/* Left Floating Animated Cards (Desktop) */}
        <div className="floating-side-column left-column">
          {floatingCards.slice(0, 2).map((item, idx) => (
            <div
              key={item.photo.id}
              className={`floating-polaroid card-float-${idx + 1}`}
              style={{
                animationDelay: item.delay,
                transform: `rotate(${item.rot})`
              }}
              onClick={() => onOpenLightbox(item.photo)}
            >
              <div className="polaroid-pin">
                <span className="pin-head" />
              </div>
              <div className="polaroid-img-box">
                <img 
                  src={item.photo.src} 
                  onError={(e) => { if (item.photo.altSrc) e.currentTarget.src = item.photo.altSrc; }}
                  alt={item.photo.title}
                  className="polaroid-img"
                />
                <div className="polaroid-hover-badge">
                  <Maximize2 size={15} />
                </div>
              </div>
              <div className="polaroid-caption">
                <span className="polaroid-title">{item.photo.title}</span>
                <span className="polaroid-note">{item.photo.annotation}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Center Animated Interactive Showcase Box */}
        <div className="spotlight-master-card">
          <div className="spotlight-frame">
            {/* Animated Shimmer Ribbon */}
            <div className="spotlight-ribbon">
              <Sparkles size={14} color="var(--accent-gold)" />
              <span>Living Editorial Spotlight</span>
            </div>

            {/* Main Stage Image with Smooth Transition */}
            <div 
              className="spotlight-img-viewport"
              onClick={() => onOpenLightbox(currentPhoto)}
            >
              <img 
                key={currentPhoto.id}
                src={currentPhoto.src} 
                onError={(e) => { if (currentPhoto.altSrc) e.currentTarget.src = currentPhoto.altSrc; }}
                alt={currentPhoto.title}
                className="spotlight-active-img"
              />
              <div className="spotlight-glass-overlay">
                <div className="spotlight-meta">
                  <span className="spotlight-category">{currentPhoto.category} • {currentPhoto.date}</span>
                  <h3 className="spotlight-title">{currentPhoto.title}</h3>
                  <p className="spotlight-handwritten">"{currentPhoto.annotation}"</p>
                </div>
                <button 
                  className="spotlight-expand-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenLightbox(currentPhoto);
                  }}
                >
                  <Maximize2 size={16} />
                  <span>View Full Story</span>
                </button>
              </div>
            </div>

            {/* Quick Interactive Thumbnail Switcher */}
            <div className="spotlight-controls">
              <div className="spotlight-dots">
                {animatedSet.map((photo, index) => (
                  <button
                    key={photo.id}
                    className={`spotlight-dot ${index === activeIdx ? 'active' : ''}`}
                    onClick={() => {
                      setActiveIdx(index);
                      setIsAutoPlaying(false);
                    }}
                    title={photo.title}
                  >
                    <img 
                      src={photo.src} 
                      onError={(e) => { if (photo.altSrc) e.currentTarget.src = photo.altSrc; }}
                      alt={photo.title} 
                      className="dot-thumb" 
                    />
                  </button>
                ))}
              </div>

              <button 
                className="spotlight-play-toggle"
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                title={isAutoPlaying ? 'Pause Animation' : 'Auto Play Animation'}
              >
                <RefreshCw size={14} className={isAutoPlaying ? 'spin-slow' : ''} />
                <span>{isAutoPlaying ? 'Motion Live' : 'Paused'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Floating Animated Cards (Desktop) */}
        <div className="floating-side-column right-column">
          {floatingCards.slice(2, 4).map((item, idx) => (
            <div
              key={item.photo.id}
              className={`floating-polaroid card-float-${idx + 3}`}
              style={{
                animationDelay: item.delay,
                transform: `rotate(${item.rot})`
              }}
              onClick={() => onOpenLightbox(item.photo)}
            >
              <div className="polaroid-pin">
                <span className="pin-head" />
              </div>
              <div className="polaroid-img-box">
                <img 
                  src={item.photo.src} 
                  onError={(e) => { if (item.photo.altSrc) e.currentTarget.src = item.photo.altSrc; }}
                  alt={item.photo.title}
                  className="polaroid-img"
                />
                <div className="polaroid-hover-badge">
                  <Maximize2 size={15} />
                </div>
              </div>
              <div className="polaroid-caption">
                <span className="polaroid-title">{item.photo.title}</span>
                <span className="polaroid-note">{item.photo.annotation}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
