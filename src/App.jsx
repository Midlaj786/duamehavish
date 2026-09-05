import React, { useState } from 'react';
import { photos } from './data/photos';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StorybookIntro from './components/StorybookIntro';
import FeaturedStory from './components/FeaturedStory';
import HorizontalScrollGallery from './components/HorizontalScrollGallery';
import ChildhoodMemoriesGrid from './components/ChildhoodMemoriesGrid';
import CinematicBanner from './components/CinematicBanner';
import Footer from './components/Footer';
import LightboxModal from './components/LightboxModal';
import AmbientCanvas from './components/AmbientCanvas';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [activePhoto, setActivePhoto] = useState(null);

  const handleOpenLightbox = (photo) => {
    setActivePhoto(photo);
  };

  const handleCloseLightbox = () => {
    setActivePhoto(null);
  };

  const handleNavigateLightbox = (direction) => {
    if (!activePhoto) return;
    const currentIndex = photos.findIndex(p => p.id === activePhoto.id);
    let nextIndex;
    if (direction === 'next') {
      nextIndex = (currentIndex + 1) % photos.length;
    } else {
      nextIndex = (currentIndex - 1 + photos.length) % photos.length;
    }
    setActivePhoto(photos[nextIndex]);
  };

  const heroPhoto = photos.find(p => p.id === 15) || photos[14];
  const storybookPhoto = photos.find(p => p.id === 2) || photos[1];
  const finalePhoto = photos.find(p => p.id === 17) || photos[photos.length - 1];

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Background Film Grain Overlay */}
      <div className="grain-overlay" />

      {/* Interactive Magnetic Custom Cursor */}
      <CustomCursor />

      {/* Background Sparkles & Starlets Canvas */}
      <AmbientCanvas />

      {/* Glass Header Navigation */}
      <Navbar />

      {/* Main Visual Sections */}
      <main>
        {/* Fullscreen Hero */}
        <Hero 
          photos={photos}
          heroPhoto={heroPhoto} 
          onOpenLightbox={handleOpenLightbox} 
        />

        {/* Chapter 01: Storybook Introduction */}
        <StorybookIntro 
          photo={storybookPhoto} 
          onOpenLightbox={handleOpenLightbox} 
        />

        {/* Chapter 02: Featured Asymmetrical Compositions */}
        <FeaturedStory 
          photos={photos} 
          onOpenLightbox={handleOpenLightbox} 
        />

        {/* Chapter 03: Moments in Motion (35mm Film Strip Reel) */}
        <HorizontalScrollGallery 
          photos={photos} 
          onOpenLightbox={handleOpenLightbox} 
        />

        {/* Chapter 04: Filterable Storybook Memory Grid */}
        <ChildhoodMemoriesGrid 
          photos={photos} 
          onOpenLightbox={handleOpenLightbox} 
        />

        {/* Chapter 05: Cinematic Parallax Finale */}
        <CinematicBanner 
          photo={finalePhoto} 
          onOpenLightbox={handleOpenLightbox} 
        />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Interactive Fullscreen Lightbox Modal */}
      <LightboxModal 
        activePhoto={activePhoto}
        allPhotos={photos}
        onClose={handleCloseLightbox}
        onNavigate={handleNavigateLightbox}
        onSelectPhoto={handleOpenLightbox}
      />
    </div>
  );
}
