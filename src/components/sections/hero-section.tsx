import { ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="install"
      className="relative overflow-hidden bg-[#f4e6d3] px-6 pb-28 pt-20 text-center md:pb-36 md:pt-24"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[15rem] md:h-[24rem]">
        <svg
          viewBox="0 0 1440 640"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <defs>
            <linearGradient id="hero-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f07c42" />
              <stop offset="50%" stopColor="#e45a32" />
              <stop offset="100%" stopColor="#ae86a8" />
            </linearGradient>
          </defs>
          <path
            d="M0 0H1440V92C1250 242 1030 286 770 205C498 119 246 145 0 338V0Z"
            fill="url(#hero-grad)"
            opacity="0.48"
          />
          <path
            d="M0 0H1440V52C1196 196 942 214 698 138C445 59 218 93 0 254V0Z"
            fill="white"
            opacity="0.12"
          />
        </svg>
      </div>

      <div className="absolute left-1/2 top-6 h-56 w-56 -translate-x-1/2 rounded-full bg-[#f07c42]/18 blur-3xl md:top-10 md:h-72 md:w-72" />
      <div className="absolute right-[8%] top-8 h-32 w-32 rounded-full bg-[#ae86a8]/16 blur-3xl md:top-14 md:h-48 md:w-48" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[10rem] md:h-[14rem]">
        <svg
          viewBox="0 0 1440 420"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <path
            d="M0 420V282C222 193 431 171 639 223C876 282 1125 292 1440 154V420H0Z"
            fill="url(#hero-grad)"
            opacity="0.3"
          />
          <path
            d="M0 420V320C268 232 513 229 734 282C970 338 1205 319 1440 228V420H0Z"
            fill="white"
            opacity="0.14"
          />
        </svg>
      </div>
      <div className="absolute bottom-8 left-[12%] h-28 w-28 rounded-full bg-white/18 blur-3xl md:bottom-12 md:h-40 md:w-40" />
      <div className="absolute bottom-6 right-[10%] h-24 w-24 rounded-full bg-[#e45a32]/12 blur-3xl md:bottom-10 md:h-36 md:w-36" />

      <div className="relative z-10 mx-auto max-w-5xl pt-10 md:pt-14">
        <p className="mb-6 inline-flex rounded-full border border-[#e2cca9] bg-white/55 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#8e4a2d] shadow-[0_10px_30px_-20px_rgba(29,29,31,0.6)]">
          Language for builders
        </p>
        <h1 className="balance-text font-display text-5xl font-bold leading-[0.98] tracking-[-0.06em] text-[#333] md:text-7xl">
          Kira is the powerful, flexible, multiplatform programming language.
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-2xl font-medium text-[#1d1d1f]/70 md:text-3xl">
          Fast. Expressive. Safe.
        </p>

        <div className="mt-12 flex flex-col items-center gap-6 md:mt-14">
          <a
            href="#fast"
            className="inline-flex items-center gap-3 rounded-[2rem] bg-gradient-to-b from-[#f38d5b] to-[#e45a32] px-10 py-5 text-2xl font-semibold text-white shadow-[0_24px_70px_-24px_rgba(228,90,50,0.8)] transition-transform duration-300 hover:-translate-y-1 md:px-20 md:text-3xl"
          >
            Install
            <ChevronRight size={28} />
          </a>
          <p className="text-lg font-medium text-[#8e8e93]">
            Tools for Linux, macOS, and Windows
          </p>
        </div>
      </div>
    </section>
  );
}
