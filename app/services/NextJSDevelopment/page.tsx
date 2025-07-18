"use client";

import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import NextContactForm from "../../components/ContactForms/NextContactForm";

import { PricingCard, fadeInUp } from "../../components/Content/NextJsReactClient";

export default function NextJsReactDevelopment() {
  return (
    <div className="min-h-screen flex flex-col pt-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 px-6">
      <Head>
        <title>Next.js/React Development | Cameron Lowndes</title>
        <meta
          name="description"
          content="Professional Next.js and React development services tailored for performance, scalability, and modern design."
        />
      </Head>

      <main className="flex-grow max-w-6xl mx-auto w-full py-20 text-white">
        {/* Intro */}
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0}
        >
          <motion.h1
            className="text-6xl font-extrabold mb-4 tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]"
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
            <button
              type="button"
              className=" cursor-pointer bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 
                text-white px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 whitespace-pre-line font-semibold tracking-wide"
              aria-label="View Terms and Conditions for Next.js React Development"
            >
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
            <PricingCard
              title="🟢 Starter"
              price="£499"
              color="green"
              features={[
                "1–3 pages (Home, About, Contact)",
                "Responsive design",
                "SEO-friendly setup",
                "Simple contact form",
                "Vercel deployment",
                "5–7 day turnaround",
              ]}
              custom={0}
            />
            <PricingCard
              title="🔵 Professional"
              price="£999"
              color="blue"
              features={[
                "Up to 6 pages",
                "CMS integration",
                "Custom UI components",
                "Performance tuning",
                "Google Analytics setup",
                "Admin dashboard (optional) + £300",
              ]}
              custom={1}
            />
            <PricingCard
              title="🟣 Premium"
              price="£1999+"
              color="purple"
              features={[
                "Unlimited pages & components",
                "API integrations",
                "Authentication & roles",
                "Advanced dashboard",
                "Full CMS setup",
                "Ongoing support £150+",
              ]}
              custom={2}
            />
          </div>
        </motion.section>

        {/* Add-ons */}
        <motion.section
          className="mb-28 max-w-3xl mx-auto bg-indigo-900 bg-opacity-70 rounded-3xl p-10 shadow-2xl"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={5}
        >
          <h2 className="text-3xl font-extrabold mb-6 text-indigo-100 tracking-wide">✨ Add-Ons</h2>
          <ul className="list-disc pl-8 text-indigo-200 space-y-3 text-lg font-medium">
            <li>
              E-commerce setup (Stripe + product pages): <span className="font-bold">+£400</span>
            </li>
            <li>
              Multilingual support: <span className="font-bold">+£250</span>
            </li>
            <li>
              Hosting migration: <span className="font-bold">+£100</span>
            </li>
            <li>
              Monthly maintenance: <span className="font-bold">£250+/month</span>
            </li>
            <li>
              Remove Watermark: <span className="font-bold">+£300</span>
            </li>
          </ul>
        </motion.section>

        {/* Tech Stack */}
        <motion.section
          className="mb-28 max-w-3xl mx-auto bg-indigo-900 bg-opacity-70 rounded-3xl p-10 shadow-2xl"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={6}
        >
          <h2 className="text-3xl font-extrabold mb-6 text-indigo-100 tracking-wide">🧰 Tech Stack</h2>
          <ul className="list-disc pl-8 text-indigo-200 space-y-2 text-lg font-medium">
            <li>
              <strong>Frontend:</strong> React, Next.js, Tailwind CSS, TypeScript
            </li>
            <li>
              <strong>CMS:</strong> Sanity, Strapi, Contentful
            </li>
            <li>
              <strong>Hosting:</strong> Vercel, Netlify, DigitalOcean
            </li>
            <li>
              <strong>Auth:</strong> Clerk, Firebase, NextAuth.js
            </li>
          </ul>
        </motion.section>

        {/* Form */}
        <motion.section
          className="mb-32 max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={7}
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
          custom={8}
        >
          <Link href="/services" passHref>
            <button
              className=" cursor-pointer bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700
                text-white px-8 py-4 rounded-full shadow-lg hover:shadow-[0_4px_20px_rgba(139,92,246,0.8)] transition transform hover:-translate-y-1 duration-300 font-semibold"
              aria-label="Back to Services"
            >
              ⬅ Back to Services
            </button>
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
