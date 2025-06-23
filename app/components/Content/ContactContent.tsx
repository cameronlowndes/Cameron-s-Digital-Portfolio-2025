"use client";

import { motion } from "framer-motion";
import ContactForm from "../ContactForms/ContactForm";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ContactContent() {
  return (
    <motion.main
      className="flex-grow max-w-4xl mx-auto w-full px-6 pt-20 pb-32 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 text-black"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <motion.h1
        className="text-5xl font-extrabold text-center mb-8 tracking-tight drop-shadow-lg"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ delay: 0.2 }}
      >
        Let's Work Together
      </motion.h1>
      <motion.p
        className="max-w-xl mx-auto text-center text-lg sm:text-xl mb-16 leading-relaxed text-black"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ delay: 0.4 }}
      >
        Fill out the form below and I’ll get back to you as soon as I can.
      </motion.p>

      <ContactForm />
    </motion.main>
  );
}
