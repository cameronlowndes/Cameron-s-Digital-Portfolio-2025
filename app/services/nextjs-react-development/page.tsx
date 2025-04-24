import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function NextJsReactDevelopment() {
  return (
    <div className="min-h-screen flex flex-col pt-16 bg-gradient-to-b from-white to-gray-100 px-4">
      <Head>
        <title>Next.js/React Development | Cameron Lowndes</title>
        <meta
          name="description"
          content="Professional Next.js and React development services tailored for performance, scalability, and modern design."
        />
      </Head>

      <Navbar />

      <main className="max-w-6xl mx-auto w-full py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Next.js / React Development
          </h1>
          <p className="text-xl text-gray-700">
            Build blazing-fast, scalable web apps with cutting-edge tech.
          </p>
        </div>

        {/* Packages */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">💼 Packages & Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border-t-8 border-green-500 flex flex-col">
              <h3 className="text-2xl font-bold text-green-600 mb-2">🟢 Starter</h3>
              <p className="text-lg font-semibold mb-4">£499</p>
              <ul className="space-y-2 text-gray-700 flex-1">
                <li><CheckCircle className="inline mr-2 text-green-500" /> 1–3 pages (Home, About, Contact)</li>
                <li><CheckCircle className="inline mr-2 text-green-500" /> Responsive design</li>
                <li><CheckCircle className="inline mr-2 text-green-500" /> SEO-friendly setup</li>
                <li><CheckCircle className="inline mr-2 text-green-500" /> Simple contact form</li>
                <li><CheckCircle className="inline mr-2 text-green-500" /> Vercel deployment</li>
                <li><CheckCircle className="inline mr-2 text-green-500" /> 5–7 day turnaround</li>
              </ul>
            </div>

            {/* Professional */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border-t-8 border-blue-600 flex flex-col">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">🔵 Professional</h3>
              <p className="text-lg font-semibold mb-4">£999</p>
              <ul className="space-y-2 text-gray-700 flex-1">
                <li><CheckCircle className="inline mr-2 text-blue-600" /> Up to 6 pages</li>
                <li><CheckCircle className="inline mr-2 text-blue-600" /> CMS integration</li>
                <li><CheckCircle className="inline mr-2 text-blue-600" /> Custom UI components</li>
                <li><CheckCircle className="inline mr-2 text-blue-600" /> Performance tuning</li>
                <li><CheckCircle className="inline mr-2 text-blue-600" /> Google Analytics setup</li>
                <li><CheckCircle className="inline mr-2 text-blue-600" /> Admin dashboard (optional)</li>
              </ul>
            </div>

            {/* Premium */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border-t-8 border-purple-600 flex flex-col">
              <h3 className="text-2xl font-bold text-purple-600 mb-2">🟣 Premium</h3>
              <p className="text-lg font-semibold mb-4">£1999+</p>
              <ul className="space-y-2 text-gray-700 flex-1">
                <li><CheckCircle className="inline mr-2 text-purple-600" /> Unlimited pages & components</li>
                <li><CheckCircle className="inline mr-2 text-purple-600" /> API integrations</li>
                <li><CheckCircle className="inline mr-2 text-purple-600" /> Authentication & roles</li>
                <li><CheckCircle className="inline mr-2 text-purple-600" /> Advanced dashboard</li>
                <li><CheckCircle className="inline mr-2 text-purple-600" /> Full CMS setup</li>
                <li><CheckCircle className="inline mr-2 text-purple-600" /> Ongoing support</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="mb-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">✨ Add-Ons</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>E-commerce setup (Stripe + product pages): +£400</li>
            <li>Multilingual support: +£250</li>
            <li>Hosting migration: +£100</li>
            <li>Monthly maintenance: £75/month</li>
          </ul>
        </section>

        {/* Tech stack */}
        <section className="mb-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🧰 Tech Stack</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li><strong>Frontend:</strong> React, Next.js, Tailwind, TypeScript</li>
            <li><strong>CMS:</strong> Sanity, Strapi, Contentful</li>
            <li><strong>Hosting:</strong> Vercel, Netlify, DigitalOcean</li>
            <li><strong>Auth:</strong> Clerk, Firebase, NextAuth.js</li>
          </ul>
        </section>

        {/* Form */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
            📩 Let’s Work Together
          </h2>
          <div className="w-full aspect-[4/3] max-w-3xl mx-auto">
            <iframe
              src="https://forms.gle/6tUbkKQpebgotUpu6"
              width="100%"
              height="100%"
              className="w-full h-[700px] border-0 rounded-xl shadow-lg"
              loading="lazy"
              allowFullScreen
            >
              Loading…
            </iframe>
          </div>
        </section>

        <div className="text-center">
          <Link href="/services">
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform">
              ⬅ Back to Services
            </button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
