import { CodeBlock } from "@/components/ui/code-block";
import { SectionHeader } from "@/components/ui/section-header";
import type { FeatureSectionData } from "@/data/site";

type FeatureSectionProps = {
  section: FeatureSectionData;
};

export function FeatureSection({ section }: FeatureSectionProps) {
  return (
    <section id={section.id} className={`${section.sectionClassName} px-6 py-32`}>
      <div className="mx-auto max-w-4xl">
        <SectionHeader title={section.title} subtitle={section.subtitle} />
        <p className="max-w-3xl text-xl leading-relaxed text-[#1d1d1f]/80 md:text-2xl">
          {section.description}
        </p>
        <CodeBlock
          code={section.code}
          label={section.codeLabel}
          sourcePath={section.codeSource}
        />
      </div>
    </section>
  );
}
