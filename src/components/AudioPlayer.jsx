import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Sparkles } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const audioCtxRef = useRef(null);
  const isPlayingRef = useRef(false);
  const timerRef = useRef(null);

  const BASE = import.meta.env.BASE_URL ? (import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`) : './';

  const toggleAudio = () => {
    if (isPlaying) {
      stopAudio();
      setIsPlaying(false);
      isPlayingRef.current = false;
    } else {
      playAudio();
      setIsPlaying(true);
      isPlayingRef.current = true;
    }
  };

  const playAudio = () => {
    // Try to play MP3 if available in public folder
    const audio = audioRef.current;
    if (audio && audio.src) {
      audio.volume = 0.5;
      audio.play().then(() => {
        // MP3 played successfully
      }).catch(() => {
        // Fallback to high-quality ambient lullaby synthesizer
        startSynthesizedLullaby();
      });
    } else {
      startSynthesizedLullaby();
    }
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    stopSynthesizedLullaby();
  };

  // High Quality Dreamy Music Box Synthesizer
  const startSynthesizedLullaby = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      // Master Gain and Warm Filter
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.14, ctx.currentTime + 2.0);

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(700, ctx.currentTime);

      masterGain.connect(filter);
      filter.connect(ctx.destination);

      // Warm Background Ambient Pad Drone (Cmaj9)
      const padFreqs = [130.81, 164.81, 196.00, 246.94, 293.66]; // C3, E3, G3, B3, D4
      padFreqs.forEach((freq) => {
        const osc = ctx.createOscillator();
        const padGain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        
        padGain.gain.setValueAtTime(0.015, ctx.currentTime);
        osc.connect(padGain);
        padGain.connect(masterGain);
        osc.start();
      });

      // Lullaby Music Box Scale Notes (C Major / E Minor Dream)
      const lullabyScale = [
        261.63, // C4
        329.63, // E4
        392.00, // G4
        493.88, // B4
        523.25, // C5
        659.25, // E5
        783.99, // G5
        987.77, // B5
        1046.50 // C6
      ];

      let noteIndex = 0;

      const playMusicBoxNote = () => {
        if (!isPlayingRef.current || !audioCtxRef.current) return;

        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const noteGain = ctx.createGain();

        // Music Box Bell sound
        osc.type = 'triangle';
        const freq = lullabyScale[noteIndex % lullabyScale.length];
        osc.frequency.setValueAtTime(freq, now);

        noteGain.gain.setValueAtTime(0.001, now);
        noteGain.gain.linearRampToValueAtTime(0.08, now + 0.03);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

        osc.connect(noteGain);
        noteGain.connect(masterGain);

        osc.start(now);
        osc.stop(now + 2.0);

        // Pattern steps
        const patternStep = [0, 2, 4, 3, 5, 2, 6, 4, 7, 3, 1, 4];
        noteIndex = (noteIndex + 1) % patternStep.length;

        const nextDelay = 720 + Math.random() * 200;
        timerRef.current = setTimeout(playMusicBoxNote, nextDelay);
      };

      playMusicBoxNote();
    } catch (e) {
      console.warn('Web Audio error', e);
    }
  };

  const stopSynthesizedLullaby = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (audioCtxRef.current) {
      try {
        audioCtxRef.current.close();
      } catch (e) {
        // ignore
      }
    }
  };

  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center' }}>
      {/* Hidden native audio element for MP3 fallback */}
      <audio 
        ref={audioRef} 
        src={`${BASE}music.mp3`} 
        loop 
        preload="none" 
      />

      <button
        onClick={toggleAudio}
        className="audio-toggle-btn"
        aria-label={isPlaying ? 'Mute background lullaby' : 'Play dreamy background lullaby'}
        title={isPlaying ? 'Mute Music' : 'Play Dreamy Lullaby Music'}
      >
        <Music size={14} color={isPlaying ? 'var(--accent-gold)' : 'currentColor'} />
        {isPlaying ? <Volume2 size={15} /> : <VolumeX size={15} />}
        <span>{isPlaying ? 'Lullaby On' : 'Dreamy Music'}</span>
        <div className={`sound-wave ${isPlaying ? 'playing' : ''}`}>
          <span />
          <span />
          <span />
        </div>
      </button>
    </div>
  );
}
