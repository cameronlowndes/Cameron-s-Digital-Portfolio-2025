import OngoingMaintenanceClient from "../../components/Content/OngoingMaintenanceClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Post-Launch Support & Ongoing Maintenance | Cameron Digital Works",
  description:
    "Ensure your website or application runs smoothly with post-launch support, bug fixes, performance tuning, and regular updates.",
  keywords: ["Cameron Lowndes", "web maintenance", "support", "bug fixes", "ongoing maintenance", "post-launch support"],
  openGraph: {
    title: "Post-Launch Support & Ongoing Maintenance | Cameron Lowndes",
    description:
      "Ensure your website or application runs smoothly with post-launch support, bug fixes, performance tuning, and regular updates.",
    images: ["/image/logo.jpg"],
    type: "website",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
};

export default function OngoingMaintenancePage() {
  return (
    <div className="min-h-screen flex flex-col pt-16 bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-800 text-white px-6">
      <OngoingMaintenanceClient />
    </div>
  );
}
