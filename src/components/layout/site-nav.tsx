"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { KiraLogo } from "@/components/ui/kira-logo";
import { navigationLinks } from "@/data/site";

export function SiteNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-[#e2cca9]/40 bg-[#f4e6d3]/90 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#install"
            className="flex items-center gap-3 transition-opacity hover:opacity-70"
          >
            <KiraLogo />
            <span className="font-display text-2xl font-bold tracking-[-0.04em]">
              Kira
            </span>
          </a>

          <div className="hidden items-center gap-10 text-[15px] font-semibold text-[#1d1d1f] md:flex">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-opacity hover:opacity-60"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/60 md:hidden"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMenuOpen ? (
          <div className="border-t border-black/5 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navigationLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-2xl bg-white/50 px-4 py-3 text-base font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
