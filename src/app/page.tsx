import { CategoriesSection } from "@/components/sections/categories-section";
import { FeatureSection } from "@/components/sections/feature-section";
import { HeroSection } from "@/components/sections/hero-section";
import { OpenSourceSection } from "@/components/sections/open-source-section";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNav } from "@/components/layout/site-nav";
import { featureSections } from "@/data/site";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <SiteNav />
      <main>
        <HeroSection />
        <CategoriesSection />
        {featureSections.map((section) => (
          <FeatureSection key={section.id} section={section} />
        ))}
        <OpenSourceSection />
      </main>
      <SiteFooter />
    </div>
  );
}
