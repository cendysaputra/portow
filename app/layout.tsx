import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
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
    <html lang="en" className={inter.variable}>
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
