// pages/services/html-css-development.tsx

import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function HtmlCssDevelopment() {
  // Helper function to get border class dynamically
  const getBorderClass = (color: string) => {
    // e.g. "green-500" => "border-green-500"
    return `border-l-4 border-${color} pl-4`;
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Head>
        <title>HTML/CSS Development | Cameron Lowndes</title>
        <meta
          name="description"
          content="Professional HTML and CSS development for clean, responsive, and fast-loading websites. Ideal for static sites and landing pages."
        />
      </Head>

      <Navbar />

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 pt-20 pb-32">

        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">HTML/CSS Development</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Need a simple, responsive, and efficient website? I build clean, static HTML/CSS pages that load fast and work beautifully across all devices—perfect for portfolios, landing pages, and business sites.
          </p>
        </header>

        {/* Center the button horizontally only, remove min-h-screen */}
        <div className="flex justify-center mb-16">
          <Link href="/terms/BuildTerms" passHref>
            <button
              className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform text-center whitespace-pre-line"
              type="button"
            >
              Terms and Conditions{"\n"}for{"\n"}HTML/CSS Devlopment
            </button>
          </Link>
        </div>

        <section className="bg-gray-100 p-6 rounded-2xl shadow mb-12">
          <h2 className="text-2xl font-semibold mb-4">What’s Included</h2>
          <ul className="space-y-3 text-gray-700">
            {[
              "Responsive HTML5 and CSS3 markup",
              "Cross-browser compatibility",
              "Optimized page structure for SEO",
              "Pixel-perfect design from Figma/Sketch",
              "Lightweight and fast-loading pages",
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle className="text-green-600 mt-1 mr-2" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow mb-12">
          <h2 className="text-2xl font-semibold text-center mb-6">
            💼 Packages & Pricing
          </h2>
          <div className="space-y-10">
            {[
              {
                title: "🟢 Starter – £199",
                features: [
                  "1–2 static pages",
                  "Responsive on mobile/tablet",
                  "Clean, semantic HTML & CSS",
                  "Basic styling and layout",
                  "Hosting instructions included",
                ],
                borderColor: "green-500",
                turnaround: "3–5 days",
              },
              {
                title: "🔵 Professional – £399",
                features: [
                  "Up to 5 pages",
                  "Responsive with Flexbox/Grid",
                  "Custom animations",
                  "Contact form setup",
                  "Basic SEO included",
                ],
                borderColor: "blue-500",
                turnaround: "5–7 days",
              },
              {
                title: "🟣 Premium – £699+",
                features: [
                  "Unlimited static pages",
                  "Advanced layouts & components",
                  "Accessibility best practices",
                  "Custom modals, sliders, forms",
                  "Hosting setup (Netlify/Vercel)",
                ],
                borderColor: "purple-500",
                turnaround: "Custom",
              },
            ].map((pkg, i) => (
              <div
                key={i}
                className={`pl-4 border-l-4 ${
                  pkg.borderColor === "green-500"
                    ? "border-green-500"
                    : pkg.borderColor === "blue-500"
                    ? "border-blue-500"
                    : "border-purple-500"
                }`}
              >
                <h3 className="text-xl font-bold">{pkg.title}</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                  {pkg.features.map((feature, j) => (
                    <li key={j}>{feature}</li>
                  ))}
                </ul>
                <p className="mt-2 text-sm text-gray-600">
                  Turnaround: {pkg.turnaround}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-50 p-6 rounded-2xl shadow mb-12">
          <h2 className="text-2xl font-semibold text-center mb-4">✨ Add-Ons</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 max-w-xl mx-auto">
            <li>E-commerce-ready templates: +£250</li>
            <li>Newsletter signup integration: +£200</li>
            <li>Multilingual static site support: +£150</li>
            <li>Monthly updates + hosting support: +£150/mo</li>
            <li>JavaScript functionality (sliders, modals, validation): +£200</li>
            <li>Remove watermark: +£150</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-center mb-6">
            Ready to get started? Fill out the form below:
          </h2>
          <div className="aspect-[4/3] max-w-3xl mx-auto mb-10">
            <iframe
              src="https://forms.gle/y5SKPsfhdXHAZGgg6"
              className="w-full h-[600px] border-0 rounded-xl shadow-lg"
              loading="lazy"
              allowFullScreen
              title="Contact Form"
            >
              Loading…
            </iframe>
          </div>
          <div className="text-center pb-6 sm:pb-0">
            <Link href="/services" passHref>
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform" type="button">
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
