'use client';
import { FaTwitter, FaLinkedinIn, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section id="contact" className="relative w-full bg-[#1A1A1A] text-white pt-4 pb-16 md:pt-8 md:pb-20 flex flex-col items-center justify-center overflow-hidden">

      {/* Title with hover effect */}
      <div className="group relative cursor-pointer flex items-center justify-center mb-8 md:mb-12 w-full max-w-5xl mx-auto py-2 md:py-4">
        <h2 className="font-formula font-bold text-[10vw] sm:text-[11vw] md:text-[8vw] tracking-[0.05em] leading-none uppercase text-[#FF5A36] group-hover:text-[#FFD700] transition-colors duration-500 z-20 whitespace-nowrap" style={{ transform: 'scaleY(1.1)' }}>
          Get In Touch
        </h2>

        {/* Paper Plane (Hover state) flying through */}
        <div className="absolute left-[-20%] md:left-[-10%] top-[80%] opacity-0 group-hover:opacity-100 group-hover:left-[85%] md:group-hover:left-[82%] group-hover:top-[-10%] md:group-hover:top-[-5%] transition-all duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)] text-white z-30 scale-50 group-hover:scale-75 md:group-hover:scale-100 drop-shadow-2xl rotate-45 group-hover:rotate-12 pointer-events-none">
          <svg viewBox="0 0 24 24" className="w-16 h-16 md:w-32 md:h-32 drop-shadow-xl" style={{ filter: 'drop-shadow(0 20px 20px rgba(0,0,0,0.5))' }}>
            <path fill="#F8FAFC" d="M1.9 11L21 2 12.8 21.8a1 1 0 01-1.8.1L8 14z" />
            <path fill="#CBD5E1" d="M8 14l13-12-8.5 11z" />
            <path fill="#94A3B8" d="M8 14v5.5a.5.5 0 00.9.3l2.6-2.8z" />
          </svg>
        </div>
      </div>

      {/* Paragraph with inline icons */}
      <div className="font-formula font-bold text-[5vw] sm:text-[4vw] md:text-[2.5vw] leading-[1.8] md:leading-[1.5] text-center text-[#c2c2c2] max-w-[80rem] px-4 md:px-10 uppercase tracking-[0.08em]" style={{ transform: 'scaleY(1.1)' }}>
        
        <p className="inline">
          I spend most of my time coding and shipping projects on{' '}
          <a href="https://github.com/SohammPawarr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-8 h-8 md:w-14 md:h-14 bg-[#24292e] text-white rounded-lg md:rounded-xl rotate-6 hover:scale-110 hover:rotate-12 transition-transform drop-shadow-lg mx-1 align-middle mb-1 md:mb-2">
            <FaGithub className="text-lg md:text-3xl" />
          </a>
          . Then I network and look for new opportunities on{' '}
          <a href="https://www.linkedin.com/in/sohammpawarr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-8 h-8 md:w-14 md:h-14 bg-[#0077b5] text-white rounded-lg md:rounded-xl -rotate-3 hover:scale-110 hover:-rotate-12 transition-transform drop-shadow-lg mx-1 align-middle mb-1 md:mb-2">
            <FaLinkedinIn className="text-lg md:text-3xl" />
          </a>
          {' '}and{' '}
          <a href="https://x.com/SohammPawar" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-8 h-8 md:w-14 md:h-14 bg-[#1DA1F2] text-white rounded-lg md:rounded-xl rotate-3 hover:scale-110 hover:rotate-12 transition-transform drop-shadow-lg mx-1 align-middle mb-1 md:mb-2">
            <FaTwitter className="text-lg md:text-3xl" />
          </a>
          . When taking a break, I'm probably scrolling on{' '}
          <a href="https://www.instagram.com/fr.sohaamm/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-8 h-8 md:w-14 md:h-14 text-white rounded-lg md:rounded-xl -rotate-6 hover:scale-110 hover:-rotate-12 transition-transform drop-shadow-lg mx-1 align-middle mb-1 md:mb-2" style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}>
            <FaInstagram className="text-lg md:text-3xl" />
          </a>
          . And you can always drop me an email at{' '}
          <a href="mailto:soham2005pawar@gmail.com" className="inline-flex items-center justify-center w-8 h-8 md:w-14 md:h-14 bg-[#EA4335] text-white rounded-lg md:rounded-xl rotate-6 hover:scale-110 hover:rotate-12 transition-transform drop-shadow-lg mx-1 align-middle mb-1 md:mb-2">
            <FaEnvelope className="text-lg md:text-3xl" />
          </a>
          {' '}to say hi!
        </p>

      </div>
    </section>
  );
}
