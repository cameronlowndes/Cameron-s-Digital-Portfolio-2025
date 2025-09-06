import SocialMediaTermsContent from "../../components/Content/Terms/SocialMediaTermsContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Services Terms | Cameron Digital Works",
  description:
    "Basic terms and conditions for Social Media Management services offered by Cameron Lowndes.",
  keywords: ["Cameron Lowndes", "social media management", "terms and conditions", "SM services"],
  openGraph: {
    title: "Social Media Services Terms | Cameron Lowndes",
    description:
      "Basic terms and conditions for Social Media Management services offered by Cameron Lowndes.",
    images: ["/image/logo.jpg"],
    type: "website",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
};

export default function SocialMediaTermsPage() {
  return <SocialMediaTermsContent />;
}
