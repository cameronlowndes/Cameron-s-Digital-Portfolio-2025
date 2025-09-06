import NextJsReactClient from "../../components/Content/NextJsReactClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js/React Development | Cameron Lowndes",
  description:
    "Professional Next.js and React development services tailored for performance, scalability, and modern design.",
  keywords: [
    "Next.js development",
    "React development",
    "Cameron Lowndes",
    "full-stack development",
    "modern web apps",
    "frontend development",
  ],
  openGraph: {
    title: "Next.js/React Development | Cameron Lowndes",
    description:
      "Professional Next.js and React development services tailored for performance, scalability, and modern design.",
    images: ["/image/logo.jpg"],
    type: "website",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
};

export default function NextJsReactDevelopmentPage() {
  return (
    <div className="min-h-screen flex flex-col pt-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 px-6">
      <main className="flex-grow max-w-6xl mx-auto w-full py-20 text-white">
        <NextJsReactClient />
      </main>
    </div>
  );
}
