import Head from "next/head";
import NextJsReactClient from "../../components/Content/NextJsReactClient";

export default function NextJsReactDevelopmentPage() {
  return (
    <div className="min-h-screen flex flex-col pt-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 px-6">
      <Head>
        <title>Next.js/React Development | Cameron Lowndes</title>
        <meta
          name="description"
          content="Professional Next.js and React development services tailored for performance, scalability, and modern design."
        />
      </Head>

      <main className="flex-grow max-w-6xl mx-auto w-full py-20 text-white">
        {/* Client component handles all animations, packages, forms */}
        <NextJsReactClient />
      </main>
    </div>
  );
}
