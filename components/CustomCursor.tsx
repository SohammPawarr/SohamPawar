'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Set initial position out of screen
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power3.out',
      });
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, { scale: 2, backgroundColor: 'rgba(255,255,255,0.1)', duration: 0.3 });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, { scale: 1, backgroundColor: 'rgba(255,255,255,1)', duration: 0.3 });
    };

    window.addEventListener('mousemove', moveCursor);

    // Attach hover effects to all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, [role="button"], .bento-card');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter as EventListener);
      el.addEventListener('mouseleave', handleMouseLeave as EventListener);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter as EventListener);
        el.removeEventListener('mouseleave', handleMouseLeave as EventListener);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-4 w-4 rounded-full bg-white mix-blend-difference"
      style={{
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
}
