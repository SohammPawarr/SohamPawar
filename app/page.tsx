import Image from 'next/image';
import Header from '@/components/Header';
import SkillsExperienceTabs from '@/components/SkillsExperienceTabs';
import ProjectsSection from '@/components/ProjectsSection';
import TextMarquee from '@/components/TextMarquee';
import ContactSection from '@/components/ContactSection';
import ProfileVideo from '@/components/ProfileVideo';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative bg-[#111111] w-full overflow-clip">

      {/* Hero Section - Sticky so it stays in background when scrolling */}
      <section className="sticky top-0 h-screen w-full flex flex-col items-center justify-center px-6 md:px-16 overflow-hidden">
        <Header />
        <div className="flex flex-col md:flex-row w-full max-w-[90rem] gap-12 md:gap-16 items-center justify-between mt-12">

          {/* Left Side: Huge Text */}
          <div className="w-full md:w-7/12 flex flex-col items-start order-1 md:order-1 mt-8 md:mt-0">
            <h1 className="font-formula font-bold text-[10vw] sm:text-[11vw] md:text-[9.5vw] leading-[0.95] tracking-normal uppercase text-left w-full" style={{ transform: 'scaleY(1.1)' }}>
              <span className="text-[#F6F1DF]">HI I AM</span> <br />
              <span className="text-[#FF5A36]">SOHAM PAWAR</span> <br />
              <span className="text-[#F6F1DF]">A SOFTWARE</span> <br />
              <span className="text-[#F6F1DF]">DEVELOPER.</span>
            </h1>
          </div>

          {/* Right Side: Intro & Memoji */}
          <div className="w-full md:w-5/12 flex flex-col items-center gap-6 md:gap-8 order-2 md:order-2">

            <div className="flex flex-col items-center w-full max-w-md mt-4 md:mt-0">
              <div className="relative w-full aspect-[1.83] max-w-[22rem] md:max-w-none md:w-[26rem] md:h-[14.2rem] overflow-visible flex items-center justify-center mb-6">
                <div className="absolute inset-0 bg-[#EFEFEF] overflow-hidden rounded-2xl shadow-2xl">
                  <ProfileVideo />
                </div>

                {/* Decorative stickers */}
                <div className="absolute -top-4 -left-6 bg-purple-600 text-white font-formula px-3 py-1.5 -rotate-12 rounded-sm text-lg md:text-xl shadow-xl border border-purple-500 pt-2 z-10">YO!</div>
                <div className="absolute top-2 -right-4 bg-emerald-500 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rotate-12 shadow-xl border-2 border-[#111111] z-10">
                  <span className="text-lg md:text-xl">👋</span>
                </div>
              </div>

              <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-medium text-center">
                I am Soham Pawar, a software developer with generalist experience in building robust web applications, UI architectures, and consumer software. I love everything that has to do with code, system design, and technology. As a passionate builder, the balance of engineering and design is the perfect playground for me.
              </p>

              <a
                href="https://drive.google.com/file/d/1Ulvf6NubBhZTWBy8ISEnO60aSOiDbIjZ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-[#FF5A36] font-formula text-3xl md:text-5xl uppercase tracking-widest hover:text-white transition-colors flex items-center mt-6 group py-2 cursor-pointer w-fit"
              >
                <span>RESUME</span>
                <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 md:ml-4">
                  <span className="inline-block -rotate-45 opacity-0 -translate-x-4 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0">
                    &#x2794;
                  </span>
                </span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Next Section (Skills & Experience) that scrolls OVER the hero */}
      <section id="skills" className="relative z-10 w-full bg-[#1A1A1A] border-t border-zinc-900 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">

        {/* Slanted Marquee Band overlapping the sections */}
        <div className="absolute top-0 left-0 w-full -translate-y-1/2 overflow-hidden bg-[#FF5A36] py-3 md:py-5 -rotate-3 scale-105 shadow-2xl flex whitespace-nowrap">
          <div className="flex w-fit">
            {/* We duplicate the span exactly twice for seamless infinite scroll. */}
            <span className="flex text-[#F6F1DF] font-formula font-bold text-3xl md:text-5xl uppercase tracking-wide">
              &nbsp;TAILWIND ✦ FULL-STACK DEV ✦ MERN ✦ REACT ✦ NEXT.JS ✦ NODE.JS ✦ PYTHON✦ TYPESCRIPT ✦
            </span>
          </div>
        </div>

        {/* Content for the new section */}
        <div className="pt-40 md:pt-48 pb-10 px-6 md:px-16 flex flex-col md:flex-row w-full max-w-[90rem] mx-auto gap-16">

          {/* Left Side: Huge Text & Graphics (like the reference) */}
          <div className="w-full md:w-1/2 flex flex-col">
            <h2 className="font-formula font-bold text-[11vw] sm:text-[10vw] md:text-[6.5vw] leading-[1.1] md:leading-[0.9] tracking-normal uppercase text-left w-full md:pb-0" style={{ transform: 'scaleY(1.1)' }}>
              <span className="text-[#F6F1DF]">DEEP INTO</span> <br />
              <span className="text-[#FF5A36]">WEB</span> <br />
              <span className="text-[#FF5A36]">DEVELOPMENT,</span> <br />
              <span className="text-[#F6F1DF]">AI/ML, DSA</span> <br />
              <span className="text-[#F6F1DF]">& SYSTEM DESIGN</span>
            </h2>
          </div>

          {/* Right Side: Tab Switcher & Accordions */}
          <div className="w-full md:w-1/2 flex flex-col mt-10 md:mt-0 relative overflow-hidden pb-10">
            <SkillsExperienceTabs />
          </div>

        </div>

      </section>

      <TextMarquee />
      <ProjectsSection />
      <ContactSection />
      <Footer />

    </main>
  );
}
