"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import SocialMediaContactForm from "../ContactForms/SocialMediaContactForm";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const packages = [
  { title: "Starter", price: "£149", features: ["2 posts/week", "Basic analytics report", "1 platform management"], color: "green" },
  { title: "Professional", price: "£299", features: ["5 posts/week", "Analytics & engagement tracking", "Up to 2 platforms", "Content calendar planning"], color: "blue" },
  { title: "Premium", price: "£499+", features: ["Daily posts", "Advanced analytics & reports", "Up to 4 platforms", "Ad campaigns setup",], color: "purple" },
];

const addOns = [
  "Instagram/Facebook ad campaigns: +£150/month",
  "Custom graphics & video content: +£200",
  "Influencer collaboration: +£250",
];

export default function SocialMediaOfferClient() {
  return (
    <motion.main className="min-h-screen flex flex-col pt-16 bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 px-6 text-white">
      {/* Header */}
      <motion.header className="text-center mb-16 max-w-3xl mx-auto" custom={0} variants={fadeInUp}>
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-lg">
          Social Media Management & Help
        </h1>
        <p className="text-xl sm:text-2xl text-indigo-300 leading-relaxed font-light">
          Grow your online presence with professional social media support — content creation, posting, engagement tracking, and more.
        </p>
      </motion.header>

      {/* Terms Button */}
      <motion.div className="flex justify-center mb-20" custom={1} variants={fadeInUp}>
        <Link href="/terms/SocialMediaTerms">
          <button className="cursor-pointer bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-4 rounded-full shadow-xl hover:scale-110 transition-transform duration-300 font-semibold text-lg">
            Terms & Conditions{"\n"}for Social Media Services
          </button>
        </Link>
      </motion.div>

      {/* What's Included */}
      <motion.section className="bg-indigo-800 bg-opacity-70 p-8 rounded-3xl shadow-2xl mb-16 max-w-4xl mx-auto" custom={2} variants={fadeInUp}>
        <h2 className="text-3xl font-semibold mb-6 border-b-4 border-pink-500 inline-block pb-2">
          What’s Included
        </h2>
        <ul className="space-y-5 text-indigo-100 text-lg">
          {["Content creation tailored to your brand", "Regular posting schedule on selected platforms", "Engagement monitoring & response", "Monthly performance report", "Strategy & growth consultation"].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="text-pink-400 mt-1" size={24} />
              <span className="font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </motion.section>

      {/* Packages */}
      <motion.section className="mb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" custom={3} variants={fadeInUp}>
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-12 tracking-wide">💼 Packages & Pricing</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {packages.map(({ title, price, features, color }, i) => (
            <motion.div
              key={title}
              className={`bg-gradient-to-tr ${color === "green" ? "from-green-900 via-green-800 to-green-700" : color === "blue" ? "from-blue-900 via-blue-800 to-blue-700" : "from-purple-900 via-purple-800 to-purple-700"} rounded-3xl p-8 shadow-2xl border-4 border-white flex flex-col text-white hover:shadow-[0_0_30px_5px_rgba(255,255,255,0.3)] transition-shadow duration-400`}
              custom={i}
              variants={fadeInUp}
            >
              <h3 className="text-3xl font-extrabold mb-3 drop-shadow-lg">{title}</h3>
              <p className="text-2xl font-bold mb-6">{price}</p>
              <ul className="flex-1 space-y-4 text-lg font-semibold drop-shadow-sm">
                {features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 text-white" />
                    {f}
                  </li>
                ))}
              </ul>
              <button disabled className="mt-8 bg-white bg-opacity-20 text-white font-semibold py-3 rounded-xl cursor-default select-none opacity-70">
                Coming Soon
              </button>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Add-Ons */}
      <motion.section className="bg-indigo-900 bg-opacity-75 p-8 rounded-3xl shadow-2xl max-w-3xl mx-auto mb-20" custom={4} variants={fadeInUp}>
        <h2 className="text-3xl font-semibold text-center mb-8 text-pink-400 tracking-wide">✨ Add-Ons</h2>
        <ul className="list-disc pl-8 space-y-3 text-indigo-300 text-lg font-medium">{addOns.map((item, i) => (<li key={i}>{item}</li>))}</ul>
      </motion.section>

      {/* Contact Form */}
      <motion.section className="max-w-4xl mx-auto px-6 py-12 bg-gradient-to-tr from-pink-700 via-purple-800 to-indigo-900 rounded-3xl shadow-3xl" custom={5} variants={fadeInUp}>
        <h2 className="text-3xl font-extrabold text-center text-white mb-8 drop-shadow-lg tracking-wider">
          Ready to get started? Fill out the form below:
        </h2>
        <SocialMediaContactForm />
        <div className="text-center pt-12">
          <Link href="/services">
            <button className="cursor-pointer inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full shadow-xl hover:scale-110 hover:shadow-2xl transition-transform duration-300 font-semibold text-lg">
              ⬅ Back to Services
            </button>
          </Link>
        </div>
      </motion.section>
    </motion.main>
  );
}
