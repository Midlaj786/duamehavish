import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const isPlayingRef = useRef(false);
  const timerRef = useRef(null);

  const toggleAudio = () => {
    if (isPlaying) {
      stopAmbientSound();
      setIsPlaying(false);
      isPlayingRef.current = false;
    } else {
      startAmbientSound();
      setIsPlaying(true);
      isPlayingRef.current = true;
    }
  };

  const startAmbientSound = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      // Master Gain and Reverb Filter
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 2.5);

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(650, ctx.currentTime);

      masterGain.connect(filter);
      filter.connect(ctx.destination);

      // Warm Background Ambient Pad Drone (Cmaj9 Warmth)
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

      // Lullaby Music Box Arpeggiator Melody Notes (C Major / E Minor Pentatonic Dream)
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

        // Music Box Tine sound (triangle wave with fast attack & sweet bell decay)
        osc.type = 'triangle';
        const freq = lullabyScale[noteIndex % lullabyScale.length];
        osc.frequency.setValueAtTime(freq, now);

        noteGain.gain.setValueAtTime(0.001, now);
        noteGain.gain.linearRampToValueAtTime(0.08, now + 0.04);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

        osc.connect(noteGain);
        noteGain.connect(masterGain);

        osc.start(now);
        osc.stop(now + 2.0);

        // Arpeggiator pattern sequence
        const patternStep = [0, 2, 4, 3, 5, 2, 6, 4, 7, 3, 1, 4];
        noteIndex = (noteIndex + 1) % patternStep.length;

        // Schedule next note with relaxing rhythm pulse (around 800ms per note)
        const nextDelay = 750 + Math.random() * 200;
        timerRef.current = setTimeout(playMusicBoxNote, nextDelay);
      };

      // Start lullaby melody loop
      playMusicBoxNote();

    } catch (e) {
      console.warn('Web Audio API error', e);
    }
  };

  const stopAmbientSound = () => {
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
      stopAmbientSound();
    };
  }, []);

  return (
    <button
      onClick={toggleAudio}
      className="audio-toggle-btn"
      aria-label={isPlaying ? 'Mute lullaby music box' : 'Play dreamy lullaby music box'}
      title={isPlaying ? 'Mute Music' : 'Play Dreamy Music Box Lullaby'}
    >
      <Music size={15} color={isPlaying ? 'var(--accent-gold)' : 'currentColor'} />
      {isPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}
      <span style={{ fontSize: '0.82rem', letterSpacing: '0.06em', fontWeight: '500' }}>
        {isPlaying ? 'Lullaby On' : 'Dreamy Music'}
      </span>
      <div className={`sound-wave ${isPlaying ? 'playing' : ''}`}>
        <span />
        <span />
        <span />
      </div>
    </button>
  );
}
