"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import HTMLContactForm from "../../components/ContactForms/HTMLContactForm";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function HtmlCssDevelopmentClient() {
  return (
    <motion.main
      className="flex-1 w-full max-w-6xl mx-auto px-6 pt-28 pb-36"
      initial="hidden"
      animate="visible"
    >
      <motion.header
        className="text-center mb-16 max-w-3xl mx-auto"
        custom={0}
        variants={fadeInUp}
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-lg">
          HTML/CSS Development
        </h1>
        <p className="text-xl sm:text-2xl text-indigo-300 leading-relaxed font-light">
          Need a simple, responsive, and efficient website? I build clean, static
          HTML/CSS pages that load fast and work beautifully across all devices —
          perfect for portfolios, landing pages, and business sites.
        </p>
      </motion.header>

      <motion.div className="flex justify-center mb-20" custom={1} variants={fadeInUp}>
        <Link href="/terms/BuildTerms" passHref>
          <button
            type="button"
            className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-4 rounded-full shadow-xl hover:scale-110 hover:shadow-2xl transition-transform duration-300 font-semibold text-lg whitespace-pre-line select-none"
          >
            Terms and Conditions{"\n"}for{"\n"}HTML/CSS Development
          </button>
        </Link>
      </motion.div>

      <motion.section
        className="bg-indigo-800 bg-opacity-70 p-8 rounded-3xl shadow-2xl mb-16 max-w-4xl mx-auto"
        custom={2}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-semibold mb-6 border-b-4 border-pink-500 inline-block pb-2">
          What’s Included
        </h2>
        <ul className="space-y-5 text-indigo-100 text-lg">
          {[
            "Responsive HTML5 and CSS3 markup",
            "Cross-browser compatibility",
            "Optimized page structure for SEO",
            "Pixel-perfect design from Figma/Sketch",
            "Lightweight and fast-loading pages",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="text-pink-400 mt-1" size={24} />
              <span className="font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </motion.section>

      <motion.section
        className="bg-gradient-to-r from-purple-700 via-indigo-800 to-purple-700 p-10 rounded-3xl shadow-2xl mb-20 max-w-5xl mx-auto text-indigo-100"
        custom={3}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold text-center mb-10 tracking-wide drop-shadow-md">
          💼 Packages & Pricing
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
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
              borderColor: "border-green-400",
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
              borderColor: "border-blue-400",
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
              borderColor: "border-purple-400",
              turnaround: "Custom",
            },
          ].map((pkg, i) => (
            <div
              key={i}
              className={`bg-indigo-900 bg-opacity-70 rounded-2xl p-6 border-l-8 ${pkg.borderColor} shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300`}
            >
              <h3 className="text-2xl font-extrabold mb-4">{pkg.title}</h3>
              <ul className="list-disc pl-6 space-y-2 text-indigo-200 font-medium">
                {pkg.features.map((feature, j) => (
                  <li key={j}>{feature}</li>
                ))}
              </ul>
              <p className="mt-6 text-indigo-300 italic text-sm tracking-wide">
                Turnaround: {pkg.turnaround}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="bg-indigo-900 bg-opacity-75 p-8 rounded-3xl shadow-2xl max-w-3xl mx-auto mb-20"
        custom={4}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-semibold text-center mb-8 text-pink-400 tracking-wide">
          ✨ Add-Ons
        </h2>
        <ul className="list-disc pl-8 space-y-3 text-indigo-300 text-lg font-medium">
          <li>E-commerce-ready templates: +£250</li>
          <li>Newsletter signup integration: +£200</li>
          <li>Multilingual static site support: +£150</li>
          <li>Monthly updates + hosting support: +£150/mo</li>
          <li>JavaScript functionality (sliders, modals, validation): +£200</li>
          <li>Remove watermark: +£150</li>
        </ul>
      </motion.section>

      <motion.section
        className="max-w-4xl mx-auto px-6 py-12 bg-gradient-to-tr from-pink-700 via-purple-800 to-indigo-900 rounded-3xl shadow-3xl"
        custom={5}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-extrabold text-center text-white mb-8 drop-shadow-lg tracking-wider">
          Ready to get started? Fill out the form below:
        </h2>
        <HTMLContactForm />
        <div className="text-center pt-12">
          <Link href="/services" passHref>
            <button
              type="button"
              className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full shadow-xl hover:scale-110 hover:shadow-2xl transition-transform duration-300 font-semibold text-lg"
            >
              ⬅ Back to Services
            </button>
          </Link>
        </div>
      </motion.section>
    </motion.main>
  );
}
