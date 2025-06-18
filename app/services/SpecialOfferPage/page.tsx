import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function DiscountedDevOffer() {
  return (
    <div className="min-h-screen flex flex-col pt-16 bg-gradient-to-b fgray-100 px-4">
      <Head>
        <title> Special Discount for Charities & Small Businesses | Cameron Lowndes</title>
        <meta
          name="description"
          content="Affordable, high-quality Next.js and React development services for charities and small businesses. Tailored for impact and accessibility."
        />
      </Head>

      <Navbar />

      <main className="max-w-6xl mx-auto w-full py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Special Discount for Charities & Small Businesses
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Empower your cause or startup with modern, scalable web solutions.
          </p>

          {/* 🚀 New Button Linking to This Offer */}
          <Link href="/terms/discounted-dev-offer">
            <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform">
              Trems and Conditions <br>
              </br>for <br>
              </br>charities and small bussiness 
            </button>
          </Link>
        </div>

        {/* Packages */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">💼 Discounted Packages</h2>
          <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-8">
            {/* Starter */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border-t-8 border-green-500 flex flex-col">
              <h3 className="text-2xl font-bold text-green-600 mb-2">🟢 Starter</h3>
              <p className="text-lg font-semibold mb-4">£299</p>
              <ul className="space-y-2 text-gray-700 flex-1">
                <li><CheckCircle className="inline mr-2 text-green-500" /> 1–3 pages</li>
                <li><CheckCircle className="inline mr-2 text-green-500" /> SEO-ready & responsive</li>
                <li><CheckCircle className="inline mr-2 text-green-500" /> Contact form setup</li>
                <li><CheckCircle className="inline mr-2 text-green-500" /> Vercel deployment</li>
              </ul>
            </div>

            {/* Professional */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border-t-8 border-blue-600 flex flex-col">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">🔵 Professional</h3>
              <p className="text-lg font-semibold mb-4">£599</p>
              <ul className="space-y-2 text-gray-700 flex-1">
                <li><CheckCircle className="inline mr-2 text-blue-600" /> Up to 6 pages</li>
                <li><CheckCircle className="inline mr-2 text-blue-600" /> CMS integration</li>
                <li><CheckCircle className="inline mr-2 text-blue-600" /> Custom components</li>
                <li><CheckCircle className="inline mr-2 text-blue-600" /> Google Analytics setup</li>
              </ul>
            </div>

            {/* Premium */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border-t-8 border-purple-600 flex flex-col">
              <h3 className="text-2xl font-bold text-purple-600 mb-2">🟣 Premium</h3>
              <p className="text-lg font-semibold mb-4">£1,000</p>
              <ul className="space-y-2 text-gray-700 flex-1">
                <li><CheckCircle className="inline mr-2 text-purple-600" /> 10+ pages</li>
                <li><CheckCircle className="inline mr-2 text-purple-600" /> API integrations</li>
                <li><CheckCircle className="inline mr-2 text-purple-600" /> Authentication system</li>
                <li><CheckCircle className="inline mr-2 text-purple-600" /> Dashboard & CMS</li>
              </ul>
            </div>

            {/* Ultimate */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border-t-8 border-yellow-500 flex flex-col">
              <h3 className="text-2xl font-bold text-yellow-600 mb-2">⭐ Ultimate</h3>
              <p className="text-lg font-semibold mb-4">£1,500+</p>
              <ul className="space-y-2 text-gray-700 flex-1">
                <li><CheckCircle className="inline mr-2 text-yellow-500" /> Unlimited features</li>
                <li><CheckCircle className="inline mr-2 text-yellow-500" /> Full app development</li>
                <li><CheckCircle className="inline mr-2 text-yellow-500" /> Priority support</li>
                <li><CheckCircle className="inline mr-2 text-yellow-500" /> Ongoing maintenance£120+</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="mb-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">✨ Optional Add-Ons</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>E-commerce integration (Stripe): +£300</li>
            <li>Multilingual support: +£200</li>
            <li>Monthly updates & monitoring: +£160/month</li>
            <li>Hosting migration & setup: +£75</li>
            <li>Remove attribution: +£150</li>
          </ul>
        </section>

        {/* Regulations */}
        <section className="mb-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📜 Eligibility Requirements</h2>
          <p className="text-gray-700 mb-2">
            This offer is exclusively for:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><strong>Charities:</strong> Must be registered with a UK Charity Commission (or equivalent in your country).</li>
            <li><strong>Small Businesses:</strong> Must have under 10 employees and under £200k annual turnover.</li>
            <li>Verification may be requested (e.g. registration number or business documentation).</li>
            <li>This offer is intended to support early-stage growth and community impact.</li>
            <li>We also offer special payment options for charities and small businesses, which will be detailed in the contract agreement.</li>
          </ul>
        </section>

        {/* Contact Form */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
            📩 Apply for Discounted Services
          </h2>
          <div className="w-full aspect-[4/3] max-w-3xl mx-auto">
            <iframe
              src="https://forms.gle/TjquVa2ZnUnfseAz7"
              width="100%"
              height="100%"
              className="w-full h-[600px] border-0 rounded-xl shadow-lg"
              loading="lazy"
              allowFullScreen
            >
              Loading…
            </iframe>
          </div>
        </section>

        <div className="text-center mb-20">
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
