import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { DocsGrid } from "@/components/ui/docs-grid";
import { docsPageLinks } from "@/data/docs";

export const metadata: Metadata = {
  title: "Documentation",
  alternates: {
    canonical: "/docs",
  },
};

export default function DocsPage() {
  return (
    <PageShell>
      <section className="bg-[#eef6f9] px-6 pb-24 pt-24 md:pb-28 md:pt-28">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#37677b]">
            Documentation
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-[1.05] text-[#1d1d1f] md:text-6xl">
            Start reading Kira with short guides instead of one long landing page.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#1d1d1f]/72 md:text-xl">
            This docs area gives you a focused way to explore installation,
            syntax, examples, and the language workflow.
          </p>
          <div className="mt-10">
            <DocsGrid links={docsPageLinks} />
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <article className="rounded-[2rem] bg-white/55 p-7 shadow-[0_24px_70px_-40px_rgba(29,29,31,0.35)]">
              <h2 className="font-display text-2xl font-bold text-[#1d1d1f]">
                1. Install
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#1d1d1f]/72">
                Start on the install page, pick your operating system, and run
                the matching command exactly once. After installation, verify
                that `kira --version` works from a fresh terminal.
              </p>
            </article>

            <article className="rounded-[2rem] bg-white/55 p-7 shadow-[0_24px_70px_-40px_rgba(29,29,31,0.35)]">
              <h2 className="font-display text-2xl font-bold text-[#1d1d1f]">
                2. Read syntax
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#1d1d1f]/72">
                Once the toolchain is working, look at the syntax guide. It
                covers the core pieces most people want first: values,
                functions, mutation, and simple data types.
              </p>
            </article>

            <article className="rounded-[2rem] bg-white/55 p-7 shadow-[0_24px_70px_-40px_rgba(29,29,31,0.35)]">
              <h2 className="font-display text-2xl font-bold text-[#1d1d1f]">
                3. Study examples
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#1d1d1f]/72">
                Finish with the examples page. It connects the syntax guide to
                real code so you can see how small snippets grow into actual
                programs and apps.
              </p>
            </article>
          </div>

          <div className="mt-14 rounded-[2.5rem] bg-[#dff0f6]/70 p-8 md:p-10">
            <h2 className="font-display text-3xl font-bold text-[#1d1d1f] md:text-4xl">
              What these docs are optimizing for
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-[#1d1d1f]">
                  Fast orientation
                </h3>
                <p className="mt-2 text-base leading-relaxed text-[#1d1d1f]/72">
                  The docs are intentionally short and navigable. Instead of
                  one giant wall of text, each page focuses on one question:
                  how to install, how the syntax reads, or what real code looks
                  like.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1d1d1f]">
                  Readable first
                </h3>
                <p className="mt-2 text-base leading-relaxed text-[#1d1d1f]/72">
                  Kira&apos;s pitch here is clarity. These docs mirror that by
                  keeping the explanations close to the code and only
                  introducing terminology when it helps you understand what is
                  happening.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
