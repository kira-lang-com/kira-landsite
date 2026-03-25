import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { CodeBlock } from "@/components/ui/code-block";

export const metadata: Metadata = {
  title: "Syntax",
  alternates: {
    canonical: "/docs/syntax",
  },
};

export default function SyntaxPage() {
  return (
    <PageShell>
      <section className="bg-white px-6 pb-24 pt-24 md:pb-28 md:pt-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8e4a2d]">
            Syntax
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.06] text-[#1d1d1f] md:text-6xl">
            Variables, functions, and structs stay close to plain language.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[#1d1d1f]/72 md:text-xl">
            Kira is easiest to understand when you see the building blocks side
            by side. These snippets mirror the style used on the homepage.
          </p>

          <div className="mt-10 rounded-[2rem] bg-[#fbf6ef] p-7">
            <h2 className="font-display text-2xl font-bold text-[#1d1d1f]">
              Reading Kira in practice
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#1d1d1f]/72">
              Most of the early syntax is intentionally direct. `let` introduces
              a value that will not change, `var` introduces one that can, and
              functions read top to bottom with very little decoration in the
              common case.
            </p>
          </div>

          <CodeBlock
            label="Variables"
            sourcePath="HelloKira/Sources/main.kira"
            code={`let x: Float = 12
let y = 12.0
var total = x + y
print(total)`}
          />
          <p className="text-base leading-relaxed text-[#1d1d1f]/72">
            Use `let` when the value should stay fixed. Use `var` when you plan
            to update it later. Explicit type annotations are available when
            they help readability, but simple expressions can often infer their
            type naturally.
          </p>
          <CodeBlock
            label="Function"
            sourcePath="MyKiraProject/Sources/main.kira"
            code={`function greet(name: String) {
    print("Hello, ${"$"}name")
    return
}`}
          />
          <p className="text-base leading-relaxed text-[#1d1d1f]/72">
            Functions declare parameter names and types directly in the
            signature. The body stays lightweight, which makes small utility
            functions easy to scan and easy to teach.
          </p>
          <CodeBlock
            label="Struct"
            sourcePath="HelloKira/Sources/main.kira"
            code={`@CStruct
type hk_color {
    var r: CFloat
    var g: CFloat
    var b: CFloat
    var a: CFloat
}`}
          />
          <p className="text-base leading-relaxed text-[#1d1d1f]/72">
            Data types are similarly straightforward. A struct defines its named
            fields in one place, which helps you move from tiny examples to
            application code without changing your mental model.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
