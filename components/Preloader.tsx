'use client';
import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Lock body scroll while loading
    document.body.style.overflow = 'hidden';

    // Set up GSAP timeline
    const tl = gsap.timeline({
      onComplete: () => {
        setIsLoading(false);
        document.body.style.overflow = '';
      }
    });

    // Animate the progress bar width over 1.8 seconds
    tl.to(progressBarRef.current, {
      width: '100%',
      duration: 1.8,
      ease: 'power3.inOut'
    })
    // Slide the entire preloader up out of the viewport
    .to(preloaderRef.current, {
      y: '-100%',
      duration: 0.8,
      ease: 'power4.inOut',
      delay: 0.2
    });

    // Animate dots infinitely during load
    gsap.to('.loading-dot', {
      opacity: 0.2,
      duration: 0.4,
      yoyo: true,
      repeat: -1,
      stagger: 0.15,
      ease: 'power1.inOut'
    });

    return () => {
      document.body.style.overflow = '';
      tl.kill();
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      ref={preloaderRef}
      className="fixed inset-0 z-[9999] bg-[#161616] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Top Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1.5 md:h-2 bg-zinc-800">
        <div ref={progressBarRef} className="h-full bg-[#FF5A36] w-0"></div>
      </div>

      {/* Top Badge dropping down */}
      <div className="absolute top-0 flex items-end justify-center w-24 h-28 md:w-32 md:h-36 bg-[#222222] pb-6">
        <span className="text-[#FF5A36] font-formula font-bold text-4xl md:text-5xl uppercase tracking-wider" style={{ transform: 'scaleY(1.2)' }}>
          SSP
        </span>
      </div>

      {/* Center Text & Dots */}
      <div className="flex flex-col items-center gap-10 md:gap-14 px-4 text-center mt-20 md:mt-24">
        <h1 className="font-formula font-bold text-[9vw] sm:text-[7vw] md:text-[5.5vw] leading-[1] text-[#A3A3A3] uppercase tracking-normal" style={{ transform: 'scaleY(1.1)' }}>
          OPENING<br/>PORTFOLIO
        </h1>

        {/* Loading Dots */}
        <div className="flex items-center gap-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="loading-dot w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#FF5A36]"></div>
          ))}
        </div>
      </div>
    </div>
  );
}
