import HomeContent from "./components/Content/HomeContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cameron Digitl Works HomePage",
  description:
    "Explore the work and skills of Cameron Lowndes, a full-stack web developer with a passion for coding and cloud technologies.",
  openGraph: {
    title: "Cameron's Digital Portfolio",
    description:
      "Explore the work and skills of Cameron Lowndes, a full-stack web developer with a passion for coding and cloud technologies.",
    images: ["/image/cameron.jpg"],
    type: "website",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function Home() {
  return <HomeContent />;
}
