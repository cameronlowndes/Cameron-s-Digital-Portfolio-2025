import React from "react";
import Head from "next/head";
import ContactForm from "../components/ContactForms/ContactForm";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col pt-16 bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 px-6 text-white">
      <Head>
        <title>Contact | Cameron Lowndes</title>
        <meta
          name="description"
          content="Get in touch with Cameron Lowndes for freelance development work, collaborations, or consulting opportunities."
        />
        <meta property="og:title" content="Contact - Cameron Lowndes" />
        <meta
          property="og:description"
          content="Get in touch with Cameron Lowndes for freelance development work, collaborations, or consulting opportunities."
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="flex-grow max-w-4xl mx-auto w-full px-6 pt-20 pb-32 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 text-black">
        <h1 className="text-5xl font-extrabold text-center mb-8 tracking-tight drop-shadow-lg">
          Let's Work Together
        </h1>
        <p className="max-w-xl mx-auto text-center text-lg sm:text-xl  mb-16 leading-relaxed text-black">
          Fill out the form below and I’ll get back to you as soon as I can.
        </p>

        <ContactForm />
      </main>

      {/* Optional: subtle animated gradient overlay */}
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-tr from-purple-600 via-indigo-500 to-blue-700 opacity-30 animate-pulse"></div>
    </div>
  );
}
