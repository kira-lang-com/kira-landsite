import type { LucideIcon } from "lucide-react";

type CategoryCardProps = {
  description: string;
  icon: LucideIcon;
  title: string;
};

export function CategoryCard({
  icon: Icon,
  title,
  description,
}: CategoryCardProps) {
  return (
    <article className="rounded-[2.5rem] bg-[#fbc087] p-8 text-[#8e4a2d] shadow-[0_30px_80px_-40px_rgba(142,74,45,0.45)] transition-transform duration-300 hover:-translate-y-1 md:p-10">
      <div className="mb-5 inline-flex rounded-2xl bg-white/35 p-3">
        <Icon size={32} strokeWidth={1.7} />
      </div>
      <h3 className="text-2xl font-bold tracking-[-0.03em]">{title}</h3>
      <p className="mt-4 text-lg font-medium leading-snug text-[#8e4a2d]/90">
        {description}
      </p>
    </article>
  );
}
