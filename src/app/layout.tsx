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
        {/* Start of Widjet (widjet.com) code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.__wj = window.__wj || {};
              window.__wj.widgetId = "cc30e6d2-a122-44c0-a779-34e9aad87b79";
              window.__wj.product_name = "widjet";
              ;(function(w,d,s){
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s);
                j.async=true;
                j.src="https://jqvcafbrccpmygiihyry.supabase.co/functions/v1/widget-loader";
                f.parentNode.insertBefore(j,f);
              })(window,document,'script');
            `,
          }}
        />
        <noscript>Enable JavaScript to use the widget powered by Widjet</noscript>
        {/* End of Widjet code */}
      </body>
    </html>
  );
}
