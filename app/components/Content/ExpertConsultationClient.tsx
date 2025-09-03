"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";
import ConsultationServicesContactForm from '../../components/ContactForms/ConsultationServicesContactForm'
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const includedItems = [
  "One-on-one expert consultation tailored to your needs",
  "Business strategy and growth planning",
  "Market research and competitor analysis",
  "Operational efficiency review",
  "Personalized action plans and ongoing support",
];

const packages = [
  {
    title: "🎁 Free Consult",
    price: "FREE",
    color: "green",
    features: [
      "30-minute video call",
      "Discuss your goals",
      "Technical advice",
      "No obligation",
    ],
    headingClass: "text-3xl text-black font-extrabold mb-3",
    containerBorder: "border-green-500",
    textColor: "text-black",
  },
  {
    title: "🟢 Basic",
    price: "£50",
    color: "green",
    features: [
      "1 hour consultation",
      "Strategy review",
      "Business assessment",
    ],
    headingClass: "text-2xl font-extrabold text-green-600 mb-4",
    containerBorder: "border-green-500",
    textColor: "text-gray-700",
  },
  {
    title: "🔵 Advanced",
    price: "£250",
    color: "blue",
    features: [
      "3 hour consultation",
      "Detailed business strategy",
      "Market analysis",
    ],
    headingClass: "text-2xl font-extrabold text-blue-600 mb-4",
    containerBorder: "border-blue-600",
    textColor: "text-gray-700",
  },
  {
    title: "🟣 Premium",
    price: "£450",
    color: "purple",
    features: [
      "6 hour consultation",
      "Full business audit",
      "Growth plan & implementation",
    ],
    headingClass: "text-2xl font-extrabold text-purple-600 mb-4",
    containerBorder: "border-purple-600",
    textColor: "text-gray-700",
  },
  {
    title: "⭐ VIP",
    price: "£600+",
    color: "yellow",
    features: [
      "10+ hours consultation",
      "Ongoing support",
      "Full strategic planning",
      "Exclusive insights",
    ],
    headingClass: "text-2xl font-extrabold text-yellow-600 mb-4",
    containerBorder: "border-yellow-500",
    textColor: "text-gray-700",
  },
];

const addOns = [
  "Ongoing monthly support: +£150/month",
  "Detailed market research reports: +£250",
  "Custom workshop sessions: +£350",
  "Extended implementation assistance: +£300",
];

export default function ExpertConsultationClient() {
  return (
    <motion.main
      className="flex-1 w-full max-w-6xl mx-auto px-6 pt-28 pb-36"
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.header
        className="text-center mb-16 max-w-3xl mx-auto"
        custom={0}
        variants={fadeInUp}
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-lg">
          Expert Consultation Services
        </h1>
        <p className="text-xl sm:text-2xl text-indigo-300 leading-relaxed font-light">
          Tailored solutions to help your business grow, improve efficiency, and solve complex challenges.
        </p>
      </motion.header>

      {/* Terms Button */}
      <motion.div
        className="flex justify-center mb-20"
        custom={1}
        variants={fadeInUp}
      >
        <Link href="/terms/ConsultationTerms" passHref>
          <button
            type="button"
            className=" cursor-pointer bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-4 rounded-full shadow-xl hover:scale-110 hover:shadow-2xl transition-transform duration-300 font-semibold text-lg whitespace-pre-line select-none"
          >
            Terms and Conditions{"\n"}for{"\n"}Expert Consultation Services
          </button>
        </Link>
      </motion.div>

      {/* What's Included */}
      <motion.section
        className="bg-indigo-800 bg-opacity-70 p-8 rounded-3xl shadow-2xl mb-16 max-w-4xl mx-auto"
        custom={2}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-semibold mb-6 border-b-4 border-pink-500 inline-block pb-2">
          What’s Included
        </h2>
        <ul className="space-y-5 text-indigo-100 text-lg">
          {includedItems.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="text-pink-400 mt-1" size={24} />
              <span className="font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </motion.section>

      {/* Consultation Packages */}
      <motion.section
        className="mb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        custom={3}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-12 tracking-wide">
          💼 Consultation Packages
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-10">
          {packages.map(({ title, price, color, features, headingClass, containerBorder, textColor }, i) => (
            <motion.div
              key={title}
              className={`bg-white rounded-3xl shadow-lg border-t-8 ${containerBorder} p-8 flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}
              custom={i + 4}
              variants={fadeInUp}
            >
              <h3 className={`${headingClass} flex items-center gap-3`}>
                {title}
              </h3>
              <p className={`text-2xl font-bold mb-6 ${textColor}`}>{price}</p>
              <ul className={`flex-grow space-y-3 ${textColor} text-base font-medium`}>
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className={`text-${color}-500`} size={20} />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Add-Ons */}
      <motion.section
        className="bg-indigo-900 bg-opacity-75 p-8 rounded-3xl shadow-2xl max-w-3xl mx-auto mb-20"
        custom={9}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-semibold text-center mb-8 text-pink-400 tracking-wide">
          ✨ Add-Ons
        </h2>
        <ul className="list-disc pl-8 space-y-3 text-indigo-300 text-lg font-medium">
          {addOns.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </motion.section>

      {/* Contact Form */}
      <motion.section
        className="max-w-4xl mx-auto px-6 py-12 bg-gradient-to-tr from-pink-700 via-purple-800 to-indigo-900 rounded-3xl shadow-3xl"
        custom={10}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-extrabold text-center text-white mb-8 drop-shadow-lg tracking-wider">
          Ready to get started? Fill out the form below:
        </h2>
        <ConsultationServicesContactForm />
        <div className="text-center pt-12">
          <Link href="/services" passHref>
            <button
              type="button"
              className=" cursor-pointer inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full shadow-xl hover:scale-110 hover:shadow-2xl transition-transform duration-300 font-semibold text-lg"
            >
              ⬅ Back to Services
            </button>
          </Link>
        </div>
      </motion.section>
    </motion.main>
  );
}
