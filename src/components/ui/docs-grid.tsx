import Link from "next/link";
import type { DocsPageLink } from "@/data/docs";

type DocsGridProps = {
  links: DocsPageLink[];
};

export function DocsGrid({ links }: DocsGridProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="rounded-[2rem] bg-white/55 p-7 shadow-[0_24px_70px_-40px_rgba(29,29,31,0.35)] transition-transform hover:-translate-y-1"
        >
          <h3 className="font-display text-2xl font-bold text-[#1d1d1f]">
            {link.title}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-[#1d1d1f]/72">
            {link.description}
          </p>
        </Link>
      ))}
    </div>
  );
}
