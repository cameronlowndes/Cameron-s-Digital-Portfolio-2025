"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import NextContactForm from "../ContactForms/NextContactForm";
import ServiceCard from "../ServiceCard"; // make sure path is correct

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function NextJsReactClient() {
  return (
    <>
      {/* Intro */}
      <motion.div
        className="text-center mb-16 max-w-3xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={0}
      >
        <motion.h1
         className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]"
          variants={fadeInUp}
          custom={1}
        >
          Next.js / React Development
        </motion.h1>
        <motion.p
          className="text-2xl font-light text-indigo-200"
          variants={fadeInUp}
          custom={2}
        >
          Build blazing-fast, scalable web apps with cutting-edge technology and modern design.
        </motion.p>
      </motion.div>

      {/* Terms Link */}
      <motion.div
        className="flex justify-center mb-20"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={3}
      >
        <Link href="/terms/TermsNextJsReact" passHref>
          <button className="cursor-pointer bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 whitespace-pre-line font-semibold tracking-wide">
            Terms and Conditions{"\n"}for{"\n"}Next.js / React Development
          </button>
        </Link>
      </motion.div>

      {/* Packages */}
      <motion.section
        className="mb-32"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={4}
      >
        <h2 className="text-4xl font-extrabold text-center mb-12 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] tracking-wide">
          💼 Packages & Pricing
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <ServiceCard
            title="🟢 Starter"
            price="£499"
            gradient="bg-gradient-to-tr from-green-900 via-green-800 to-green-700"
            features={[
              "1–3 pages (Home, About, Contact)",
              "Responsive design",
              "SEO-friendly setup",
              "Simple contact form",
              "Vercel deployment",
              "5–7 day turnaround",
            ]}
          />

          <ServiceCard
            title="🔵 Professional"
            price="£999"
            gradient="bg-gradient-to-tr from-blue-900 via-blue-800 to-blue-700"
            features={[
              "Up to 6 pages",
              "CMS integration",
              "Custom UI components",
              "Performance tuning",
              "Google Analytics setup",
              "Admin dashboard (optional) + £300",
            ]}
          />

          <ServiceCard
            title="🟣 Premium"
            price="£1999+"
            gradient="bg-gradient-to-tr from-purple-900 via-purple-800 to-purple-700"
            features={[
              "Unlimited pages & components",
              "API integrations",
              "Authentication & roles",
              "Advanced dashboard",
              "Full CMS setup",
              "Ongoing support £150+",
            ]}
          />
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section
        className="mb-32 max-w-3xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={5}
      >
        <h2 className="text-3xl font-extrabold text-center mb-8 text-indigo-100 tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
          📩 Let’s Work Together
        </h2>
        <NextContactForm />
      </motion.section>

      {/* Back to Services */}
      <motion.div
        className="text-center pb-10"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={6}
      >
        <Link href="/services" passHref>
          <button className="cursor-pointer bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-[0_4px_20px_rgba(139,92,246,0.8)] transition transform hover:-translate-y-1 duration-300 font-semibold">
            ⬅ Back to Services
          </button>
        </Link>
      </motion.div>
    </>
  );
}
