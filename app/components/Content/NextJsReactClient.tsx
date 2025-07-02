"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

type PricingCardProps = {
  title: string;
  price: string;
  color: "green" | "blue" | "purple";
  features: string[];
  custom?: number;
};

export function PricingCard({ title, price, color, features, custom = 0 }: PricingCardProps) {
  const colors = {
    green: {
      text: "text-green-400",
      border: "border-green-400",
      bg: "bg-gradient-to-tr from-green-900 via-green-800 to-green-700",
      icon: "text-green-400",
    },
    blue: {
      text: "text-blue-400",
      border: "border-blue-400",
      bg: "bg-gradient-to-tr from-blue-900 via-blue-800 to-blue-700",
      icon: "text-blue-400",
    },
    purple: {
      text: "text-purple-400",
      border: "border-purple-400",
      bg: "bg-gradient-to-tr from-purple-900 via-purple-800 to-purple-700",
      icon: "text-purple-400",
    },
  };

  const colorClasses = colors[color];

  return (
    <motion.div
      className={`${colorClasses.bg} rounded-3xl p-8 shadow-2xl border-4 border-opacity-70 border-white flex flex-col text-white
      hover:shadow-[0_0_30px_5px_rgba(255,255,255,0.3)] transition-shadow duration-400`}
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      custom={custom + 9}
    >
      <h3 className={`text-3xl font-extrabold mb-3 tracking-tight ${colorClasses.text} drop-shadow-lg`}>
        {title}
      </h3>
      <p className="text-2xl font-bold mb-6">{price}</p>
      <ul className="flex-1 space-y-4 text-lg font-semibold drop-shadow-sm">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3">
            <CheckCircle className={`${colorClasses.icon} w-6 h-6 flex-shrink-0 drop-shadow-md`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button
        disabled
        className="mt-8 bg-white bg-opacity-20 text-white font-semibold py-3 rounded-xl cursor-default select-none opacity-70"
        aria-label={`${title} package purchase coming soon`}
      >
        Coming Soon
      </button>
    </motion.div>
  );
}
