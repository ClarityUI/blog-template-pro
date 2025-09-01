import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: "Blog Template Pro",
  description: "Vytvorené s pomocou Programovacieho partnera",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk">
      <body
        className={`${inter.className} bg-slate-50 text-slate-700 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
