import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cendy Saputra",
  description: "Portfolio of Cendy Saputra.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
