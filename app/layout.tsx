import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { SiteNav } from "@/components/SiteNav";
import { SmoothScroll } from "@/components/SmoothScroll";
import { brand } from "@/lib/content";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${brand.name} — Custom Furniture, Jakarta`,
  description: brand.description,
  openGraph: {
    title: brand.name,
    description: "Transform your space into the perfect room.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SmoothScroll />
        <div className="grain" aria-hidden />
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
