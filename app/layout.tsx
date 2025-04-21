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

// Metadata for SEO and social
export const metadata: Metadata = {
  title: "Welcome to Cameron's Digital Portfolio",
  description:
    "Explore the work and skills of Cameron Lowndes, a full-stack web developer with a passion for coding and cloud technologies.",
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
