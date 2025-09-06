import ServicesClient from "../components/Content/ServicesClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Cameron Digital Works",
  description:
    "Discover the range of ethical and accessible web development services offered by Cameron Digital Works, including full-stack development, responsive design, SEO, and ongoing site management.",
  keywords: [
    "Cameron Digital Works",
    "web development services",
    "full-stack development",
    "responsive design",
    "SEO",
    "ethical web development",
    "accessible websites",
  ],
  openGraph: {
    title: "Services | Cameron Digital Works",
    description:
      "Discover the range of ethical and accessible web development services offered by Cameron Digital Works, including full-stack development, responsive design, SEO, and ongoing site management.",
    images: ["/image/logo.jpg"],
    type: "website",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20 px-6 bg-gradient-to-b from-indigo-900 via-purple-900 to-indigo-800">
      <ServicesClient />
    </div>
  );
}
