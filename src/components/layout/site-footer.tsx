import { KiraLogo } from "@/components/ui/kira-logo";
import { footerGroups, legalLinks } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="bg-[#1d1d1f] px-6 pb-12 pt-24 text-[#d2d2d7]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <div className="mb-12 flex items-center gap-3 text-white">
            <KiraLogo className="h-12 w-12" />
            <span className="font-display text-3xl font-bold tracking-[-0.04em]">
              Kira
            </span>
          </div>

          <div className="grid w-full grid-cols-1 gap-12 text-left md:grid-cols-5">
            {footerGroups.map((group) => (
              <div
                key={group.title ?? "Explore"}
                className={group.title ? "md:col-span-1" : "md:col-span-2"}
              >
                {group.title ? (
                  <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-orange-400">
                    {group.title}
                  </h4>
                ) : null}
                <div className="flex flex-col gap-4">
                  {group.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-12 text-[13px] font-medium opacity-70 md:flex-row">
          <p>© 2026 Kira Language Project. Built with love for developers.</p>
          <div className="flex flex-wrap justify-center gap-8">
            {legalLinks.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
