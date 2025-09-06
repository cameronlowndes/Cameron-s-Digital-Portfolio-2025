import HtmlStarterPackageContent from "../../components/Content/HtmlOfferContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HTML Starter Website Package | Cameron Lowndes",
  description:
    "Simple, professional, and affordable HTML/CSS websites. Perfect for small businesses and startups looking for a cost-effective online presence.",
  keywords: [
    "HTML website",
    "CSS website",
    "starter package",
    "small business website",
    "Cameron Lowndes",
    "affordable web development",
  ],
  openGraph: {
    title: "HTML Starter Website Package | Cameron Lowndes",
    description:
      "Simple, professional, and affordable HTML/CSS websites. Perfect for small businesses and startups looking for a cost-effective online presence.",
    images: ["/image/logo.jpg"],
    type: "website",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
};

export default function HtmlStarterPackagePage() {
  return <HtmlStarterPackageContent />;
}
