// pages/services/html-css-development.tsx

import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function HtmlCssDevelopment() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>HTML/CSS Development | Cameron Lowndes</title>
        <meta
          name="description"
          content="Professional HTML and CSS development for clean, responsive, and fast-loading websites. Ideal for static sites and landing pages."
        />
      </Head>

      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto w-full pt-16 pb-32 px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          HTML/CSS Development
        </h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Need a simple, responsive, and efficient website? I build clean, static HTML/CSS pages that load fast and work beautifully across all devices—perfect for portfolios, landing pages, and business sites.
        </p>

        <section className="bg-gray-100 p-6 rounded-xl mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            What’s Included
          </h2>
          <ul className="pl-6 text-gray-700 space-y-3">
            <li className="flex items-start"><CheckCircle className="text-green-600 mt-1 mr-2" /> Responsive HTML5 and CSS3 markup</li>
            <li className="flex items-start"><CheckCircle className="text-green-600 mt-1 mr-2" /> Cross-browser compatibility</li>
            <li className="flex items-start"><CheckCircle className="text-green-600 mt-1 mr-2" /> Optimized page structure for SEO</li>
            <li className="flex items-start"><CheckCircle className="text-green-600 mt-1 mr-2" /> Pixel-perfect design from Figma/Sketch</li>
            <li className="flex items-start"><CheckCircle className="text-green-600 mt-1 mr-2" /> Lightweight and fast-loading pages</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-md mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">💼 Packages & Pricing</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-bold">🟢 Starter – £199</h3>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                <li>1–2 static pages</li>
                <li>Responsive on mobile/tablet</li>
                <li>Clean, semantic HTML & CSS</li>
                <li>Basic styling and layout</li>
                <li>Hosting instructions included</li>
              </ul>
              <p className="mt-2 text-sm text-gray-600">Turnaround: 3–5 days</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-bold">🔵 Professional – £399</h3>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                <li>Up to 5 pages</li>
                <li>Responsive with Flexbox/Grid</li>
                <li>Custom animations</li>
                <li>Contact form setup</li>
                <li>Basic SEO included</li>
              </ul>
              <p className="mt-2 text-sm text-gray-600">Turnaround: 5–7 days</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="text-xl font-bold">🟣 Premium – £699+</h3>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                <li>Unlimited static pages</li>
                <li>Advanced layouts & components</li>
                <li>Accessibility best practices</li>
                <li>Custom modals, sliders, forms</li>
                <li>Hosting setup (Netlify/Vercel)</li>
              </ul>
              <p className="mt-2 text-sm text-gray-600">Turnaround: custom</p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 p-6 rounded-xl shadow mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">✨ Add-Ons</h2>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>E-commerce-ready templates: +£250</li>
            <li>Newsletter signup integration: +200</li>
            <li>Multilingual static site support: +£150</li>
            <li>Monthly updates + hosting support: £150/mo</li>
            <li>JavaScript functionality (sliders, modals, validation): +£200</li>
            <li>Remove WaterMark: +£150</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Ready to get started? Fill out the form below:
          </h2>

          <div className="w-full aspect-[4/3] max-w-3xl mx-auto mb-8">
            <iframe
              src="https://forms.gle/y5SKPsfhdXHAZGgg6"
              width="100%"
              height="100%"
           className="w-full h-[600px] border-0 rounded-xl shadow-lg"
              loading="lazy"
              allowFullScreen
            >
              Loading…
            </iframe>
          </div>

          <div className="text-center mt-8">
            <Link href="/services">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform">
                ⬅ Back to Services
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
