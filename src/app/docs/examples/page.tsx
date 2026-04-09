import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { CodeBlock } from "@/components/ui/code-block";

export const metadata: Metadata = {
  title: "Examples",
  alternates: {
    canonical: "/docs/examples",
  },
};

export default function ExamplesPage() {
  return (
    <PageShell>
      <section className="bg-[#fbf6ef] px-6 pb-24 pt-24 md:pb-28 md:pt-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8e4a2d]">
            Examples
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.06] text-[#1d1d1f] md:text-6xl">
            Read a few real Kira samples before you dive into a project.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[#1d1d1f]/72 md:text-xl">
            These examples are short on purpose. They make it easy to understand
            the style and the kind of code you will write day to day.
          </p>

          <div className="mt-10 rounded-[2rem] bg-[#dff0f6]/70 p-7">
            <h2 className="font-display text-2xl font-bold text-[#1d1d1f]">
              What the current runtime shows well
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#1d1d1f]/72">
              The default VM path now prints richer values than the earlier
              bootstrap subset, including named struct values. That makes the
              examples page a better reflection of what a local `kira run`
              session looks like today.
            </p>
          </div>

          <div className="mt-10 rounded-[2rem] bg-white/70 p-7 shadow-[0_24px_70px_-40px_rgba(29,29,31,0.25)]">
            <h2 className="font-display text-2xl font-bold text-[#1d1d1f]">
              How to use these examples
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#1d1d1f]/72">
              Read them in order. The first establishes the smallest working
              program shape. The second shows how the same syntax style extends
              into a larger, event-driven app instead of stopping at toy code.
            </p>
          </div>

          <CodeBlock
            label="Hello world"
            sourcePath="HelloKira/Sources/main.kira"
            code={`@main
function main() {
    print("Hello from Kira")
    return
}`}
          />
          <p className="text-base leading-relaxed text-[#1d1d1f]/72">
            This is the shortest useful mental model: an entry point, one
            function body, and a print statement. If this reads comfortably,
            you already understand the tone of the language.
          </p>
          <CodeBlock
            label="Foundation-backed printing"
            sourcePath="examples/hello/app/main.kira"
            code={`import Foundation

@Main
function main() {
    let color = Color(r: 255, g: 0, b: 0)
    print(color)
    return
}`}
          />
          <p className="text-base leading-relaxed text-[#1d1d1f]/72">
            The bundled Foundation package is available automatically, so
            `import Foundation` works without declaring a dependency first in a
            normal managed install.
          </p>
          <CodeBlock
            label="Sokol triangle app"
            sourcePath="SokolGfxKira/Sources/main.kira"
            code={`@Main
function main() {
    print("Launching Sokol triangle (pure Kira)...")
    sapp_run(desc: sapp_desc(
        init_cb: on_init,
        frame_cb: on_frame,
        cleanup_cb: on_cleanup,
        width: 800,
        height: 600))
}`}
          />
          <p className="text-base leading-relaxed text-[#1d1d1f]/72">
            The Sokol sample matters because it proves the syntax still holds up
            when the program stops being tiny. You still read function calls,
            named arguments, and setup code in a linear way without a huge jump
            in complexity.
          </p>

          <div className="mt-10 rounded-[2rem] bg-[#f2dcc0]/70 p-7">
            <h2 className="font-display text-2xl font-bold text-[#1d1d1f]">
              Suggested next steps
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#1d1d1f]/72">
              After reading these examples, go back to the syntax page to map
              each construct to its language role, then use the install guide to
              get a local toolchain ready for your own first program.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
