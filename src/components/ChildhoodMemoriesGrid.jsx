import React, { useState } from 'react';
import { Sparkles, Maximize2 } from 'lucide-react';

const toRoman = (num) => {
  const romanMap = {
    1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V',
    6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX', 10: 'X',
    11: 'XI', 12: 'XII', 13: 'XIII', 14: 'XIV', 15: 'XV',
    16: 'XVI', 17: 'XVII', 18: 'XVIII'
  };
  return romanMap[num] || String(num);
};

export default function ChildhoodMemoriesGrid({ photos, onOpenLightbox }) {
  const [activeFilter, setActiveFilter] = useState('All 18 Works');

  const categories = [
    { label: 'All 18 Works', key: 'All 18 Works', icon: '✦' },
    { label: 'Portraits', key: 'Portraits', icon: '👑' },
    { label: 'Storybook', key: 'Storybook', icon: '📖' },
    { label: 'Candid Joy', key: 'Candid', icon: '🌿' },
    { label: 'Golden Light', key: 'Golden Light', icon: '☀️' }
  ];

  const filteredPhotos = photos.filter((photo) => {
    return activeFilter === 'All 18 Works' || photo.category === activeFilter;
  });

  return (
    <section id="gallery" className="museum-gallery-section">
      {/* Grand Classical Exhibition Header */}
      <div className="museum-editorial-header">
        <div className="classic-emblem-badge">
          <Sparkles size={14} color="var(--accent-gold)" />
          <span>ARCHIVE ÉDITION LIMITÉE • XVIII PLATES</span>
          <Sparkles size={14} color="var(--accent-gold)" />
        </div>

        <h2 className="museum-section-title">
          The 18 Childhood Memory Masterpieces
        </h2>

        <div className="classic-filigree-divider">
          <span className="line" />
          <span className="diamond">❖</span>
          <span className="line" />
        </div>

        <p className="museum-section-subtitle">
          Every golden moment of Dua Mehavish preserved in timeless vintage keepsake polaroids — unscripted laughter, pure wonder, and eternal innocence.
        </p>
      </div>

      {/* Centered Category Filter Tabs */}
      <div className="polaroid-filter-container">
        <div className="museum-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`museum-filter-btn ${activeFilter === cat.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.key)}
            >
              <span className="cat-icon">{cat.icon}</span>
              <span className="cat-label">{cat.label}</span>
              {cat.key === 'All 18 Works' && (
                <span className="museum-count-badge">18</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Catalogue Status Bar */}
      <div className="museum-status-bar" style={{ justifyContent: 'center', textAlign: 'center' }}>
        <span className="status-plate-count">
          SHOWING <strong>{filteredPhotos.length}</strong> OF <strong>{photos.length}</strong> KEEPSAKE POLAROIDS
        </span>
      </div>

      {/* Vintage Keepsake Polaroid Grid (All 18 Photos) */}
      <div className="vintage-keepsake-grid">
        {filteredPhotos.map((photo, idx) => (
          <div
            key={photo.id}
            className="vintage-polaroid-frame"
            onClick={() => onOpenLightbox(photo)}
            style={{
              transform: `rotate(${((idx % 7) - 3) * 1.3}deg)`
            }}
          >
            <div className="polaroid-pin-accent">
              <span className="pin-pearl" />
            </div>
            
            <div className="polaroid-photo-inner">
              <img 
                src={photo.src} 
                onError={(e) => { if (photo.altSrc) e.currentTarget.src = photo.altSrc; }}
                alt={photo.title}
                className="vintage-polaroid-img"
                loading="lazy"
              />
              <div className="polaroid-hover-lens-badge">
                <Maximize2 size={16} />
              </div>
            </div>

            <div className="polaroid-caption-panel">
              <div className="polaroid-roman-tag">
                PLATE {toRoman(photo.id)} • {photo.category}
              </div>
              <h3 className="polaroid-photo-name">{photo.title}</h3>
              <p className="polaroid-cursive-text">"{photo.annotation}"</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
