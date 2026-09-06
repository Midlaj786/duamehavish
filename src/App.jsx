import React, { useState, useEffect } from 'react';
import { photos } from './data/photos';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StorybookIntro from './components/StorybookIntro';
import FloatingMemories from './components/FloatingMemories';
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

  // Clean initial URL hash if page was refreshed with #lightbox
  useEffect(() => {
    if (window.location.hash.includes('lightbox')) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, []);

  // Listen for browser / mobile back button (popstate)
  useEffect(() => {
    const handlePopState = (e) => {
      if (!window.location.hash.includes('lightbox')) {
        setActivePhoto(null);
      } else if (e.state?.photoId) {
        const found = photos.find(p => p.id === e.state.photoId);
        if (found) setActivePhoto(found);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleOpenLightbox = (photo) => {
    setActivePhoto(photo);
    if (!window.location.hash.includes('lightbox')) {
      window.history.pushState({ modal: 'lightbox', photoId: photo.id }, '', '#lightbox');
    } else {
      window.history.replaceState({ modal: 'lightbox', photoId: photo.id }, '', '#lightbox');
    }
  };

  const handleCloseLightbox = () => {
    if (window.location.hash.includes('lightbox')) {
      window.history.back();
    } else {
      setActivePhoto(null);
    }
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
    const nextPhoto = photos[nextIndex];
    setActivePhoto(nextPhoto);
    window.history.replaceState({ modal: 'lightbox', photoId: nextPhoto.id }, '', '#lightbox');
  };

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
        {/* Fullscreen Master Hero */}
        <Hero 
          photos={photos}
          onOpenLightbox={handleOpenLightbox} 
        />

        {/* Chapter 01: Storybook Introduction */}
        <StorybookIntro 
          photo={storybookPhoto} 
          onOpenLightbox={handleOpenLightbox} 
        />

        {/* Animated Keepsake: Floating Polaroids & Dynamic Motion Spotlight */}
        <FloatingMemories 
          photos={photos} 
          onOpenLightbox={handleOpenLightbox} 
        />

        {/* Chapter 02: Featured Asymmetrical Compositions */}
        <FeaturedStory 
          photos={photos} 
          onOpenLightbox={handleOpenLightbox} 
        />

        {/* Chapter 03: Moments in Motion (35mm Studio Reel) */}
        <HorizontalScrollGallery 
          photos={photos} 
          onOpenLightbox={handleOpenLightbox} 
        />

        {/* Chapter 04: The Complete 18-Photo Archive Grid */}
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
