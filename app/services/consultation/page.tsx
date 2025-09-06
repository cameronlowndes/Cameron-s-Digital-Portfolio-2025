import ExpertConsultationClient from "../../components/Content/ExpertConsultationClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expert Consultation Services | Cameron Digital Works",
  description:
    "Tailored expert consultation services to help your business grow, improve efficiency, and solve complex challenges.",
  keywords: ["Cameron Lowndes", "expert consultation", "business consultation", "web development advice", "tech consulting"],
  openGraph: {
    title: "Expert Consultation Services | Cameron Lowndes",
    description:
      "Tailored expert consultation services to help your business grow, improve efficiency, and solve complex challenges.",
    images: ["/image/logo.jpg"],
    type: "website",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
};

export default function ExpertConsultationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-gray-100 font-sans">
      <ExpertConsultationClient />
    </div>
  );
}
