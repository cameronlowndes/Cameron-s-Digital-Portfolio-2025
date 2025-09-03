"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import PostLaunchSupportMaintenanceRequestContactForm from "../../components/ContactForms/PostLaunchSupportMaintenanceRequestContactForm";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function OngoingMaintenanceClient() {
  const services = [
    {
      title: "🐞 Bug Fixes",
      subtitle: "Essential for maintaining a glitch-free experience.",
      color: "red",
      price: "£120 per fix / £250 per month",
      features: [
        "Fix broken links and error pages",
        "Resolve JavaScript errors and performance issues",
        "Resolve browser compatibility issues",
        "Implement client feedback for continuous improvement",
      ],
    },
    {
      title: "⚡ Performance Tuning",
      subtitle: "Speed matters. Let’s make it fast and snappy.",
      color: "blue",
      price: "£350 one-time / £450 per month",
      features: [
        "Optimize loading times for faster performance",
        "Image optimization and lazy loading",
        "Minify CSS and JavaScript for efficiency",
        "Cache management and CDN setup",
      ],
    },
    {
      title: "🔄 Regular Updates",
      subtitle: "Stay secure and up-to-date with industry standards.",
      color: "purple",
      price: "£150/month or £1500/year",
      features: [
        "Content updates and enhancements",
        "Plugin and library upgrades",
        "Security patch maintenance",
        "Industry best practices compliance",
      ],
    },
    {
      title: "💼 Ongoing Support",
      subtitle: "We’re here when you need us — and even before.",
      color: "green",
      price: "£250/month",
      features: [
        "Direct support access",
        "Priority issue response",
        "Proactive platform monitoring",
        "Scaling and improvement guidance",
      ],
    },
  ];

  return (
    <motion.main
      className="flex-grow max-w-7xl mx-auto w-full py-20"
      initial="hidden"
      animate="visible"
    >
      {/* Hero */}
      <motion.section
        className="text-center max-w-3xl mx-auto mb-20"
        custom={0}
        variants={fadeInUp}
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text drop-shadow-md">
          Post-Launch Support & Ongoing Maintenance
        </h1>
        <p className="text-xl sm:text-2xl text-indigo-100 max-w-2xl mx-auto">
          Keep your website or application running smoothly with reliable support, updates, and optimization.
        </p>
      </motion.section>

      {/* Terms CTA */}
      <motion.div
        className="flex justify-center mb-20"
        custom={1}
        variants={fadeInUp}
      >
        <Link href="/terms/MaintenanceTerms">
          <button className="cursor-pointer bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform text-lg font-semibold">
            📄 View Maintenance Terms & Conditions
          </button>
        </Link>
      </motion.div>

      {/* Services */}
      <motion.section className="mb-24" custom={2} variants={fadeInUp}>
        <h2 className="text-3xl font-bold text-center mb-14 text-white">
          🔧 Our Core Services
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {services.map(({ title, subtitle, color, price, features }, index) => (
            <motion.div
              key={title}
              className={`bg-white/10 backdrop-blur-md text-white rounded-3xl shadow-xl p-8 border-t-8 border-${color}-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-shadow`}
              custom={index + 3}
              variants={fadeInUp}
            >
              <h3 className={`text-2xl font-bold text-${color}-300 mb-2`}>
                {title}
              </h3>
              <p className="text-indigo-100 mb-4">{subtitle}</p>
              <p className={`text-md font-bold text-${color}-300 mb-5`}>
                💰 <span className="text-xl">{price}</span>
              </p>
              <ul className="space-y-3 text-indigo-100">
                {features.map((feature, idx) => (
                  <li key={idx}>
                    <CheckCircle className={`inline mr-2 text-${color}-300`} />{" "}
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section className="mb-10" custom={7} variants={fadeInUp}>
        <PostLaunchSupportMaintenanceRequestContactForm />
      </motion.section>

      {/* Back Button */}
      <motion.div className="text-center" custom={8} variants={fadeInUp}>
        <Link href="/services">
          <button className="cursor-pointer bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform text-lg font-semibold">
            ⬅ Back to Services
          </button>
        </Link>
      </motion.div>
    </motion.main>
  );
}
