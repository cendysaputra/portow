import type { Metadata } from "next";
import { Great_Vibes, Inter } from "next/font/google";
import { Header } from "@/components/header";
import { site } from "@/content/site";
import "./globals.css";
import "./world.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const script = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  authors: [{ name: site.name }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${script.variable}`}>
      <body>
        <a className="skip" href="/story">
          Read the story without animation
        </a>
        <Header />
        {children}
      </body>
    </html>
  );
}
