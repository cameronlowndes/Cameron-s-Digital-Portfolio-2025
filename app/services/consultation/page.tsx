import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function ConsultationPage() {
  return (
    <div className="min-h-screen flex flex-col pt-16 bg-gradient-to-b from-white to-gray-100 px-4">
      <Head>
        <title>Consultation Services | Cameron Lowndes</title>
        <meta
          name="description"
          content="Consultation services for businesses, offering expert advice and solutions for growth and strategy."
        />
      </Head>

      <Navbar />

      <main className="max-w-6xl mx-auto w-full py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Expert Consultation Services for Your Business
          </h1>
          <p className="text-xl text-gray-700">
            Tailored solutions to help your business grow, improve efficiency, and solve complex challenges.
          </p>
        </div>

        {/* Consultation Packages */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">💼 Consultation Packages</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {/* Basic Consultation */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border-t-8 border-green-500 flex flex-col">
              <h3 className="text-2xl font-bold text-green-600 mb-2">🟢 Basic</h3>
              <p className="text-lg font-semibold mb-4">£50</p>
              <ul className="space-y-2 text-gray-700 flex-1">
                <li><CheckCircle className="inline mr-2 text-green-500" /> 1 hour consultation</li>
                <li><CheckCircle className="inline mr-2 text-green-500" /> Strategy review</li>
                <li><CheckCircle className="inline mr-2 text-green-500" /> Business assessment</li>
              </ul>
            </div>

            {/* Advanced Consultation */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border-t-8 border-blue-600 flex flex-col">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">🔵 Advanced</h3>
              <p className="text-lg font-semibold mb-4">£200</p>
              <ul className="space-y-2 text-gray-700 flex-1">
                <li><CheckCircle className="inline mr-2 text-blue-600" /> 3 hour consultation</li>
                <li><CheckCircle className="inline mr-2 text-blue-600" /> Detailed business strategy</li>
                <li><CheckCircle className="inline mr-2 text-blue-600" /> Market analysis</li>
              </ul>
            </div>

            {/* Premium Consultation */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border-t-8 border-purple-600 flex flex-col">
              <h3 className="text-2xl font-bold text-purple-600 mb-2">🟣 Premium</h3>
              <p className="text-lg font-semibold mb-4">£450</p>
              <ul className="space-y-2 text-gray-700 flex-1">
                <li><CheckCircle className="inline mr-2 text-purple-600" /> 6 hour consultation</li>
                <li><CheckCircle className="inline mr-2 text-purple-600" /> Full business audit</li>
                <li><CheckCircle className="inline mr-2 text-purple-600" /> Growth plan & implementation</li>
              </ul>
            </div>

            {/* VIP Consultation */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border-t-8 border-yellow-500 flex flex-col">
              <h3 className="text-2xl font-bold text-yellow-600 mb-2">⭐ VIP</h3>
              <p className="text-lg font-semibold mb-4">£600+</p>
              <ul className="space-y-2 text-gray-700 flex-1">
                <li><CheckCircle className="inline mr-2 text-yellow-500" /> 10+ hours consultation</li>
                <li><CheckCircle className="inline mr-2 text-yellow-500" /> Ongoing support</li>
                <li><CheckCircle className="inline mr-2 text-yellow-500" /> Full strategic planning</li>
                <li><CheckCircle className="inline mr-2 text-yellow-500" /> Exclusive insights</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
            📩 Book Your Consultation
          </h2>
          <div className="w-full aspect-[4/3] max-w-3xl mx-auto">
            <iframe
              src="https://forms.gle/EVsMZUHn8armhetx8" 
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
