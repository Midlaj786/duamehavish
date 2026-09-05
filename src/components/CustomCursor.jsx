import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Check if mouse is over interactive element
      const target = e.target;
      const isInteractive = target.closest('a, button, .gallery-card, .polaroid-card, .filmstrip-frame, .image-reveal-wrapper, .lightbox-thumb');
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div 
        className="custom-cursor-dot"
        style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
      />
      <div 
        className={`custom-cursor-ring ${isHovered ? 'hovered' : ''}`}
        style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
      />
    </>
  );
}
