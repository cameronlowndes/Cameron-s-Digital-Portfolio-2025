import Values from "../../components/Content/ValuesContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Core Values | Cameron Digital Works",
  description:
    "Explore the core values behind Cameron Digital Works — including inclusion, diversity, respect, integrity, and responsible web development. Learn what drives our mission.",
  keywords: [
    "Cameron Digital Works",
    "core values",
    "inclusion",
    "diversity",
    "respect",
    "transparency",
    "ethical web design",
    "web development values",
  ],
  openGraph: {
    title: "Core Values | Cameron Digital Works",
    description:
      "Discover the principles that guide Cameron Digital Works — including inclusion, diversity, neurodiversity, respect, and online responsibility.",
    images: ["/image/logo.jpg"],
    type: "website",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
};

export default function CoreValuesPage() {
  return <Values />;
}
