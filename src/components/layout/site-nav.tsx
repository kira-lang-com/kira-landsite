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
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/60 transition-all duration-300 md:hidden ${
              isMenuOpen
                ? "scale-105 bg-white shadow-[0_12px_30px_-18px_rgba(29,29,31,0.75)]"
                : ""
            }`}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <span
              className={`transition-transform duration-300 ${
                isMenuOpen ? "rotate-90" : "rotate-0"
              }`}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </span>
          </button>
        </div>

        <div
          className={`grid transition-[grid-template-rows] duration-300 ease-out md:hidden ${
            isMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
          aria-hidden={!isMenuOpen}
        >
          <div className="overflow-hidden">
            <div
              className={`border-t border-black/5 py-4 transition-all duration-300 ${
                isMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-3 opacity-0"
              }`}
            >
              <div className="flex flex-col gap-3">
                {navigationLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`rounded-2xl bg-white/50 px-4 py-3 text-base font-semibold transition-all duration-300 ${
                      isMenuOpen
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-2 opacity-0"
                    }`}
                    style={{
                      transitionDelay: isMenuOpen ? `${40 * navigationLinks.indexOf(link)}ms` : "0ms",
                    }}
                    tabIndex={isMenuOpen ? 0 : -1}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
