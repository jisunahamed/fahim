import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
    <html lang="en" className="light">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className={`${inter.variable} bg-[#f5f7f8] dark:bg-[#101722] font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300`}>
        {children}
      </body>
    </html>
  );
}
