export type NavLink = {
  href: string;
  label: string;
};

export type Category = {
  description: string;
  icon: "cloud" | "terminal" | "cpu";
  title: string;
};

export type FeatureSectionData = {
  code: string;
  codeLabel: string;
  codeSource?: string;
  description: string;
  id: string;
  sectionClassName: string;
  subtitle: string;
  title: string;
};

export type FooterGroup = {
  links: NavLink[];
  title?: string;
};

export const navigationLinks: NavLink[] = [
  { href: "#install", label: "Overview" },
  { href: "#categories", label: "Getting Started" },
  { href: "#fast", label: "Examples" },
  { href: "#expressive", label: "Syntax" },
  { href: "#open-source", label: "Open Source" },
];

export const categories: Category[] = [
  {
    icon: "terminal",
    title: "Easy to read",
    description:
      "Kira keeps everyday code straightforward: variables, functions, structs, and prints look close to how you would explain the program out loud.",
  },
  {
    icon: "cloud",
    title: "Easy to use",
    description:
      "You can start with tiny scripts and simple apps, then keep growing into packages, tooling, and native interop without switching languages.",
  },
  {
    icon: "cpu",
    title: "Easy to grow",
    description:
      "The same syntax scales from beginner-friendly examples to real projects like the pure-Kira Sokol triangle sample in this repo.",
  },
];

export const categoryLinks: NavLink[] = [
  { href: "#fast", label: "Hello world" },
  { href: "#expressive", label: "Variables" },
  { href: "#safe", label: "Structs" },
  { href: "#adaptable", label: "Real app" },
];

export const featureSections: FeatureSectionData[] = [
  {
    id: "fast",
    title: "Simple",
    subtitle: "Small Kira programs read the way you expect.",
    description:
      "You can start with plain values, clear types, and direct function bodies. The language does not force advanced syntax on simple tasks.",
    codeLabel: "A tiny Kira program",
    codeSource: "MyKiraProject/Sources/main.kira",
    code: String.raw`@main
function main() {
    let x: Float = 12
    let y = 12.0
    let z = x + y
    print(z)
    return
}`,
    sectionClassName: "bg-gradient-to-b from-white to-[#eef6f9]",
  },
  {
    id: "expressive",
    title: "Comfortable",
    subtitle: "Mutation and output stay easy to follow.",
    description:
      "When you need a mutable value, you declare one with \`var\` and update it directly. The language keeps the common path uncluttered.",
    codeLabel: "Updating a value",
    codeSource: "HelloKira/Sources/main.kira",
    code: String.raw`var xy = 12.0
print(xy)

xy = 13.0
print(xy)`,
    sectionClassName: "bg-[#eef6f9]",
  },
  {
    id: "safe",
    title: "Structured",
    subtitle: "Your data types look like your data.",
    description:
      "Kira structs are direct and readable. You can name fields clearly and keep your types close to the problem you are solving.",
    codeLabel: "A simple color type",
    codeSource: "HelloKira/Sources/main.kira",
    code: String.raw`@CStruct
type hk_color {
    var r: CFloat
    var g: CFloat
    var b: CFloat
    var a: CFloat
}`,
    sectionClassName: "bg-gradient-to-b from-[#eef6f9] to-[#f4e6d3]",
  },
  {
    id: "adaptable",
    title: "Capable",
    subtitle: "When you are ready, the same language scales up.",
    description:
      "The repo also includes a real graphics sample written in Kira. You can stay with friendly syntax and still grow into native app code when the project gets bigger.",
    codeLabel: "Launching the Sokol sample",
    codeSource: "SokolGfxKira/Sources/main.kira",
    code: String.raw`@Main
function main() {
    print("Launching Sokol triangle (pure Kira)…")
    sapp_run(desc: sapp_desc(
        init_cb: on_init,
        frame_cb: on_frame,
        cleanup_cb: on_cleanup,
        width: 800,
        height: 600,
        window_title: "Sokol Triangle (Kira)"))
}`,
    sectionClassName: "border-t border-black/5 bg-[#f4e6d3]",
  },
];

export const footerGroups: FooterGroup[] = [
  {
    links: navigationLinks,
  },
  {
    title: "Tools",
    links: [
      { href: "#install", label: "kira CLI" },
      { href: "#categories", label: "examples" },
      { href: "#open-source", label: "kira-lsp" },
    ],
  },
];

export const legalLinks: NavLink[] = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Use" },
  { href: "#", label: "Site Map" },
];
