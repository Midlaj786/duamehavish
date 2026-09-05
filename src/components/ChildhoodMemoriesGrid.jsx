import React, { useState } from 'react';
import { Sparkles, Maximize2 } from 'lucide-react';

export default function ChildhoodMemoriesGrid({ photos, onOpenLightbox }) {
  const [activeFilter, setActiveFilter] = useState('All Stories');
  const gridPhotos = photos.filter(p => p.id >= 10 && p.id <= 16);

  const categories = ['All Stories', 'Portraits', 'Storybook', 'Candid'];

  const filteredPhotos = activeFilter === 'All Stories'
    ? gridPhotos
    : gridPhotos.filter(p => p.category === activeFilter);

  return (
    <section id="gallery" className="gallery-section">
      <div className="editorial-header" style={{ marginBottom: '3rem' }}>
        <div className="section-number">Chapter 04</div>
        <h2 className="section-title">
          The Childhood Memory Collection
        </h2>
        <p className="section-subtitle">
          Explore individual visual stories captured across sunlight, quiet gazes, and unfiltered smiles.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="gallery-filter-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Asymmetrical Grid */}
      <div className="masonry-grid">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            className="gallery-card"
            onClick={() => onOpenLightbox(photo)}
          >
            <div className="gallery-card-img-wrapper" style={{ aspectRatio: photo.aspect || '0.67' }}>
              <img 
                src={photo.src} 
                alt={photo.title} 
                className="gallery-card-img"
              />
            </div>
            
            <div className="gallery-card-overlay">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="gallery-card-meta">{photo.category} • {photo.date}</span>
                <Maximize2 size={16} />
              </div>
              <h3 className="gallery-card-title">{photo.title}</h3>
              <p className="handwritten" style={{ color: 'var(--accent-gold)', fontSize: '1.2rem' }}>
                {photo.annotation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
