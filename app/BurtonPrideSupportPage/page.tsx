import type { Metadata } from "next";
import PrideSupportHeroClient from "../components/Content/BurtonPrideSupport";

export const metadata: Metadata = {
  title: "Pride Support | Cameron Digital Works",
  description:
    "At Cameron Digital Works, we proudly celebrate diversity, inclusivity, and community by supporting Pride and creating safe digital spaces.",
  keywords: [
    "Pride support",
    "diversity",
    "inclusivity",
    "Cameron Digital Works",
    "community",
    "equality",
    "digital spaces",
  ],
  openGraph: {
    title: "Pride Support | Cameron Digital Works",
    description:
      "Celebrating diversity, inclusivity, and community. Supporting Pride through safe and empowering digital spaces.",
    images: ["/image/CameronDigitalWorksLOGOPRIDE.png"],
    type: "website",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
};

export default function PrideSupportPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 text-white">
      <PrideSupportHeroClient />
    </div>
  );
}
