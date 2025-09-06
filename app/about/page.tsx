import AboutClient from "../components/Content/AboutClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | Cameron Digital Works - Full-Stack Developer",
  description:
    "Learn more about Cameron Lowndes, a passionate full-stack developer eager to contribute to innovative projects and expand his skills in the tech industry.",
  openGraph: {
    title: "About Me - Cameron Lowndes",
    description:
      "Learn more about Cameron Lowndes, a passionate full-stack developer eager to contribute to innovative projects and expand his skills in the tech industry.",
    images: ["/image/cameron.jpg"],
    type: "website",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function AboutPage() {
  return <AboutClient />;
}
