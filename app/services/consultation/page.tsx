import Head from "next/head";
import ExpertConsultationClient from "../../components/Content/ExpertConsultationClient";

export default function ExpertConsultationPage() {
  return (
    <>
      <Head>
        <title>Expert Consultation Services | Cameron Lowndes</title>
        <meta
          name="description"
          content="Tailored expert consultation services to help your business grow, improve efficiency, and solve complex challenges."
        />
      </Head>

      <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-gray-100 font-sans">
        <ExpertConsultationClient />
      </div>
    </>
  );
}
