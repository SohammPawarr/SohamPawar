'use client';

import { useState } from 'react';

type AccordionItem = {
  title: string;
  content: React.ReactNode;
};

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full flex flex-col border-t border-zinc-700/50">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className="border-b border-zinc-700/50">
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full flex items-center justify-between py-6 md:py-8 group outline-none cursor-pointer"
            >
              <h3 className={`font-formula font-bold tracking-wide text-2xl md:text-4xl uppercase transition-colors text-left ${isOpen ? 'text-[#FF5A36]' : 'text-[#EFEFEF] group-hover:text-zinc-300'}`}>
                {item.title}
              </h3>
              <span className={`text-4xl md:text-5xl font-light transition-transform duration-300 leading-none ${isOpen ? 'rotate-45 text-[#FF5A36]' : 'text-zinc-500'}`}>
                +
              </span>
            </button>
            <div 
              className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mb-8' : 'grid-rows-[0fr] opacity-0'}`}
            >
              <div className="overflow-hidden">
                <div className="text-zinc-400 text-base md:text-lg font-medium leading-relaxed pr-4 md:pr-12">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
