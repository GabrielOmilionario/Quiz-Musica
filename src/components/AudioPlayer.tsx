"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2 } from "lucide-react";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  // Using a short 30s dummy logic since we don't have actual audio
  
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + (100 / 30); // 30 seconds total
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <div className="player-container text-center">
      <div style={{ display: 'inline-block', padding: '0.25rem 0.75rem', background: 'rgba(226, 192, 115, 0.1)', color: 'var(--accent-gold)', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 600, marginBottom: '1rem', letterSpacing: '0.05em' }}>
        PRÉVIA PERSONALIZADA
      </div>
      
      <p style={{ fontSize: '0.875rem', opacity: 0.7, marginBottom: '1.5rem' }}>
        Criada exclusivamente a partir da sua história.
      </p>
      
      {/* Mocked Waveform Visualizer */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3px', height: '60px', marginBottom: '1.5rem', opacity: isPlaying ? 1 : 0.5, transition: 'opacity 0.3s' }}>
        {Array.from({ length: 30 }).map((_, i) => (
          <div 
            key={i} 
            style={{ 
              width: '4px', 
              background: i < (progress / 100) * 30 ? 'var(--accent-gold)' : 'var(--card-border)', 
              height: isPlaying ? `${Math.random() * 40 + 10}px` : '10px',
              borderRadius: 'var(--radius-full)',
              transition: 'height 0.2s ease, background 0.3s'
            }} 
          />
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <button 
          onClick={togglePlay}
          style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--accent-gold)', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} style={{ marginLeft: '4px' }} />}
        </button>
        
        <div style={{ flex: 1, margin: '0 1rem', height: '6px', background: 'var(--card-border)', borderRadius: 'var(--radius-full)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: `${progress}%`, background: 'var(--accent-gold)' }}></div>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', opacity: 0.7 }}>
          <Volume2 size={20} />
        </div>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', opacity: 0.6 }}>
        <span>0:{Math.floor(progress * 0.3).toString().padStart(2, '0')}</span>
        <span>0:30</span>
      </div>
    </div>
  );
}
