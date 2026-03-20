import { ChevronRight, Github } from "lucide-react";

export function OpenSourceSection() {
  return (
    <section
      id="open-source"
      className="bg-gradient-to-b from-[#f4e6d3] to-[#7d6b9e] px-6 py-40 text-center text-white"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-6xl font-bold leading-[1.04] tracking-[0.001em] md:text-8xl md:tracking-[0.003em]">
          Open Source
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-2xl font-medium opacity-90 md:text-3xl">
          Contribute, share ideas, and help shape where Kira goes next.
        </p>

        <div className="mt-12 flex flex-col items-center gap-5">
          <a
            href="https://github.com/kira-lang-com/kira"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-lg font-semibold backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            <Github size={20} />
            View KiraLang on GitHub
            <ChevronRight size={18} />
          </a>
          <a
            href="#categories"
            className="text-xl font-bold text-white/90 underline decoration-white/40 underline-offset-8 transition-colors hover:text-white"
          >
            Join the forums
          </a>
        </div>
      </div>
    </section>
  );
}
