"use client";

import { InstallTabs } from "@/components/ui/install-tabs";

export function InstallSection() {
  return (
    <section
      id="install"
      className="relative overflow-hidden bg-[#f4e6d3] px-6 pb-18 pt-2 md:pb-24 md:pt-4"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 md:h-44">
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <defs>
            <linearGradient id="install-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f07c42" />
              <stop offset="50%" stopColor="#e45a32" />
              <stop offset="100%" stopColor="#ae86a8" />
            </linearGradient>
          </defs>
          <path
            d="M0 0H1440V44C1214 139 976 161 739 118C490 74 243 95 0 210V0Z"
            fill="url(#install-grad)"
            opacity="0.18"
          />
        </svg>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 md:h-32">
        <svg
          viewBox="0 0 1440 280"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <path
            d="M0 280V194C263 110 513 102 742 148C982 196 1217 190 1440 126V280H0Z"
            fill="url(#install-grad)"
            opacity="0.12"
          />
        </svg>
      </div>
      <div className="pointer-events-none absolute left-1/2 top-10 h-28 w-28 -translate-x-1/2 rounded-full bg-[#f07c42]/12 blur-3xl md:h-40 md:w-40" />
      <div className="pointer-events-none absolute right-[12%] top-12 h-20 w-20 rounded-full bg-[#ae86a8]/12 blur-3xl md:h-28 md:w-28" />

      <div className="mx-auto max-w-5xl">
        <div className="relative z-10 px-6 py-10 text-center md:px-10 md:py-12">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8e4a2d]">
            Install Kira
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-[1.08] tracking-[0.002em] text-[#1d1d1f] md:text-5xl">
            Get set up on macOS, Linux, or Windows.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#1d1d1f]/70 md:text-xl">
            Pick your platform and follow the command below. The switcher is
            centered and intentionally minimal so the install flow stays clear.
          </p>
          <InstallTabs
            guideHref="/install"
            guideLabel="Full installation guide"
          />
        </div>
      </div>
    </section>
  );
}
