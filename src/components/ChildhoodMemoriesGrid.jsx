import React, { useState } from 'react';
import { Sparkles, Maximize2, LayoutGrid, Grid3X3, BookOpen, Search, Eye, Award } from 'lucide-react';

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
  const [searchQuery, setSearchQuery] = useState('');
  const [viewLayout, setViewLayout] = useState('museum'); // 'museum' | 'album' | 'polaroid'

  const categories = [
    { label: 'All 18 Works', key: 'All 18 Works', icon: '✦' },
    { label: 'Portraits', key: 'Portraits', icon: '👑' },
    { label: 'Storybook', key: 'Storybook', icon: '📖' },
    { label: 'Candid Joy', key: 'Candid', icon: '🌿' },
    { label: 'Golden Light', key: 'Golden Light', icon: '☀️' }
  ];

  const filteredPhotos = photos.filter((photo) => {
    const matchesCategory = 
      activeFilter === 'All 18 Works' || photo.category === activeFilter;
    
    const matchesSearch = 
      photo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      photo.annotation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      photo.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      photo.date.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
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
          The 18 Masterpiece Photographic Plates
        </h2>

        <div className="classic-filigree-divider">
          <span className="line" />
          <span className="diamond">❖</span>
          <span className="line" />
        </div>

        <p className="museum-section-subtitle">
          A retrospective exhibition celebrating the innocence, timeless grace, and unscripted smiles of Dua Mehavish — preserved on archival passe-partout plates.
        </p>
      </div>

      {/* Museum Exhibition Navigation Bar */}
      <div className="museum-controls-bar">
        {/* Category Seals */}
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

        {/* Search & Curated Layout Switchers */}
        <div className="museum-extra-controls">
          <div className="museum-search-box">
            <Search size={15} color="var(--accent-gold-dark)" />
            <input 
              type="text"
              placeholder="Search plates & moments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="museum-search-input"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="museum-clear-btn"
              >
                ✕
              </button>
            )}
          </div>

          <div className="museum-layout-switcher">
            <button
              className={`layout-switch-btn ${viewLayout === 'museum' ? 'active' : ''}`}
              onClick={() => setViewLayout('museum')}
              title="Archival Passe-Partout Gallery"
            >
              <LayoutGrid size={16} />
              <span className="layout-name">Gallery</span>
            </button>

            <button
              className={`layout-switch-btn ${viewLayout === 'album' ? 'active' : ''}`}
              onClick={() => setViewLayout('album')}
              title="Linen Storybook Spread"
            >
              <BookOpen size={16} />
              <span className="layout-name">Album</span>
            </button>

            <button
              className={`layout-switch-btn ${viewLayout === 'polaroid' ? 'active' : ''}`}
              onClick={() => setViewLayout('polaroid')}
              title="Vintage Keepsake Grid"
            >
              <Grid3X3 size={16} />
              <span className="layout-name">Polaroid</span>
            </button>
          </div>
        </div>
      </div>

      {/* Exhibition Count Indicator */}
      <div className="museum-status-bar">
        <div className="status-plate-count">
          <span>CATALOGUE PLATES: <strong>{filteredPhotos.length}</strong> / <strong>{photos.length}</strong> AVAILABLE</span>
        </div>
        <div className="status-curator-note">
          <span>Click any plate for high-resolution inspection</span>
        </div>
      </div>

      {/* =========================================================================
          VIEW 1: ARCHIVAL PASSE-PARTOUT GALLERY (DEFAULT FINE ART PRESENTATION)
          ========================================================================= */}
      {viewLayout === 'museum' && (
        <div className="museum-plates-grid">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="museum-plate-card"
              onClick={() => onOpenLightbox(photo)}
            >
              {/* Passe-Partout Mat Frame with Gold Filigree Line */}
              <div className="passe-partout-frame">
                <div className="inner-matting-box">
                  <div className="plate-img-wrapper" style={{ aspectRatio: photo.aspect || '0.67' }}>
                    <img 
                      src={photo.src} 
                      onError={(e) => { if (photo.altSrc) e.currentTarget.src = photo.altSrc; }}
                      alt={photo.title} 
                      className="plate-img"
                      loading="lazy"
                    />
                    
                    {/* Hover Gold Lens Overlay */}
                    <div className="plate-hover-lens">
                      <div className="lens-brass-ring">
                        <Maximize2 size={18} color="var(--accent-gold)" />
                        <span>Inspect Plate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Museum Gallery Plaque / Editorial Typography */}
              <div className="museum-plaque">
                <div className="plaque-top-meta">
                  <span className="plate-number">PLATE {toRoman(photo.id)}</span>
                  <span className="plate-dot">•</span>
                  <span className="plate-category">{photo.category}</span>
                  <span className="plate-dot">•</span>
                  <span className="plate-date">{photo.date}</span>
                </div>

                <h3 className="plate-title">{photo.title}</h3>

                <div className="plate-annotation-box">
                  <span className="plate-quote-mark">“</span>
                  <p className="plate-handwritten">{photo.annotation}</p>
                  <span className="plate-quote-mark">”</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* =========================================================================
          VIEW 2: LINEN STORYBOOK ALBUM SPREAD
          ========================================================================= */}
      {viewLayout === 'album' && (
        <div className="album-spread-grid">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              className="album-page-card"
              onClick={() => onOpenLightbox(photo)}
            >
              <div className="album-photo-mount">
                {/* Brass Photo Corner Accents */}
                <div className="photo-corner corner-tl" />
                <div className="photo-corner corner-tr" />
                <div className="photo-corner corner-bl" />
                <div className="photo-corner corner-br" />

                <div className="album-photo-box" style={{ aspectRatio: photo.aspect || '0.67' }}>
                  <img 
                    src={photo.src} 
                    onError={(e) => { if (photo.altSrc) e.currentTarget.src = photo.altSrc; }}
                    alt={photo.title}
                    className="album-photo-img"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="album-text-panel">
                <div className="album-plate-tag">Folio {toRoman(photo.id)} — {photo.subtitle}</div>
                <h3 className="album-photo-title">{photo.title}</h3>
                <p className="album-handwritten-note">"{photo.annotation}"</p>
                <div className="album-date-badge">{photo.date}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* =========================================================================
          VIEW 3: VINTAGE KEEPSAKE POLAROID GRID
          ========================================================================= */}
      {viewLayout === 'polaroid' && (
        <div className="vintage-keepsake-grid">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              className="vintage-polaroid-frame"
              onClick={() => onOpenLightbox(photo)}
              style={{
                transform: `rotate(${((idx % 7) - 3) * 1.4}deg)`
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
              </div>

              <div className="polaroid-caption-panel">
                <div className="polaroid-roman-tag">PLATE {toRoman(photo.id)}</div>
                <div className="polaroid-photo-name">{photo.title}</div>
                <div className="polaroid-cursive-text">"{photo.annotation}"</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
