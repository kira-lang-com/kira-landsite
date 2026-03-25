import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-manrope",
});

const siteName = "Kira";
const siteDescription =
  "Kira is a powerful, flexible, multiplatform programming language built for speed, expressiveness, and safety.";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "Kira",
    "Kira language",
    "programming language",
    "systems programming",
    "cross-platform language",
    "safe programming language",
    "fast programming language",
  ],
  applicationName: siteName,
  authors: [{ name: "Kira Language Project" }],
  creator: "Kira Language Project",
  publisher: "Kira Language Project",
  category: "technology",
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: "/KiraNameIcon.png",
        width: 1200,
        height: 630,
        alt: "Kira programming language",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/KiraNameIcon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/KiraIconLightRounded.ico",
    shortcut: "/KiraIconLightRounded.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="min-h-dvh flex flex-col">{children}</body>
    </html>
  );
}
