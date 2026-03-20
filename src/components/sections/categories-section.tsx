import { Cloud, Cpu, Terminal } from "lucide-react";
import { CategoryCard } from "@/components/ui/category-card";
import { categories, categoryLinks } from "@/data/site";

const iconMap = {
  cloud: Cloud,
  terminal: Terminal,
  cpu: Cpu,
};

export function CategoriesSection() {
  return (
    <section id="categories" className="bg-[#f4e6d3] px-6 pb-32 pt-6 md:pt-10">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-center text-4xl font-bold leading-[1.06] tracking-[0.001em] text-[#1d1d1f] md:text-5xl md:tracking-[0.003em]">
          Create using Kira
        </h2>

        <div className="mt-12 grid gap-6">
          {categories.map((category) => {
            const Icon = iconMap[category.icon];

            return (
              <CategoryCard
                key={category.title}
                title={category.title}
                description={category.description}
                icon={Icon}
              />
            );
          })}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-lg font-semibold text-[#8e4a2d]">
          {categoryLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:underline">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
