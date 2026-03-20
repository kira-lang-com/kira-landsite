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
  { href: "#fast", label: "Docs" },
  { href: "#open-source", label: "Community" },
  { href: "#categories", label: "Packages" },
  { href: "#expressive", label: "Blog" },
  { href: "#install", label: "Install" },
];

export const categories: Category[] = [
  {
    icon: "cloud",
    title: "Cloud Services",
    description:
      "Run performant services on Linux and deploy to the cloud with native execution.",
  },
  {
    icon: "terminal",
    title: "Command Line",
    description:
      "Create powerful CLI tools that are fast, memory safe, and highly portable.",
  },
  {
    icon: "cpu",
    title: "Embedded",
    description:
      "Develop efficient, reliable firmware for devices like microcontrollers with zero-cost abstractions.",
  },
];

export const categoryLinks: NavLink[] = [
  { href: "#install", label: "iOS apps" },
  { href: "#adaptable", label: "Windows apps" },
  { href: "#open-source", label: "Machine Learning & AI" },
  { href: "#categories", label: "Packages" },
];

export const featureSections: FeatureSectionData[] = [
  {
    id: "fast",
    title: "Fast",
    subtitle: "Build with speed and performance.",
    description:
      "Kira meets the most performance-critical needs while keeping code expressive and approachable. It compiles directly to native code and offers predictable memory management for serious production workloads.",
    codeLabel: "Vectorized ASCII check",
    code: String.raw`func isASCII(utf8: Span<SIMD16<UInt8>>) -> Bool {
  // Vectorized check that a utf8 buffer is ASCII
  let max = utf8.indices.reduce(into: SIMD16()) { $0 |= utf8[$1] }
  return max.max() < 0x80
}`,
    sectionClassName:
      "bg-gradient-to-b from-white to-[#eef6f9]",
  },
  {
    id: "expressive",
    title: "Expressive",
    subtitle: "Concise code. Powerful results.",
    description:
      "Kira empowers you to write advanced code in a concise, readable syntax that still scales up to expert use cases. Its progressive disclosure keeps beginner-friendly ergonomics without capping what experienced developers can do.",
    codeLabel: "CLI command example",
    code: String.raw`@main struct Describe: ParsableCommand {
  @Argument(help: "The values to describe.")
  var values: [Double] = []

  mutating func run() {
    values.sort()
    let total = values.reduce(0, +)
    print("Total: \(total)")
  }
}`,
    sectionClassName: "bg-[#eef6f9]",
  },
  {
    id: "safe",
    title: "Safe",
    subtitle: "Protect memory safety.",
    description:
      "Kira is designed to eliminate entire classes of bugs and vulnerabilities. Memory safety and data race safety are first-class features, making it easier to ship robust systems without bolting safety on later.",
    codeLabel: "Transform builder",
    code: String.raw`let transform = Affine2DTransformBuilder()
  .translate([10.0, 20.0].span)
  .rotate(30.0)
  .build()`,
    sectionClassName:
      "bg-gradient-to-b from-[#eef6f9] to-[#f4e6d3]",
  },
  {
    id: "adaptable",
    title: "Adaptable",
    subtitle: "From microcontrollers to servers.",
    description:
      "The same language can span embedded devices, kernels, backend systems, and desktop apps. Kira is built to feel at home in constrained environments just as much as in cloud services handling massive throughput.",
    codeLabel: "Embedded UART setup",
    code: String.raw`// Configure UART by direct register manipulation
usart1.brr.modify { rw in
  rw.raw.brr_field = 16_000_000 / 115_200
}`,
    sectionClassName:
      "border-t border-black/5 bg-[#f4e6d3]",
  },
];

export const footerGroups: FooterGroup[] = [
  {
    links: navigationLinks,
  },
  {
    title: "Tools",
    links: [
      { href: "#install", label: "Kira Studio" },
      { href: "#categories", label: "KiraPM" },
      { href: "#fast", label: "Language Server" },
    ],
  },
];

export const legalLinks: NavLink[] = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Use" },
  { href: "#", label: "Site Map" },
];
