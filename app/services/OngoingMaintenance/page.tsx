import Head from "next/head";
import OngoingMaintenanceClient from "../../components/Content/OngoingMaintenanceClient";

export default function OngoingMaintenancePage() {
  return (
    <>
      <Head>
        <title>Post-Launch Support & Ongoing Maintenance | Cameron Lowndes</title>
        <meta
          name="description"
          content="Ensure your website or application runs smoothly with post-launch support, bug fixes, performance tuning, and regular updates."
        />
      </Head>
      <div className="min-h-screen flex flex-col pt-16 bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-800 text-white px-6">
        <OngoingMaintenanceClient />
      </div>
    </>
  );
}
