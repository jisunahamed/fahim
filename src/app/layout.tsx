import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

import MobileNav from "@/components/MobileNav";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Fahim Mohammad Faisal | AI Automation Engineer",
  description: "I design intelligent systems that automate workflows, enhance business efficiency, and turn ideas into scalable digital solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} font-sans bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased pb-24`}>
        <Toaster position="top-center" />
        {children}
        <MobileNav />
      </body>
    </html>
  );
}
