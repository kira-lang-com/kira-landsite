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

export type InstallPlatform = {
  command: string;
  description: string;
  id: "macos" | "linux" | "windows";
  label: string;
  note: string;
};

export type FooterGroup = {
  links: NavLink[];
  title?: string;
};

export const navigationLinks: NavLink[] = [
  { href: "/", label: "Overview" },
  { href: "/docs", label: "Docs" },
  { href: "/docs/packages", label: "Packages" },
  { href: "/docs/examples", label: "Examples" },
  { href: "/docs/syntax", label: "Syntax" },
  { href: "/install", label: "Install" },
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
      "You can start with tiny scripts and simple apps, then keep growing into packages, Foundation modules, tooling, and native interop without switching languages.",
  },
  {
    icon: "cpu",
    title: "Easy to grow",
    description:
      "The same syntax scales from beginner-friendly examples to real projects like the pure-Kira Sokol triangle sample in this repo.",
  },
];

export const categoryLinks: NavLink[] = [
  { href: "/docs/examples", label: "Hello world" },
  { href: "/docs/syntax", label: "Variables" },
  { href: "/docs/syntax", label: "Structs" },
  { href: "/docs/examples", label: "Real app" },
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
    subtitle: "When you are ready, the same language scales up into real packages and apps.",
    description:
      "Kira now includes a real package workflow with a bundled Foundation package, exact-version registry installs, local paths, pinned git dependencies, and lockfile-backed builds.",
    codeLabel: "Launching the Sokol sample",
    codeSource: "kira package workflow",
    code: String.raw`[dependencies]
FrostUI = "0.1.0"
GameKit = { git = "https://github.com/Sunlight-Horizon/GameKit.git", rev = "a1b2c3d4" }

kira sync
kira add FrostUI
kira package pack`,
    sectionClassName: "border-t border-black/5 bg-[#f4e6d3]",
  },
];

export const installPlatforms: InstallPlatform[] = [
  {
    id: "macos",
    label: "macOS",
    description:
      "Use Homebrew for the cleanest setup and keep the compiler on your normal PATH.",
    command: String.raw`brew tap kira-lang-com/kira
brew install kira`,
    note: "Requires Homebrew. Then run `kira --version` to verify the install.",
  },
  {
    id: "linux",
    label: "Linux",
    description:
      "Run the shell installer to fetch the latest release and place the binary in your local toolchain path.",
    command: String.raw`curl -fsSL https://install.kira.sh | sh
export PATH="$HOME/.kira/bin:$PATH"`,
    note: "Works well on Ubuntu, Fedora, Arch, and other modern distributions.",
  },
  {
    id: "windows",
    label: "Windows",
    description:
      "Install with PowerShell, then restart your terminal so the Kira executable is available everywhere.",
    command: String.raw`powershell -ExecutionPolicy Bypass -c "irm https://install.kira.sh/windows | iex"
kira --version`,
    note: "Use PowerShell 7+ if possible for the smoothest install experience.",
  },
];

export const footerGroups: FooterGroup[] = [
  {
    links: navigationLinks,
  },
  {
    title: "Tools",
    links: [
      { href: "/install", label: "kira CLI" },
      { href: "/docs/examples", label: "examples" },
      { href: "/docs", label: "kira-lsp" },
    ],
  },
];

export const legalLinks: NavLink[] = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Use" },
  { href: "#", label: "Site Map" },
];
