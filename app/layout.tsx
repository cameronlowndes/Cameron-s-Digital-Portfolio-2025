import "./globals.css"; // Corrected path
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";


// Import Google fonts with CSS variable support
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "Welcome to Cameron Digital Works",
  description:
    "Cameron Digital Works specializes in crafting high-quality full-stack websites, from clean and responsive HTML/CSS/JavaScript sites to advanced custom web applications built with React, Next.js, and TypeScript. Empower your business with tailored digital solutions designed to grow and succeed online.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
