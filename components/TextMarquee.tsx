'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function TextMarquee() {
  const container = useRef<HTMLDivElement>(null);
  const text1 = useRef<HTMLDivElement>(null);
  const text2 = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Top line moves left
    gsap.to(text1.current, {
      xPercent: -20,
      ease: 'none',
      scrollTrigger: {
        trigger: container.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });

    // Bottom line moves right
    gsap.to(text2.current, {
      xPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: container.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });
  }, { scope: container });

  const phrases1 = [
    "STAY HUNGRY. STAY FOOLISH.",
    "PUSH THE BOUNDARIES.",
    "NEVER SETTLE."
  ];
  const phrases2 = [
    "DREAM BIG.",
    "WORK HARD.",
    "MAKE IT HAPPEN.",
    "EMBRACE THE GRIND."
  ];

  return (
    <div ref={container} className="w-full overflow-hidden bg-[#1A1A1A] py-8 flex flex-col gap-4 relative z-10 cursor-default">
      <div 
        ref={text1} 
        className="whitespace-nowrap font-formula font-bold text-[9vw] md:text-[6vw] leading-none text-[#2A2A2A] uppercase tracking-[0.05em]"
        style={{ transform: 'scaleY(1.1) translateX(5%)' }}
      >
        {Array(6).fill(phrases1).flat().map((phrase, i) => (
          <span key={i} className="group">
            <span className="inline-block transition-colors duration-200 group-hover:text-[#FF5A36]">
              {phrase}
            </span>
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </div>
      <div 
        ref={text2} 
        className="whitespace-nowrap font-formula font-bold text-[9vw] md:text-[6vw] leading-none text-[#2A2A2A] uppercase tracking-[0.05em]"
        style={{ transform: 'scaleY(1.1) translateX(-30%)' }}
      >
        {Array(6).fill(phrases2).flat().map((phrase, i) => (
          <span key={i} className="group">
            <span className="inline-block transition-colors duration-200 group-hover:text-[#FF5A36]">
              {phrase}
            </span>
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
