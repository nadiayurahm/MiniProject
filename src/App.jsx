import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import Scene01Greeting from './components/scenes/Scene01Greeting';
import Scene02Reveal from './components/scenes/Scene02Reveal';
import Scene03Info from './components/scenes/Scene03Info';
import Scene04OotdRsvp from './components/scenes/Scene04OotdRsvp';
import SceneDecline from './components/scenes/SceneDecline';
import { EVENT_DATA } from './data/eventData';

export default function App() {
  const [currentScene, setCurrentScene] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sceneWrapperRef = useRef(null);

  // Transition handler with GSAP
  const goToScene = (targetScene) => {
    if (targetScene === currentScene || isTransitioning) return;
    if (targetScene < 1 || targetScene > 5) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setCurrentScene(targetScene);
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    setIsTransitioning(true);

    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentScene(targetScene);
        window.scrollTo({ top: 0, behavior: 'auto' });

        // Fade in new scene
        gsap.fromTo(
          sceneWrapperRef.current,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
            ease: 'power2.out',
            onComplete: () => {
              setIsTransitioning(false);
            }
          }
        );
      }
    });

    // Fade out current scene
    tl.to(sceneWrapperRef.current, {
      opacity: 0,
      y: -15,
      duration: 0.25,
      ease: 'power2.in'
    });
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Background Graphic Grid & Halftone Pattern */}
      <div className="bg-street-grid" aria-hidden="true" />
      <div className="bg-halftone-dots" aria-hidden="true" />

      {/* Main Scene Content Container */}
      <main ref={sceneWrapperRef} style={{ flex: 1, position: 'relative', zIndex: 1 }}>
        {currentScene === 1 && (
          <Scene01Greeting
            onNext={() => goToScene(2)}
            eventData={EVENT_DATA}
          />
        )}
        {currentScene === 2 && (
          <Scene02Reveal
            onNext={() => goToScene(3)}
            onDecline={() => goToScene(5)}
            onPrev={() => goToScene(1)}
            eventData={EVENT_DATA}
          />
        )}
        {currentScene === 3 && (
          <Scene03Info
            onNext={() => goToScene(4)}
            onPrev={() => goToScene(2)}
            eventData={EVENT_DATA}
          />
        )}
        {currentScene === 4 && (
          <Scene04OotdRsvp
            onPrev={() => goToScene(3)}
            eventData={EVENT_DATA}
          />
        )}
        {currentScene === 5 && (
          <SceneDecline />
        )}
      </main>

      {/* Footer */}
      <footer
        style={{
          borderTop: '2px solid rgba(220, 217, 226, 0.2)',
          backgroundColor: 'rgba(10, 17, 40, 0.96)',
          padding: '16px 20px',
          textAlign: 'center',
          fontSize: '0.78rem',
          color: 'var(--color-metallic-silver)',
          fontFamily: 'monospace',
          position: 'relative',
          zIndex: 10
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <span>© 2026 {EVENT_DATA.eventName}</span>
          <span>•</span>
          <span>cepecial dari cantikna mamas</span>
        </div>
      </footer>
    </div>
  );
}
