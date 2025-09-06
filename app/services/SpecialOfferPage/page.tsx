import DiscountedDevOfferContent from "../../components/Content/DiscountedDevOfferContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Special Discount for Charities & Small Businesses | Cameron Lowndes",
  description:
    "Affordable, high-quality Next.js and React development services for charities and small businesses. Tailored for impact and accessibility.",
  keywords: [
    "Next.js development",
    "React development",
    "charity website",
    "small business website",
    "affordable web development",
    "Cameron Lowndes",
  ],
  openGraph: {
    title: "Special Discount for Charities & Small Businesses | Cameron Lowndes",
    description:
      "Affordable, high-quality Next.js and React development services for charities and small businesses. Tailored for impact and accessibility.",
    images: ["/image/logo.jpg"],
    type: "website",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
};

export default function DiscountedDevOfferPage() {
  return <DiscountedDevOfferContent />;
}
