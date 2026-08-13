import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { SiteNav } from "@/components/SiteNav";
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
  title: "VICÉLI LIVING — Custom Furniture, Jakarta",
  description:
    "Custom-made furniture atelier in Jakarta. Sofas, dining, mirrors, and office pieces. Showrooms at Golf Island PIK and Alam Sutera.",
  openGraph: {
    title: "VICÉLI LIVING",
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
        <div className="grain" aria-hidden />
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
