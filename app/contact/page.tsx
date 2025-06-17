import React from "react";
import Head from "next/head";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col pt-16 bg-gray-50">
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

      <main className="flex-grow max-w-4xl mx-auto w-full px-6 pt-16 pb-24">
        <h1 className="text-4xl font-semibold text-center text-gray-900 mb-6">
          Let's Work Together
        </h1>
        <p className="text-center text-lg text-gray-700 mb-12">
          Fill out the form below and I’ll get back to you as soon as I can.
        </p>

        <ContactForm />
      </main>
    </div>
  );
}
