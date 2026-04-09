import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { CodeBlock } from "@/components/ui/code-block";

export const metadata: Metadata = {
  title: "Packages",
  alternates: {
    canonical: "/docs/packages",
  },
};

export default function PackagesPage() {
  return (
    <PageShell>
      <section className="bg-[#eef6f9] px-6 pb-24 pt-24 md:pb-28 md:pt-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#37677b]">
            Packages
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.06] text-[#1d1d1f] md:text-6xl">
            Kira now ships with a real package manager and a built-in Foundation package.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[#1d1d1f]/72 md:text-xl">
            The default workflow is official-registry-first, lockfile-backed,
            and source-only. Local path dependencies and pinned git
            dependencies are also first-class.
          </p>

          <div className="mt-10 rounded-[2rem] bg-white/60 p-7 shadow-[0_24px_70px_-40px_rgba(29,29,31,0.25)]">
            <h2 className="font-display text-2xl font-bold text-[#1d1d1f]">
              Built-in Foundation
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#1d1d1f]/72">
              Every managed Kira install now bundles a Foundation package. A
              plain `import Foundation` resolves to the bundled package first,
              before any installed package of the same name.
            </p>
            <p className="mt-3 text-base leading-relaxed text-[#1d1d1f]/72">
              Foundation uses a package source tree under `app/`. That means
              `app/foundation.kira` is the root `Foundation` module, while
              files such as `app/Types/Primitives.kira` are visible within the
              Foundation package tree.
            </p>
          </div>

          <CodeBlock
            label="A package manifest"
            sourcePath="examples/hello/kira.toml"
            code={`[package]
name = "Hello"
version = "0.1.0"
kind = "app"
kira = "0.1.0"

[defaults]
execution_mode = "vm"
build_target = "host"

[dependencies]
FrostUI = "0.1.0"
LocalDemo = { path = "../LocalDemo" }
GameKit = { git = "https://github.com/Sunlight-Horizon/GameKit.git", rev = "a1b2c3d4" }`}
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="rounded-[2rem] bg-[#dff0f6]/70 p-7">
              <h2 className="font-display text-2xl font-bold text-[#1d1d1f]">
                Core commands
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#1d1d1f]/72">
                Use `kira sync` to resolve and lock dependencies, `kira add`
                and `kira remove` to edit the manifest, and `kira update` to
                refresh exact registry versions.
              </p>
            </article>

            <article className="rounded-[2rem] bg-[#dff0f6]/70 p-7">
              <h2 className="font-display text-2xl font-bold text-[#1d1d1f]">
                Security rules
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#1d1d1f]/72">
                Registry archives are verified with SHA-256 before extraction.
                Packages are source-only. No install scripts, postinstall
                hooks, lifecycle hooks, or arbitrary shell execution are
                allowed.
              </p>
            </article>
          </div>

          <CodeBlock
            label="Working with dependencies"
            sourcePath="kira CLI"
            code={`kira sync
kira add FrostUI
kira add --git https://github.com/Sunlight-Horizon/GameKit.git --rev a1b2c3d4 GameKit
kira remove FrostUI
kira update
kira package pack
kira package inspect generated/Hello-0.1.0.tar`}
          />

          <div className="mt-10 rounded-[2.5rem] bg-[#f7e8d1]/70 p-8 md:p-10">
            <h2 className="font-display text-3xl font-bold text-[#1d1d1f]">
              What runs today
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#1d1d1f]/72">
              The default VM execution path now prints integers, floats,
              strings, booleans, raw pointers, and named struct values. The
              native and hybrid backends still have a narrower `print(...)`
              surface while their lowering/runtime support catches up.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
