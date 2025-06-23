import React from "react";
import Head from "next/head";
import ContactContent from "../components/Content/ContactContent";

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

      <ContactContent />

      {/* Optional: subtle animated gradient overlay */}
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-tr from-purple-600 via-indigo-500 to-blue-700 opacity-30 animate-pulse"></div>
    </div>
  );
}
