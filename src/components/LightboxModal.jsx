import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Sparkles } from 'lucide-react';

export default function LightboxModal({ activePhoto, allPhotos, onClose, onNavigate, onSelectPhoto }) {
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate('prev');
      if (e.key === 'ArrowRight') onNavigate('next');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNavigate]);

  if (!activePhoto) return null;

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div 
        className="lightbox-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Buttons */}
        <div style={{ position: 'absolute', top: '-60px', right: 0, display: 'flex', gap: '0.75rem' }}>
          <button 
            className="lightbox-btn"
            onClick={() => setZoomed(!zoomed)}
            title={zoomed ? 'Zoom Out' : 'Zoom In'}
          >
            {zoomed ? <ZoomOut size={20} /> : <ZoomIn size={20} />}
          </button>

          <button 
            className="lightbox-btn"
            onClick={onClose}
            title="Close Lightbox (Esc)"
          >
            <X size={22} />
          </button>
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
            src={activePhoto.src} 
            alt={activePhoto.title}
            className="lightbox-img"
            style={{
              transform: zoomed ? 'scale(1.4)' : 'scale(1)',
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
          <div style={{ fontSize: '0.82rem', color: 'var(--accent-champagne)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
            {activePhoto.subtitle || 'DUA MEHAVISH STORY'} • {activePhoto.date}
          </div>
          <h2 className="lightbox-title">{activePhoto.title}</h2>
          <p className="lightbox-annotation">"{activePhoto.annotation}"</p>
        </div>

        {/* All 17 Thumbnail Film Strip */}
        <div className="lightbox-thumb-strip">
          {allPhotos.map((p) => (
            <img
              key={p.id}
              src={p.src}
              alt={p.title}
              className={`lightbox-thumb ${p.id === activePhoto.id ? 'active' : ''}`}
              onClick={() => onSelectPhoto(p)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
