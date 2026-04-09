export type DocsPageLink = {
  description: string;
  href: string;
  title: string;
};

export const docsPageLinks: DocsPageLink[] = [
  {
    href: "/docs",
    title: "Documentation",
    description: "Start with the Kira overview, workflow, and examples.",
  },
  {
    href: "/docs/syntax",
    title: "Syntax",
    description: "See how variables, functions, and structs look in Kira.",
  },
  {
    href: "/docs/examples",
    title: "Examples",
    description: "Walk through real snippets adapted from the Kira repository.",
  },
  {
    href: "/docs/packages",
    title: "Packages",
    description: "Learn the lockfile, Foundation, registry, path, and pinned git workflow.",
  },
  {
    href: "/install",
    title: "Install guide",
    description: "Platform-specific instructions for macOS, Linux, and Windows.",
  },
];
