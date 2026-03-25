import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { InstallTabs } from "@/components/ui/install-tabs";

export const metadata: Metadata = {
  title: "Install",
  alternates: {
    canonical: "/install",
  },
};

export default function InstallPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-[#f4e6d3] px-6 pb-24 pt-24 md:pb-28 md:pt-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 md:h-56">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="h-full w-full">
            <defs>
              <linearGradient id="install-page-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f07c42" />
                <stop offset="50%" stopColor="#e45a32" />
                <stop offset="100%" stopColor="#ae86a8" />
              </linearGradient>
            </defs>
            <path
              d="M0 0H1440V48C1208 166 974 189 740 142C481 90 233 110 0 228V0Z"
              fill="url(#install-page-grad)"
              opacity="0.22"
            />
          </svg>
        </div>
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8e4a2d]">
            Full install guide
          </p>
          <h1 className="mx-auto mt-4 max-w-4xl font-display text-4xl font-bold leading-[1.05] text-[#1d1d1f] md:text-6xl">
            Install Kira on your platform and verify everything is working.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#1d1d1f]/72 md:text-xl">
            Choose your platform below, run the installation command, and
            confirm the toolchain is available in your shell.
          </p>
          <InstallTabs />

          <div className="mx-auto mt-12 max-w-4xl text-left">
            <div className="grid gap-6 md:grid-cols-3">
              <article className="rounded-[2rem] bg-[#f6dfbe]/65 p-6">
                <h2 className="text-lg font-semibold text-[#1d1d1f]">
                  Before you install
                </h2>
                <p className="mt-3 text-base leading-relaxed text-[#1d1d1f]/72">
                  Use a normal shell session with permission to write to your
                  user toolchain directory. Close older terminals before you
                  verify the install so your PATH is refreshed correctly.
                </p>
              </article>

              <article className="rounded-[2rem] bg-[#f6dfbe]/65 p-6">
                <h2 className="text-lg font-semibold text-[#1d1d1f]">
                  Verify it worked
                </h2>
                <p className="mt-3 text-base leading-relaxed text-[#1d1d1f]/72">
                  After installation, open a new terminal and run
                  `kira --version`. If the command is found, the install is
                  successful and your shell can already see the compiler.
                </p>
              </article>

              <article className="rounded-[2rem] bg-[#f6dfbe]/65 p-6">
                <h2 className="text-lg font-semibold text-[#1d1d1f]">
                  Next step
                </h2>
                <p className="mt-3 text-base leading-relaxed text-[#1d1d1f]/72">
                  Once Kira is installed, head to the syntax or examples docs.
                  That is the fastest path from a working toolchain to writing
                  your first small program.
                </p>
              </article>
            </div>

            <div className="mt-8 rounded-[2.5rem] bg-[#f7e8d1]/70 p-8 md:p-10">
              <h2 className="font-display text-3xl font-bold text-[#1d1d1f]">
                Troubleshooting checklist
              </h2>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-semibold text-[#1d1d1f]">
                    Command not found
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-[#1d1d1f]/72">
                    Open a fresh terminal session first. If that still fails,
                    confirm the install directory was added to your PATH and
                    that the install script finished without permission errors.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1d1d1f]">
                    Wrong shell profile
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-[#1d1d1f]/72">
                    On Unix-like systems, make sure the PATH export lands in the
                    profile your shell actually reads, such as `.zshrc`,
                    `.bashrc`, or `.profile`.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1d1d1f]">
                    Windows execution policy
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-[#1d1d1f]/72">
                    If PowerShell blocks the installer, rerun the command in a
                    shell with the specified execution policy flag and then open
                    a new terminal before verifying.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1d1d1f]">
                    Installed but outdated
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-[#1d1d1f]/72">
                    Re-run the same install method you used originally so the
                    existing toolchain is updated in place and your shell path
                    continues to point to the right binary.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
