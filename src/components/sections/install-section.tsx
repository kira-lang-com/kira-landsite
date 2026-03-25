"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { installPlatforms } from "@/data/site";

export function InstallSection() {
  const [activePlatformId, setActivePlatformId] = useState(
    installPlatforms[0].id,
  );

  const activePlatform =
    installPlatforms.find((platform) => platform.id === activePlatformId) ??
    installPlatforms[0];

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

          <div className="mt-8 flex justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full bg-[#f0d7b6]/80 p-2">
              {installPlatforms.map((platform) => {
                const isActive = platform.id === activePlatform.id;

                return (
                  <button
                    key={platform.id}
                    type="button"
                    onClick={() => setActivePlatformId(platform.id)}
                    className={`rounded-full px-5 py-3 text-sm font-semibold transition-colors md:text-base ${
                      isActive
                        ? "bg-gradient-to-b from-[#f38d5b] to-[#e45a32] text-[#2f140d] shadow-[0_16px_35px_-20px_rgba(228,90,50,0.85)]"
                        : "bg-transparent text-[#6f503f] hover:bg-[#fbf1e5]/60"
                    }`}
                    aria-pressed={isActive}
                  >
                    {platform.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-3xl px-6 py-7 text-left md:px-8 md:py-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div className="max-w-xl">
                <h3 className="font-display text-2xl font-bold tracking-[0.002em] text-[#1d1d1f]">
                  {activePlatform.label}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-[#1d1d1f]/72 md:text-lg">
                  {activePlatform.description}
                </p>
              </div>
              <a
                href="#fast"
                className="inline-flex items-center gap-2 self-start rounded-full bg-[#f7e3c8]/80 px-4 py-2 text-sm font-semibold text-[#8e4a2d] transition-colors hover:bg-[#f9ead5]"
              >
                Read docs
                <ChevronRight size={16} />
              </a>
            </div>

            <pre className="mt-6 overflow-x-auto rounded-[1.5rem] bg-[#1d1d1f] px-5 py-5 text-sm leading-7 text-[#f6ede3] md:px-6 md:text-[15px]">
              <code className="font-mono whitespace-pre">
                {activePlatform.command}
              </code>
            </pre>

            <p className="mt-4 text-sm font-medium leading-relaxed text-[#6f6458] md:text-[15px]">
              {activePlatform.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
