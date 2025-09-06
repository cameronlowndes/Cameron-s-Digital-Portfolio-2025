import HtmlCssDevelopmentClient from "../../components/Content/HtmlCssDevelopmentClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HTML/CSS Development | Cameron Lowndes",
  description:
    "Professional HTML and CSS development for clean, responsive, and fast-loading websites. Ideal for static sites and landing pages.",
  keywords: [
    "HTML development",
    "CSS development",
    "responsive design",
    "web development",
    "Cameron Lowndes",
    "frontend development",
  ],
  openGraph: {
    title: "HTML/CSS Development | Cameron Lowndes",
    description:
      "Professional HTML and CSS development for clean, responsive, and fast-loading websites. Ideal for static sites and landing pages.",
    images: ["/image/logo.jpg"],
    type: "website",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
};

export default function HtmlCssDevelopment() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-gray-100 font-sans">
      <HtmlCssDevelopmentClient />
    </div>
  );
}
