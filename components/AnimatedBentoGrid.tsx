'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AnimatedBentoGrid({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const cards = gsap.utils.toArray('.bento-card') as HTMLElement[];

    gsap.from(cards, {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      ease: 'power3.out',
      duration: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="grid w-full max-w-6xl grid-cols-1 gap-6 p-6 md:grid-cols-4 md:auto-rows-[300px]">
      {children}
    </div>
  );
}
