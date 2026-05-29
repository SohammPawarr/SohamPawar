'use client';
import { useState, useEffect } from 'react';
import { FaInstagram, FaLinkedinIn, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const [timeText, setTimeText] = useState("Its ... here in India.");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { 
        weekday: 'long', 
        hour: 'numeric', 
        minute: '2-digit', 
        hour12: true, 
        timeZone: 'Asia/Kolkata' 
      };
      setTimeText(`Its ${now.toLocaleString('en-US', options)} here in India.`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000); // update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative z-10 w-full bg-[#FF5A36] text-[#111111] px-6 md:px-16 pt-16 pb-12 font-sans">
       <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Bottom Left */}
          <div className="hidden md:flex flex-col gap-8 w-full lg:w-3/5">
             <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                {/* Circular Badge */}
                <div className="w-20 h-20 md:w-24 md:h-24 bg-[#111111] rounded-full flex shrink-0 items-center justify-center text-white p-2">
                   <div className="w-full h-full border-2 border-dashed border-[#FF5A36] rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
                      <span className="font-formula text-[0.6rem] md:text-xs text-center leading-none">NEXT.JS<br/>DEV</span>
                   </div>
                </div>
                {/* Built with text */}
                <div className="font-formula font-bold uppercase tracking-wide leading-[0.9]" style={{ transform: 'scaleY(1.1)' }}>
                   <div className="text-4xl md:text-5xl text-[#111111] mb-1">BUILT WITH NEXT.JS</div>
                   <div className="text-3xl md:text-4xl text-[#111111]/80">100% CODE <span className="mx-2 text-2xl">✦</span> 100% DESIGN</div>
                </div>
             </div>

             <div className="text-sm md:text-base font-medium text-[#111111]/80 flex flex-col gap-2">
                <p>Formula and Neue Montreal are used under the terms of free license for personal use.<br/>Copyright © Soham Pawar </p>
                <p className="mt-4 font-bold text-[#111111]">{timeText} <span className="mx-1">✱</span> On the main hustle!</p>
                <div className="flex flex-wrap items-center gap-2 md:gap-3 mt-2 font-bold text-[#111111]">
                   <span>Made by Soham Pawar From India with 🤍</span>
                </div>
             </div>
          </div>

          {/* Bottom Right */}
          <div className="flex flex-col items-start lg:items-end gap-6 w-full lg:w-2/5">
             <div className="flex flex-col items-start lg:items-end gap-3 font-medium text-lg md:text-xl text-[#111111]">
                <a href="#" className="hover:opacity-70 transition-opacity">About</a>
                <a href="#skills" className="hover:opacity-70 transition-opacity">Skills & Exp</a>
                <a href="#projects" className="hover:opacity-70 transition-opacity">Project</a>
                <a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a>
             </div>

             <a href="https://drive.google.com/file/d/1Ulvf6NubBhZTWBy8ISEnO60aSOiDbIjZ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="bg-[#111111] text-[#F6F1DF] font-formula font-bold text-xl md:text-2xl px-6 py-3 uppercase flex items-center justify-center gap-2 hover:bg-[#222] transition-colors rounded-sm shadow-xl mt-4" style={{ transform: 'scaleY(1.1)' }}>
                RESUME <span className="inline-block -rotate-45 ml-1">&#x2794;</span>
             </a>

             <div className="flex items-center gap-5 md:gap-6 mt-4">
                <a href="https://instagram.com/fr.sohaamm/" target="_blank" rel="noopener noreferrer" className="text-[#111111] hover:-translate-y-1 transition-transform"><FaInstagram className="text-2xl md:text-[28px]"/></a>
                <a href="https://linkedin.com/in/sohammpawarr" target="_blank" rel="noopener noreferrer" className="text-[#111111] hover:-translate-y-1 transition-transform"><FaLinkedinIn className="text-2xl md:text-[28px]"/></a>
                <a href="https://x.com/SohammPawar" target="_blank" rel="noopener noreferrer" className="text-[#111111] hover:-translate-y-1 transition-transform"><FaTwitter className="text-2xl md:text-[28px]"/></a>
                <a href="https://github.com/SohammPawarr" target="_blank" rel="noopener noreferrer" className="text-[#111111] hover:-translate-y-1 transition-transform"><FaGithub className="text-2xl md:text-[28px]"/></a>
                <a href="mailto:soham2005pawar@gmail.com" className="text-[#111111] hover:-translate-y-1 transition-transform"><FaEnvelope className="text-2xl md:text-[28px]"/></a>
             </div>
          </div>
       </div>
    </footer>
  );
}
