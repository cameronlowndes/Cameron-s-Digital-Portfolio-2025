"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white px-6 text-center">
      <motion.h1
        className="text-7xl font-extrabold drop-shadow mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        404
      </motion.h1>

      <motion.h2
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Page Not Found
      </motion.h2>

      <motion.p
        className="text-lg text-indigo-200 mb-8 max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        Sorry, the page you're looking for doesn’t exist or has been moved.
      </motion.p>

      <Link href="/">
        <motion.button
          className="bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ⬅ Go Home
        </motion.button>
      </Link>
    </div>
  );
}
