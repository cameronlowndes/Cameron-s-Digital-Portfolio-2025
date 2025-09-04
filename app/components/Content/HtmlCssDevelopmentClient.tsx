"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ServiceCard from "../ServiceCard"; // adjust path if needed
import HTMLContactForm from "../../components/ContactForms/HTMLContactForm";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

function PricingCard({
  title,
  price,
  color,
  features,
  custom = 0,
}: {
  title: string;
  price: string;
  color: "green" | "blue" | "purple";
  features: string[];
  custom?: number;
}) {
  const gradient =
    color === "green"
      ? "from-green-900 via-green-800 to-green-700"
      : color === "blue"
      ? "from-blue-900 via-blue-800 to-blue-700"
      : "from-purple-900 via-purple-800 to-purple-700";

  return (
    <motion.div
      className={`bg-gradient-to-tr ${gradient} rounded-3xl p-8 shadow-2xl border-4 border-white flex flex-col text-white hover:shadow-[0_0_30px_5px_rgba(255,255,255,0.3)] transition-shadow duration-400`}
      custom={custom}
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <h3 className="text-3xl font-extrabold mb-3 drop-shadow-lg">{title}</h3>
      <p className="text-2xl font-bold mb-6">{price}</p>
      <ul className="flex-1 space-y-4 text-lg font-semibold drop-shadow-sm">
        {features.map((f, idx) => (
          <li key={idx} className="flex items-center gap-3">
            <span className="w-6 h-6 flex-shrink-0 text-white">✔️</span>
            {f}
          </li>
        ))}
      </ul>
      <button
        disabled
        className="mt-8 bg-white bg-opacity-20 text-white font-semibold py-3 rounded-xl cursor-default select-none opacity-70"
      >
        Coming Soon
      </button>
    </motion.div>
  );
}

export default function HtmlCssDevelopmentClient() {
  return (
    <motion.main
      className="flex-1 w-full max-w-6xl mx-auto px-6 pt-28 pb-36"
      initial="hidden"
      animate="visible"
    >
      {/* Intro */}
      <motion.header
        className="text-center mb-16 max-w-3xl mx-auto"
        custom={0}
        variants={fadeInUp}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
          HTML / CSS Development
        </h1>
        <p className="text-2xl font-light text-indigo-200 leading-relaxed">
          Need a simple, responsive, and efficient website? I build clean, static
          HTML/CSS pages that load fast and work beautifully across all devices —
          perfect for portfolios, landing pages, and business sites.
        </p>
      </motion.header>

      {/* Terms Link */}
      <motion.div
        className="flex justify-center mb-20"
        custom={1}
        variants={fadeInUp}
      >
        <Link href="/terms/BuildTerms" passHref>
          <button className="cursor-pointer bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 whitespace-pre-line font-semibold tracking-wide">
            Terms and Conditions{"\n"}for{"\n"}HTML/CSS Development
          </button>
        </Link>
      </motion.div>

      {/* Packages */}
      <motion.section
        className="mb-32"
        custom={2}
        variants={fadeInUp}
      >
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
  <ServiceCard
    title="🟢 Starter"
    price="£499"
    gradient="bg-gradient-to-tr from-green-900 via-green-800 to-green-700"
    features={[
      "1–2 static pages",
      "Responsive on mobile/tablet",
      "Clean, semantic HTML & CSS",
      "Basic styling and layout",
      "Hosting instructions included",
    ]}
  />

  <ServiceCard
    title="🔵 Professional"
    price="£550"
    gradient="bg-gradient-to-tr from-blue-900 via-blue-800 to-blue-700"
    features={[
      "Up to 5 pages",
      "Responsive with Flexbox/Grid",
      "Custom animations",
      "Contact form setup",
      "Basic SEO included",
    ]}
  />

  <ServiceCard
    title="🟣 Premium"
    price="£750+"
    gradient="bg-gradient-to-tr from-purple-900 via-purple-800 to-purple-700"
    features={[
      "Unlimited static pages",
      "Advanced layouts & components",
      "Accessibility best practices",
      "Custom modals, sliders, forms",
      "Hosting setup (Netlify/Vercel)",
    ]}
  />
</div>

      </motion.section>

      {/* Add-ons */}
      <motion.section
        className="mb-28 max-w-3xl mx-auto bg-indigo-900 bg-opacity-70 rounded-3xl p-10 shadow-2xl"
        custom={3}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-extrabold mb-6 text-indigo-100 tracking-wide">
          ✨ Add-Ons
        </h2>
        <ul className="list-disc pl-8 text-indigo-200 space-y-3 text-lg font-medium">
          <li>E-commerce-ready templates: <span className="font-bold">+£250</span></li>
          <li>Newsletter signup integration: <span className="font-bold">+£200</span></li>
          <li>Multilingual static site support: <span className="font-bold">+£150</span></li>
          <li>Monthly updates + hosting support: <span className="font-bold">+£150/mo</span></li>
          <li>JavaScript functionality (sliders, modals, validation): <span className="font-bold">+£200</span></li>
          <li>Remove watermark: <span className="font-bold">+£150</span></li>
        </ul>
      </motion.section>

      {/* Contact Form */}
      <motion.section
        className="mb-32 max-w-3xl mx-auto"
        custom={4}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-extrabold text-center mb-8 text-indigo-100 tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
          📩 Let’s Work Together
        </h2>
        <HTMLContactForm />
      </motion.section>

      {/* Back Button */}
      <motion.div
        className="text-center pb-10"
        custom={5}
        variants={fadeInUp}
      >
        <Link href="/services" passHref>
          <button className="cursor-pointer bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-[0_4px_20px_rgba(139,92,246,0.8)] transition transform hover:-translate-y-1 duration-300 font-semibold">
            ⬅ Back to Services
          </button>
        </Link>
      </motion.div>
    </motion.main>
  );
}
