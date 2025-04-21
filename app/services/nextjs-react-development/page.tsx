// pages/services/nextjs-react-development.tsx

import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function NextJsReactDevelopment() {
  return (
    <div className="min-h-screen flex flex-col pt-16 px-4">
      <Head>
        <title>Next.js/React Development | Cameron Lowndes</title>
        <meta
          name="description"
          content="Professional Next.js and React development services tailored for performance, scalability, and modern design."
        />
      </Head>

      <Navbar />

      <main className="max-w-4xl mx-auto w-full py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Next.js / React Development
        </h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Build fast, scalable, and modern web applications using industry-standard technologies like Next.js and React. Perfect for startups, businesses, and personal projects looking for custom functionality and a clean user experience.
        </p>

        <section className="bg-gray-100 p-6 rounded-xl mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            What’s Included
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Performance-optimized Next.js/React frontends</li>
            <li>Responsive design for mobile and desktop</li>
            <li>SEO best practices implemented</li>
            <li>Integration with APIs and CMSs</li>
            <li>Deployment and CI/CD setup</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Interested? Submit your project using the form below:
          </h2>

          <div className="w-full aspect-[4/3] max-w-3xl mx-auto">
            <iframe
              src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
              width="100%"
              height="100%"
              className="w-full h-[700px] border-0 rounded-lg"
              loading="lazy"
              allowFullScreen
            >
              Loading…
            </iframe>
          </div>
        </section>

        <div className="text-center">
          <Link href="/services">
            <button className="bg-lavender-400 text-black px-6 py-3 rounded-md hover:bg-lavender-500 transition">
              Back to Services
            </button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
