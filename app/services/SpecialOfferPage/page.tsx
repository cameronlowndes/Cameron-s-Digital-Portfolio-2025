"use client";

import Head from "next/head";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import DiscountedDevOfferForm from "../../components/ContactForms/DiscountedDevOfferfrorm"


export default function DiscountedDevOffer() {
  return (
    <div className="min-h-screen flex flex-col pt-16 bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 px-6 text-white">
      <Head>
        <title>Special Discount for Charities & Small Businesses | Cameron Lowndes</title>
        <meta
          name="description"
          content="Affordable, high-quality Next.js and React development services for charities and small businesses. Tailored for impact and accessibility."
        />
      </Head>

      <main className="max-w-7xl mx-auto w-full py-20">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto relative">
          <h1 className="text-6xl font-extrabold drop-shadow-[0_4px_8px_rgba(0,0,0,0.7)] mb-6 tracking-tight animate-fadeInUp">
            Special Discount for Charities & Small Businesses
          </h1>
          <p className="text-2xl text-indigo-300 mb-8 animate-fadeInUp delay-200">
            Empower your cause or startup with modern, scalable web solutions.
          </p>
          <Link href="/terms/discounted-dev-offer" passHref>
            <button className="bg-gradient-to-r from-purple-600 to-blue-500 px-8 py-4 rounded-full shadow-xl hover:scale-110 hover:shadow-2xl transition-transform font-semibold whitespace-pre-line animate-fadeInUp delay-400">
              Terms and Conditions{"\n"}for{"\n"}charities and small business
            </button>
          </Link>
        </div>

        {/* Packages */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold text-center mb-14 drop-shadow-lg tracking-wide">
            💼 Discounted Packages
          </h2>
          <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-10 items-stretch">
            {/* Starter */}
            <div className="bg-gradient-to-tr from-green-700 to-green-500 rounded-3xl shadow-2xl p-8 border-t-8 border-green-300 flex flex-col transform hover:scale-105 transition-transform duration-300 h-full">
              <h3 className="text-3xl font-extrabold mb-3 flex items-center gap-3">
                <span>🟢</span> Starter
              </h3>
              <p className="text-2xl font-bold mb-6">£299</p>
              <ul className="space-y-3 text-green-100 flex-1 text-lg font-medium">
                <li><CheckCircle className="inline mr-3 text-green-200" />1–3 pages</li>
                <li><CheckCircle className="inline mr-3 text-green-200" />SEO-ready & responsive</li>
                <li><CheckCircle className="inline mr-3 text-green-200" />Contact form setup</li>
                <li><CheckCircle className="inline mr-3 text-green-200" />Vercel deployment</li>
              </ul>
            </div>

            {/* Professional */}
            <div className="bg-gradient-to-tr from-blue-700 to-blue-500 rounded-3xl shadow-2xl p-8 border-t-8 border-blue-300 flex flex-col transform hover:scale-105 transition-transform duration-300 h-full">
              <h3 className="text-3xl font-extrabold mb-3 flex items-center gap-3">
                <span>🔵</span> Professional
              </h3>
              <p className="text-2xl font-bold mb-6">£599</p>
              <ul className="space-y-3 text-blue-100 flex-1 text-lg font-medium">
                <li><CheckCircle className="inline mr-3 text-blue-200" />Up to 6 pages</li>
                <li><CheckCircle className="inline mr-3 text-blue-200" />CMS integration</li>
                <li><CheckCircle className="inline mr-3 text-blue-200" />Custom components</li>
                <li><CheckCircle className="inline mr-3 text-blue-200" />Google Analytics setup</li>
              </ul>
            </div>

            {/* Premium */}
            <div className="bg-gradient-to-tr from-purple-700 to-purple-500 rounded-3xl shadow-2xl p-8 border-t-8 border-purple-300 flex flex-col transform hover:scale-105 transition-transform duration-300 h-full">
              <h3 className="text-3xl font-extrabold mb-3 flex items-center gap-3">
                <span>🟣</span> Premium
              </h3>
              <p className="text-2xl font-bold mb-6">£1,000</p>
              <ul className="space-y-3 text-purple-200 flex-1 text-lg font-medium">
                <li><CheckCircle className="inline mr-3 text-purple-300" />10+ pages</li>
                <li><CheckCircle className="inline mr-3 text-purple-300" />API integrations</li>
                <li><CheckCircle className="inline mr-3 text-purple-300" />Authentication system</li>
                <li><CheckCircle className="inline mr-3 text-purple-300" />Dashboard & CMS</li>
              </ul>
            </div>

            {/* Ultimate */}
            <div className="bg-gradient-to-tr from-yellow-600 to-yellow-400 rounded-3xl shadow-2xl p-8 border-t-9 border-yellow-200 flex flex-col transform hover:scale-105 transition-transform duration-300 h-full">
              <h3 className="text-3xl font-extrabold mb-3 flex items-center gap-3 text-white">
                <span>⭐</span> Ultimate
              </h3>
              <p className="text-2xl font-bold mb-6 text-white">£1,500+</p>
              <ul className="space-y-3 text-yellow-100 flex-1 text-lg font-medium">
                <li><CheckCircle className="inline mr-3 text-yellow-200" />Unlimited features</li>
                <li><CheckCircle className="inline mr-3 text-yellow-200" />Full app development</li>
                <li><CheckCircle className="inline mr-3 text-yellow-200" />Priority support</li>
                <li className="whitespace-nowrap"><CheckCircle className="inline mr-3 text-yellow-200" />Ongoing support £120+</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="mb-32 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 tracking-wide drop-shadow-lg">✨ Optional Add-Ons</h2>
          <ul className="list-disc pl-8 text-yellow-100 space-y-3 text-lg font-semibold">
            <li>E-commerce integration (Stripe): +£300</li>
            <li>Multilingual support: +£200</li>
            <li>Monthly updates & monitoring: +£160/month</li>
            <li>Hosting migration & setup: +£75</li>
            <li>Remove attribution: +£150</li>
          </ul>
        </section>

        {/* Eligibility */}
        <section className="mb-32 max-w-4xl mx-auto bg-white bg-opacity-10 rounded-3xl p-10 shadow-lg backdrop-blur-md border border-white/20">
          <h2 className="text-3xl font-bold text-black mb-6 tracking-wide text-center drop-shadow-md">
            📜 Eligibility Requirements
          </h2>
          <p className="text-black mb-4 text-center max-w-xl mx-auto">
            This offer is exclusively for:
          </p>
          <ul className="list-disc pl-8 space-y-4 text-black text-lg font-medium max-w-xl mx-auto">
            <li><strong>Charities:</strong> Must be registered with a UK Charity Commission (or equivalent in your country).</li>
            <li><strong>Small Businesses:</strong> Must have under 10 employees and under £200k annual turnover.</li>
            <li>Verification may be requested (e.g. registration number or business documentation).</li>
            <li>This offer is intended to support early-stage growth and community impact.</li>
            <li>We also offer special payment options for charities and small businesses, detailed in the contract.</li>
          </ul>
        </section>

        {/* Contact Form */}
        <section className="mb-24 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-white drop-shadow-md tracking-wide">
            📩 Apply for Discounted Services
          </h2>
          
           <DiscountedDevOfferForm />
        </section>

        {/* Back Button */}
        <div className="text-center mb-20">
          <Link href="/services">
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full shadow-xl hover:scale-110 hover:shadow-2xl transition-transform font-semibold tracking-wide">
              ⬅ Back to Services
            </button>
          </Link>
        </div>
      </main>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease forwards;
        }
        .animate-fadeInUp.delay-200 {
          animation-delay: 0.2s;
        }
        .animate-fadeInUp.delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
}
