type SectionHeaderProps = {
  subtitle: string;
  title: string;
};

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-8">
      <h2 className="font-display text-5xl font-bold tracking-[-0.04em] text-[#1d1d1f] md:text-7xl">
        {title}
      </h2>
      <p className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[#1d1d1f]/80 md:text-3xl">
        {subtitle}
      </p>
    </div>
  );
}
