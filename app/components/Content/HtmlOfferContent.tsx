"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";
import DiscountedDevOfferFormHTML from "../ContactForms/DiscountedDevOfferfrormHTML"; 
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
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
  hover: { scale: 1.1, transition: { duration: 0.2 } },
};

export default function HtmlStarterPackageContent() {
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
           Special Discount for Charities & Small Businesses HTML Version
          </motion.h1>
          <motion.p
            className="text-2xl text-indigo-300 mb-8"
            custom={1}
            variants={fadeInUpVariants}
          >
            Empower your cause or startup with modern, scalable web solutions.
          </motion.p>
          <motion.div custom={2} variants={fadeInUpVariants} whileHover="hover" {...buttonHover}>
            <Link href="/terms/SpecialOfferPage" passHref>
              <button
                type="button"
                className="cursor-pointer bg-gradient-to-r from-purple-600 to-blue-500 px-8 py-4 rounded-full shadow-xl transition-transform font-semibold whitespace-pre-line"
              >
                Terms and Conditions{"\n"}for{"\n"}charities and small business
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Packages */}
        <motion.section
          className="mb-32 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10 justify-center justify-items-center items-stretch">
            <PackageCard
              color="green"
              title="Starter"
              price="£150"
              items={[
                "1–2 pages",
                "SEO-ready & responsive",
                "Contact form setup",
              ]}
              custom={1}
            />

            <PackageCard
              color="blue"
              title="Professional"
              price="£350"
              items={[
                "Up to 6 pages",
                "CMS integration",
                "Custom components",
                "Google Analytics setup",
              ]}
              custom={2}
            />

            <PackageCard
              color="yellow"
              title="Ultimate"
              price="£550+"
              items={[
                "Unlimited static pages",
                "Advanced layouts & components",
                "Accessibility best practices",
                "Custom modals, sliders, forms",
                "Hosting setup (Netlify/Vercel)"
              ]}
              custom={3}
            />
          </motion.div>
        </motion.section>

        {/* Add-ons */}
        <motion.section
          className="mb-32 max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl font-bold text-center mb-8 tracking-wide drop-shadow-lg"
            custom={0}
            variants={fadeInUpVariants}
          >
            ✨ Optional Add-Ons
          </motion.h2>
          <motion.ul
            className="list-disc pl-8 text-yellow-100 space-y-3 text-lg font-semibold"
            custom={1}
            variants={containerVariants}
          >
            {[
              "E-commerce-ready templates: +£200",
              "Newsletter signup integration: +£200",
              "Multilingual static site support: +£150",
              "Monthly updates + hosting support: +£120/mo",
              "JavaScript functionality (sliders, modals, validation): +£200",
              "Remove watermark: +£150"
            ].map((item, i) => (
              <motion.li key={i} custom={i} variants={listItemVariants}>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>

        {/* Eligibility */}
        <motion.section
          className="mb-32 max-w-4xl mx-auto bg-white bg-opacity-10 rounded-3xl p-10 shadow-lg backdrop-blur-md border border-white/20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl font-bold text-black mb-6 tracking-wide text-center drop-shadow-md"
            custom={0}
            variants={fadeInUpVariants}
          >
            📜 Eligibility Requirements
          </motion.h2>
          <motion.ul
            className="list-disc pl-8 space-y-4 text-black text-lg font-medium max-w-xl mx-auto"
            variants={containerVariants}
            custom={1}
          >
            {[
              <>
                <strong>Charities:</strong> Must be officially registered with the UK Charity Commission or an equivalent authority in their country. Proof of registration (such as a registration number) may be required to verify eligibility.
              </>,
              <>
                <strong>Small Businesses:</strong> Must have fewer than 10 employees and an annual turnover under £200,000. Verification through business registration or financial documentation may be requested to confirm eligibility.
              </>,
              <>
                These criteria protect my time and resources by focusing efforts on clients who genuinely qualify and align with this offer’s scope. It prevents misuse of discounted or special terms and ensures fair treatment for all eligible clients.
              </>,
              <>
                <strong>Verification is Mandatory:</strong> Failure to provide requested documentation or falsifying eligibility information will result in immediate disqualification from this offer.
              </>,
              <>
                <strong>Offer Limitations:</strong> This offer is not intended for larger enterprises, individuals, or organizations outside these eligibility brackets to avoid resource strain and maintain service quality.
              </>,
              <>
                <strong>Contractual Clarity:</strong> All terms, including eligibility and pricing, are clearly documented in the contract. Non-compliance or misrepresentation may lead to termination of service without refund.
              </>,
              <>
                By accepting this offer, clients confirm that they meet these eligibility criteria and agree to provide any necessary documentation promptly. This approach ensures a professional, smooth working relationship while safeguarding my business interests.
              </>,
            ].map((item, i) => (
              <motion.li key={i} custom={i} variants={listItemVariants}>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>

        {/* Contact Form */}
        <motion.section
          className="mb-24 max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          custom={0}
        >
          <motion.h2
            className="text-3xl font-bold mb-8 text-white drop-shadow-md tracking-wide"
            custom={1}
            variants={fadeInUpVariants}
          >
            📩 Apply for Discounted Services
          </motion.h2>
          <DiscountedDevOfferFormHTML/>
        </motion.section>

        {/* Back Button */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          custom={0}
          whileHover="hover"
          {...buttonHover}
        >
          <Link href="/services" passHref>
            <button
              type="button"
              className="cursor-pointer bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full shadow-xl transition-transform font-semibold tracking-wide"
            >
              ⬅ Back to Services
            </button>
          </Link>
        </motion.div>
      </main>
    </div>
  );
}

type PackageColor = "green" | "blue" | "purple" | "yellow";

function PackageCard({
  color,
  title,
  price,
  items,
  custom = 0,
}: {
  color: PackageColor;
  title: string;
  price: string;
  items: string[];
  custom?: number;
}) {
  const bgMap: Record<PackageColor, string> = {
    green: "from-green-700 to-green-500 border-green-300 text-green-100",
    blue: "from-blue-700 to-blue-500 border-blue-300 text-blue-100",
    purple: "from-purple-700 to-purple-500 border-purple-300 text-purple-200",
    yellow: "from-yellow-600 to-yellow-400 border-yellow-200 text-yellow-100 text-white",
  };

  return (
    <motion.div
      className={`bg-gradient-to-tr ${bgMap[color]} rounded-3xl shadow-2xl p-8 border-t-8 flex flex-col transform cursor-pointer select-none w-72`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUpVariants}
      custom={custom}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 15px 30px rgba(139, 92, 246, 0.7)",
        transition: { duration: 0.3 },
      }}
    >
      <h3 className="text-3xl font-extrabold mb-3 flex items-center gap-3">
        <span>
          {color === "green"
            ? "🟢"
            : color === "blue"
            ? "🔵"
            : color === "purple"
            ? "🟣"
            : "⭐"}
        </span>{" "}
        {title}
      </h3>
      <p className="text-2xl font-bold mb-6">{price}</p>
      <ul className="space-y-3 flex-1 text-lg font-medium">
        {items.map((item, idx) => (
          <li key={idx}>
            <CheckCircle className="inline mr-3" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
