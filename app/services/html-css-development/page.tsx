// pages/services/html-css-development.tsx

import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function HtmlCssDevelopment() {
  return (
    <div className="min-h-screen flex flex-col pt-16 px-4">
      <Head>
        <title>HTML/CSS Development | Cameron Lowndes</title>
        <meta
          name="description"
          content="Professional HTML and CSS development for clean, responsive, and fast-loading websites. Ideal for static sites and landing pages."
        />
      </Head>

      <Navbar />

      <main className="max-w-4xl mx-auto w-full py-16">
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
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Responsive HTML5 and CSS3 markup</li>
            <li>Cross-browser compatibility</li>
            <li>Optimized page structure for SEO</li>
            <li>Pixel-perfect design from Figma/Sketch</li>
            <li>Lightweight and fast-loading pages</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Ready to get started? Fill out the form below:
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
