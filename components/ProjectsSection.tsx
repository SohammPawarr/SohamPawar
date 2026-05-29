'use client';
import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'TaxKar',
    link: 'https://github.com/SohammPawarr/taxkar',
    tags: ['Python (Flask)', 'Financial Calc', 'Responsive'],
    image: '/assets/taxkar.png',
    summary: 'A Python-based web application providing tax, forex, and salary calculations with a responsive interface.'
  },
  {
    title: 'Hemisphere',
    link: 'https://github.com/SohammPawarr/hemisphere',
    tags: ['Flutter', 'Dart', 'Firebase', 'TFLite'],
    image: '/assets/hemisphere.png',
    summary: 'A full-stack Flutter mobile app enhancing neighborhood safety, civic engagement, and environmental tracking.'
  },
  {
    title: 'DocClinic',
    link: 'https://github.com/SohammPawarr/DocClinic',
    tags: ['React.js', 'Express.js', 'Node.js'],
    image: '/assets/docclinic.png',
    summary: 'A full-stack web application for a clinic with online appointment booking and patient management.'
  }
];

export default function ProjectsSection() {
  const container = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    gsap.to('.project-char', {
      opacity: 1,
      y: 0,
      stagger: 0.05,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 85%',
      }
    });
  }, { scope: container });

  return (
    <section id="projects" ref={container} className="relative z-10 w-full bg-[#1A1A1A] text-white pt-10 pb-10 md:pb-16">
      <div className="max-w-[90rem] mx-auto px-6 md:px-16 flex flex-col">
        {/* Centered Title with Character Spans for Typing Animation */}
        <div className="flex justify-center w-full mb-10">
          <h2 ref={titleRef} className="font-formula font-bold text-[12vw] md:text-[5vw] leading-[0.9] tracking-normal uppercase text-[#F6F1DF] text-center flex" style={{ transform: 'scaleY(1.1)' }}>
            {'Projects'.split('').map((char, i) => (
              <span key={i} className="opacity-0 inline-block project-char translate-y-4">
                {char}
              </span>
            ))}
          </h2>
        </div>

        <div className="flex flex-col border-t border-zinc-700">
          {projects.map((proj, idx) => (
            <a 
              key={idx} 
              href={proj.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block relative py-8 md:py-12 border-b border-zinc-700 cursor-pointer overflow-visible"
            >
              {/* Image Frame rising on hover */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 md:left-auto md:right-[10%] md:translate-x-0 w-[90vw] max-w-[320px] md:max-w-none md:w-[480px] aspect-video md:h-[300px] pointer-events-none opacity-0 translate-y-12 scale-95 group-active:opacity-100 group-active:-translate-y-1/2 group-active:scale-100 group-active:-rotate-3 group-hover:opacity-100 group-hover:-translate-y-1/2 group-hover:scale-100 group-hover:-rotate-3 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-50 p-2 md:p-3 bg-white shadow-[0_30px_60px_rgba(0,0,0,0.6)] origin-bottom">
                <div className="relative w-full h-full overflow-hidden border border-zinc-200">
                  <Image 
                    src={proj.image} 
                    alt={proj.title} 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center items-start relative z-10 w-full pl-0 md:pl-12">
                <h3 className="flex items-center font-formula font-bold text-[11vw] sm:text-5xl md:text-5xl text-[#F6F1DF] uppercase transition-colors duration-300 group-active:text-[#FF5A36] group-hover:text-[#FF5A36] leading-[0.9]" style={{ transform: 'scaleY(1.1)' }}>
                  <span className="absolute left-[-2rem] md:static inline-block -rotate-45 md:mr-4 opacity-0 md:-translate-x-4 md:translate-y-4 transition-all duration-300 group-active:opacity-100 group-hover:opacity-100 md:group-hover:translate-x-0 md:group-hover:translate-y-0 text-[#8F75BA] hidden md:inline-block">
                    &#x2794;
                  </span>
                  {proj.title}
                </h3>
                <p className="text-zinc-400 text-sm md:text-base mt-6 max-w-2xl font-medium leading-relaxed transition-colors duration-300 group-hover:text-zinc-300">
                  {proj.summary}
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {proj.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className={`px-3 py-1 font-medium text-xs md:text-sm rounded-sm shadow-sm transition-colors duration-300 ${
                        i === 0 ? 'bg-[#5B3EAD] text-white' : 'bg-[#111111] text-zinc-200 group-hover:bg-[#222222]'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
