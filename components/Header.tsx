'use client';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 flex flex-col md:flex-row items-center justify-between px-6 py-6 md:px-12 mix-blend-difference gap-4 md:gap-0">
      {/* Expanding Initials Logo */}
      <div className="group flex cursor-pointer font-formula font-bold text-[#FF5A36] text-3xl md:text-4xl uppercase mt-1">
        <div className="flex">
          <span>S</span>
          <span className="max-w-0 opacity-0 md:group-hover:max-w-[150px] md:group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden whitespace-nowrap">
            oham&nbsp;
          </span>
        </div>
        <div className="flex">
          <span>S</span>
          <span className="max-w-0 opacity-0 md:group-hover:max-w-[50px] md:group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden whitespace-nowrap">
            &nbsp;
          </span>
        </div>
        <div className="flex">
          <span>P</span>
          <span className="max-w-0 opacity-0 md:group-hover:max-w-[150px] md:group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden whitespace-nowrap">
            awar
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex items-center justify-center flex-wrap gap-4 md:gap-10 text-zinc-300 text-xs sm:text-sm md:text-base font-medium tracking-wide w-full md:w-auto">
        <Link href="#skills" className="hover:text-[#FF5A36] transition-colors">SKILLS & EXPERIENCE</Link>
        <Link href="#projects" className="hover:text-[#FF5A36] transition-colors">PROJECTS</Link>
        <Link href="#contact" className="hover:text-[#FF5A36] transition-colors">CONTACT</Link>
      </nav>
    </header>
  );
}
