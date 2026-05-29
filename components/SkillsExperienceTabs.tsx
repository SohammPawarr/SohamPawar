'use client';

import { useState } from 'react';
import Image from 'next/image';
import Accordion from './Accordion';
import { FaPython, FaNodeJs, FaReact, FaFigma, FaGithub, FaDatabase } from 'react-icons/fa';
import { SiJavascript, SiC, SiMongodb, SiExpress, SiFlask, SiNextdotjs, SiDjango, SiFlutter, SiPycharm, SiCanva, SiAndroidstudio, SiFirebase } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

export default function SkillsExperienceTabs() {
  const [activeTab, setActiveTab] = useState<'SKILLS' | 'EXPERIENCE'>('SKILLS');

  return (
    <div className="w-full flex flex-col items-center md:items-start w-full max-w-2xl mx-auto md:mx-0">

      {/* Tab Switch */}
      <div className="flex items-center gap-4 mb-8 self-center md:self-start">
        <span
          onClick={() => setActiveTab('SKILLS')}
          className={`font-formula font-bold text-2xl md:text-3xl uppercase tracking-wide cursor-pointer transition-colors ${activeTab === 'SKILLS' ? 'text-[#FF5A36]' : 'text-zinc-600 hover:text-zinc-400'}`}
        >
          SKILLS
        </span>

        <button
          onClick={() => setActiveTab(activeTab === 'SKILLS' ? 'EXPERIENCE' : 'SKILLS')}
          className="w-20 h-10 bg-[#F6F1DF] rounded-full relative flex items-center px-1 cursor-pointer shadow-inner"
        >
          <div
            className={`w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${activeTab === 'EXPERIENCE' ? 'translate-x-10' : 'translate-x-0'}`}
          >
            {activeTab === 'SKILLS' ? (
              <span className="text-[#FF5A36] font-bold text-lg leading-none">←</span>
            ) : (
              <span className="text-zinc-300 font-bold text-lg leading-none border-2 border-zinc-200 rounded-full w-4 h-4"></span>
            )}
          </div>
        </button>

        <span
          onClick={() => setActiveTab('EXPERIENCE')}
          className={`font-formula font-bold text-2xl md:text-3xl uppercase tracking-wide cursor-pointer transition-colors ${activeTab === 'EXPERIENCE' ? 'text-[#F6F1DF]' : 'text-zinc-600 hover:text-zinc-400'}`}
        >
          EXPERIENCE
        </span>
      </div>

      {/* Content Area */}
      <div className="relative w-full overflow-visible min-h-[400px]">

        {/* SKILLS Content */}
        <div
          className={`w-full transition-all duration-700 ease-in-out ${activeTab === 'SKILLS' ? 'translate-x-0 opacity-100 relative z-10' : '-translate-x-16 opacity-0 absolute top-0 pointer-events-none'}`}
        >
          <Accordion items={[
            {
              title: "Languages",
              content: (
                <div className="flex flex-wrap gap-3 mt-2">
                  {[
                    { name: 'Python', icon: <FaPython /> },
                    { name: 'JavaScript', icon: <SiJavascript /> },
                    { name: 'SQL', icon: <FaDatabase /> },
                    { name: 'C', icon: <SiC /> }
                  ].map(lang => (
                    <span key={lang.name} className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-700 bg-zinc-800/50 text-[#F6F1DF] text-sm md:text-base tracking-wide">
                      <span className="text-[#FF5A36] text-lg">{lang.icon}</span> {lang.name}
                    </span>
                  ))}
                </div>
              )
            },
            {
              title: "Frameworks",
              content: (
                <div className="flex flex-wrap gap-3 mt-2">
                  {[
                    { name: 'Node.js', icon: <FaNodeJs /> },
                    { name: 'React.js', icon: <FaReact /> },
                    { name: 'SQL', icon: <FaDatabase /> },
                    { name: 'MongoDB', icon: <SiMongodb /> },
                    { name: 'Express.js', icon: <SiExpress /> },
                    { name: 'Flask', icon: <SiFlask /> },
                    { name: 'Next.js', icon: <SiNextdotjs /> },
                    { name: 'Django', icon: <SiDjango /> },
                    { name: 'Flutter', icon: <SiFlutter /> }
                  ].map(tech => (
                    <span key={tech.name} className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-700 bg-zinc-800/50 text-[#F6F1DF] text-sm md:text-base tracking-wide">
                      <span className="text-[#FF5A36] text-lg">{tech.icon}</span> {tech.name}
                    </span>
                  ))}
                </div>
              )
            },
            {
              title: "Developer Tools",
              content: (
                <div className="flex flex-wrap gap-3 mt-2">
                  {[
                    { name: 'VS Code', icon: <VscVscode /> },
                    { name: 'PyCharm', icon: <SiPycharm /> },
                    { name: 'Figma', icon: <FaFigma /> },
                    { name: 'Canva', icon: <SiCanva /> },
                    { name: 'Git & GitHub', icon: <FaGithub /> },
                    { name: 'Android Studio', icon: <SiAndroidstudio /> },
                    { name: 'Firebase', icon: <SiFirebase /> }
                  ].map(tool => (
                    <span key={tool.name} className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-700 bg-zinc-800/50 text-[#F6F1DF] text-sm md:text-base tracking-wide">
                      <span className="text-[#FF5A36] text-lg">{tool.icon}</span> {tool.name}
                    </span>
                  ))}
                </div>
              )
            }
          ]} />
        </div>

        {/* EXPERIENCE Content */}
        <div
          className={`w-full transition-all duration-700 ease-in-out ${activeTab === 'EXPERIENCE' ? 'translate-x-0 opacity-100 relative z-10' : 'translate-x-16 opacity-0 absolute top-0 pointer-events-none'}`}
        >
          <Accordion items={[
            {
              title: "Cipla Ltd.",
              content: (
                <div className="flex flex-col gap-4 mt-2">
                  <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 border-b border-zinc-700/50 pb-4">
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 bg-white rounded-md overflow-hidden flex items-center justify-center shadow-lg shrink-0">
                        <Image src="/assets/cipla.png" alt="Cipla Logo" fill className="object-contain p-1" />
                      </div>
                      <div className="flex flex-col">
                        <h4 className="text-[#FF5A36] font-formula font-bold text-xl tracking-wide uppercase">Cipla Ltd.</h4>
                        <span className="text-zinc-500 font-medium text-sm">Dec 2025 - Jan 2026</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-[#F6F1DF] font-medium text-base">
                    Web Development Intern
                    <span className="text-zinc-600 mx-2">|</span>
                    On-Site
                    <span className="text-zinc-600 mx-2">|</span>
                    React.js
                  </div>
                  <ul className="list-disc list-outside ml-5 space-y-3 text-zinc-400 mt-2 text-sm md:text-base">
                    <li>Implemented workflow models into functional web pages for internal admin and CRM portals.</li>
                    <li>Converted business workflow requirements into functional Webpages using React.js.</li>
                    <li>Gained hands-on experience in building real-world enterprise workflow systems within a corporate IT environment.</li>
                  </ul>
                </div>
              )
            },
            {
              title: "Jio",
              content: (
                <div className="flex flex-col gap-4 mt-2">
                  <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 border-b border-zinc-700/50 pb-4">
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 bg-white rounded-md overflow-hidden flex items-center justify-center shadow-lg shrink-0">
                        <Image src="/assets/Jio.png" alt="Jio Logo" fill className="object-contain p-1" />
                      </div>
                      <div className="flex flex-col">
                        <h4 className="text-[#FF5A36] font-formula font-bold text-xl tracking-wide uppercase">Jio</h4>
                        <span className="text-zinc-500 font-medium text-sm">May 2026 - July 2026</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-[#F6F1DF] font-medium text-base">
                    Web Development Intern
                    <span className="text-zinc-600 mx-2">|</span>
                    On-Site
                    <span className="text-zinc-600 mx-2">|</span>
                    Next.js,Node.js
                  </div>
                  <ul className="list-disc list-outside ml-5 space-y-3 text-zinc-400 mt-2 text-sm md:text-base">
                    <li>Currently working in JIO.</li>
                  </ul>
                </div>
              )
            }
          ]} />
        </div>

      </div>
    </div>
  );
}
