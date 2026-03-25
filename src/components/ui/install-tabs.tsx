"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { installPlatforms } from "@/data/site";

type InstallTabsProps = {
  guideHref?: string;
  guideLabel?: string;
};

export function InstallTabs({
  guideHref,
  guideLabel = "Full installation guide",
}: InstallTabsProps) {
  const [activePlatformId, setActivePlatformId] = useState(
    installPlatforms[0].id,
  );

  const activePlatform =
    installPlatforms.find((platform) => platform.id === activePlatformId) ??
    installPlatforms[0];

  return (
    <>
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
          {guideHref ? (
            <Link
              href={guideHref}
              className="inline-flex items-center gap-2 self-start rounded-full bg-[#f7e3c8]/80 px-4 py-2 text-sm font-semibold text-[#8e4a2d] transition-colors hover:bg-[#f9ead5]"
            >
              {guideLabel}
              <ChevronRight size={16} />
            </Link>
          ) : null}
        </div>

        <pre className="mt-6 overflow-x-auto rounded-[1.5rem] bg-[#1d1d1f] px-5 py-5 text-sm leading-7 text-[#f6ede3] md:px-6 md:text-[15px]">
          <code className="font-mono whitespace-pre">{activePlatform.command}</code>
        </pre>

        <p className="mt-4 text-sm font-medium leading-relaxed text-[#6f6458] md:text-[15px]">
          {activePlatform.note}
        </p>
      </div>
    </>
  );
}
