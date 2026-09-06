import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Play, Pause, Download, Sparkles } from 'lucide-react';

export default function LightboxModal({ activePhoto, allPhotos, onClose, onNavigate, onSelectPhoto }) {
  const [zoomed, setZoomed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate('prev');
      if (e.key === 'ArrowRight') onNavigate('next');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNavigate]);

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        onNavigate('next');
      }, 4000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, onNavigate]);

  if (!activePhoto) return null;

  const currentIndex = allPhotos.findIndex(p => p.id === activePhoto.id);

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div 
        className="lightbox-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header & Action Buttons */}
        <div className="lightbox-top-bar">
          <div className="lightbox-counter-badge">
            <Sparkles size={14} color="var(--accent-gold)" />
            <span>Masterpiece {currentIndex + 1} of {allPhotos.length}</span>
          </div>

          <div style={{ display: 'flex', gap: '0.6rem' }}>
            <button 
              className={`lightbox-btn ${isPlaying ? 'active' : ''}`}
              onClick={() => setIsPlaying(!isPlaying)}
              title={isPlaying ? 'Pause Slideshow' : 'Play Auto Slideshow'}
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            </button>

            <button 
              className="lightbox-btn"
              onClick={() => setZoomed(!zoomed)}
              title={zoomed ? 'Zoom Out' : 'Zoom In'}
            >
              {zoomed ? <ZoomOut size={18} /> : <ZoomIn size={18} />}
            </button>

            <button 
              className="lightbox-btn close-btn"
              onClick={onClose}
              title="Close Lightbox (Esc)"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Previous Button */}
        <button 
          className="lightbox-btn lightbox-prev"
          onClick={() => onNavigate('prev')}
          title="Previous Photo (Left Arrow)"
        >
          <ChevronLeft size={26} />
        </button>

        {/* Main Image Viewport */}
        <div className="lightbox-image-wrapper">
          <img 
            key={activePhoto.id}
            src={activePhoto.src} 
            onError={(e) => { if (activePhoto.altSrc) e.currentTarget.src = activePhoto.altSrc; }}
            alt={activePhoto.title}
            className="lightbox-img"
            style={{
              transform: zoomed ? 'scale(1.45)' : 'scale(1)',
              cursor: zoomed ? 'zoom-out' : 'zoom-in'
            }}
            onClick={() => setZoomed(!zoomed)}
          />
        </div>

        {/* Next Button */}
        <button 
          className="lightbox-btn lightbox-next"
          onClick={() => onNavigate('next')}
          title="Next Photo (Right Arrow)"
        >
          <ChevronRight size={26} />
        </button>

        {/* Photo Story Metadata */}
        <div className="lightbox-details">
          <div className="lightbox-meta-tag">
            {activePhoto.subtitle || 'DUA MEHAVISH STORY'} • {activePhoto.category} • {activePhoto.date}
          </div>
          <h2 className="lightbox-title">{activePhoto.title}</h2>
          <p className="lightbox-annotation">"{activePhoto.annotation}"</p>
        </div>

        {/* All 18 Thumbnail Film Strip */}
        <div className="lightbox-thumb-strip">
          {allPhotos.map((p, idx) => (
            <div
              key={p.id}
              className={`lightbox-thumb-container ${p.id === activePhoto.id ? 'active' : ''}`}
              onClick={() => onSelectPhoto(p)}
              title={`${idx + 1}. ${p.title}`}
            >
              <img
                src={p.src}
                onError={(e) => { if (p.altSrc) e.currentTarget.src = p.altSrc; }}
                alt={p.title}
                className="lightbox-thumb"
              />
              <span className="thumb-num">{idx + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
