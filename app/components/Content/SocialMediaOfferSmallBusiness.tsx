"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { motion, Variants } from "framer-motion";
import SocialMediaContactForm from "../ContactForms/CharityContactFormForSoicalMedia"; // ✅ Make sure file path is correct

// Framer Motion Variants
const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i = 1) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
  }),
};

const buttonHover = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
};

// Package type
type PackageColor = "green" | "blue" | "purple";

interface Package {
  title: string;
  price: string;
  features: string[];
  color: PackageColor;
}

// Packages array
const packages: Package[] = [
  {
    title: "Starter",
    price: "£99",
    features: ["1 post/week", "Basic engagement report", "1 platform management"],
    color: "green",
  },
  {
    title: "Professional",
    price: "£199",
    features: ["3 posts/week", "Analytics & engagement tracking", "Up to 2 platforms", "Content planning"],
    color: "blue",
  },
  {
    title: "Premium",
    price: "£299+",
    features: ["Daily posts", "Advanced analytics & reports", "Up to 4 platforms", "Ad campaigns setup",],
    color: "purple",
  },
];

// Add-ons array
const addOns = [
  "Instagram/Facebook ad campaigns: +£150/month",
  "Custom graphics & video content: +£200",
  "Influencer collaboration: +£250",
];

export default function SocialMediaOfferSmallBusiness() {
  return (
    <div className="min-h-screen flex flex-col pt-16 bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 px-6 text-white">
      <main className="max-w-7xl mx-auto w-full py-20">
        
        {/* Header */}
        <motion.div
          className="text-center mb-20 max-w-3xl mx-auto relative"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-6xl font-extrabold drop-shadow-[0_4px_8px_rgba(0,0,0,0.7)] mb-6 tracking-tight"
            custom={0}
            variants={fadeInUpVariants}
          >
            Social Media Support for Small Businesses & Charities
          </motion.h1>
          <motion.p
            className="text-2xl text-indigo-300 mb-8"
            custom={1}
            variants={fadeInUpVariants}
          >
            Build your social presence with tailored support for content creation, posting, engagement tracking, and growth.
          </motion.p>
          <motion.div custom={2} variants={fadeInUpVariants} whileHover="hover" {...buttonHover}>
            <Link href="/terms/SocialMediaSmallBizTerms">
              <button className="cursor-pointer bg-gradient-to-r from-purple-600 to-blue-500 px-8 py-4 rounded-full shadow-xl transition-transform font-semibold whitespace-pre-line">
                Terms & Conditions for Social Media Services
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Packages */}
        <motion.section
          className="mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl font-bold text-center mb-14 drop-shadow-lg tracking-wide"
            custom={0}
            variants={fadeInUpVariants}
          >
            💼 Packages & Pricing
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-10">
            {packages.map((pkg, i) => (
              <PackageCard key={i} {...pkg} custom={i} />
            ))}
          </div>
        </motion.section>

        {/* Add-Ons */}
        <motion.section
          className="bg-indigo-900 bg-opacity-75 p-8 rounded-3xl shadow-2xl max-w-3xl mx-auto mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 className="text-3xl font-semibold text-center mb-8 text-pink-400 tracking-wide">
            ✨ Add-Ons
          </motion.h2>
          <ul className="list-disc pl-8 space-y-3 text-indigo-300 text-lg font-medium">
            {addOns.map((item, i) => (
              <motion.li key={i} custom={i} variants={listItemVariants}>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Eligibility */}
        <motion.section
          className="mb-32 max-w-4xl mx-auto bg-white bg-opacity-20 rounded-3xl p-10 shadow-lg backdrop-blur-md border border-white/30"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl font-bold mb-6 tracking-wide text-center text-black drop-shadow-md"
            custom={0}
            variants={fadeInUpVariants}
          >
            📜 Eligibility Requirements
          </motion.h2>
          <motion.ul className="list-disc pl-8 space-y-4 text-black text-lg font-medium max-w-xl mx-auto" variants={containerVariants} custom={1}>
            {[
              "🟢 **Charities:** Must be officially registered with the UK Charity Commission or an equivalent authority in their country. Proof of registration (such as a registration number) may be required to verify eligibility.",
              "🔵 **Small Businesses:** Must have fewer than 10 employees and an annual turnover under £200,000. Verification through business registration or financial documentation may be requested to confirm eligibility.",
              "⚡ These criteria protect my time and resources by focusing efforts on clients who genuinely qualify and align with this offer’s scope. It prevents misuse of discounted or special terms and ensures fair treatment for all eligible clients.",
              "✅ **Verification is Mandatory:** Failure to provide requested documentation or falsifying eligibility information will result in immediate disqualification from this offer.",
              "❌ **Offer Limitations:** This offer is not intended for larger enterprises, individuals, or organizations outside these eligibility brackets to avoid resource strain and maintain service quality.",
              "📄 **Contractual Clarity:** All terms, including eligibility and pricing, are clearly documented in the contract. Non-compliance or misrepresentation may lead to termination of service without refund.",
              "🤝 By accepting this offer, clients confirm that they meet these eligibility criteria and agree to provide any necessary documentation promptly. This approach ensures a professional, smooth working relationship while safeguarding my business interests."
            ].map((item, i) => (
              <motion.li key={i} custom={i} variants={listItemVariants} className="leading-relaxed">
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>

        {/* Contact Form */}
        <motion.section
          className="max-w-4xl mx-auto px-6 py-12 bg-gradient-to-tr from-pink-700 via-purple-800 to-indigo-900 rounded-3xl shadow-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
        >
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
      </main>
    </div>
  );
}

// Package card component
function PackageCard({ color, title, price, features, custom = 0 }: { color: PackageColor; title: string; price: string; features: string[]; custom?: number }) {
  const bgMap: Record<PackageColor, string> = {
    green: "from-green-900 via-green-800 to-green-700",
    blue: "from-blue-900 via-blue-800 to-blue-700",
    purple: "from-purple-900 via-purple-800 to-purple-700",
  };

  return (
    <motion.div
      className={`bg-gradient-to-tr ${bgMap[color]} rounded-3xl p-8 shadow-2xl border-4 border-white flex flex-col text-white hover:shadow-[0_0_30px_5px_rgba(255,255,255,0.3)] transition-shadow duration-400`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUpVariants}
      custom={custom}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
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
  );
}
