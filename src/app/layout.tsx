import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Syaala - AI & Software Development",
  description: "Empowering AI-Driven Innovation | Syaala specializes in AI, ML, web/mobile development, and advanced systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-dark text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
