"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Import Footer component
import Head from "next/head";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-white to-gray-100 min-h-screen flex flex-col pt-24 px-4">
      <Head>
        {/* Custom Page Title */}
        <title>Cameron Lowndes | Full-Stack Developer Portfolio</title>

        {/* SEO Metadata */}
        <meta
          name="description"
          content="Explore the work and skills of Cameron Lowndes, a full-stack web developer with a passion for coding and cloud technologies."
        />
        <meta property="og:title" content="Cameron's Digital Portfolio" />
        <meta
          property="og:description"
          content="Explore the work and skills of Cameron Lowndes, a full-stack web developer with a passion for coding and cloud technologies."
        />
        <meta
          property="og:image"
          content="/image/cameron.jpg"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Navbar />

      <motion.div
        className="relative group w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden shadow-2xl border-4 border-white"
        whileHover={{ scale: 1.05, rotate: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Image
          src="/image/cameron.jpg"
          alt="Profile picture of Cameron Lowndes, a full-stack web developer"
          width={240}
          height={240}
          className="object-cover w-full h-full group-hover:brightness-110 transition duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-purple-500/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
      </motion.div>

      <section className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 p-6 border-2 border-gray-200 rounded-lg">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Hey, I'm Cameron Lowndes 👋</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            I am currently immersed in learning various aspects of coding as a full-stack web developer. 
            I’ve explored different programming languages like <strong className="text-lavender-400">Python</strong>, 
            <strong className="text-lavender-400">JavaScript</strong>, and <strong className="text-lavender-400">HTML</strong>. 
            I'm also moving to the cloud with <strong className="text-lavender-400">Azure</strong> and 
            <strong className="text-lavender-400">AWS</strong>, expanding my skills into the world of cloud computing.
          </p>
        </div>
      </section>

      {/* Purpose of My Portfolio Section */}
      <section className="max-w-4xl mx-auto mt-12 p-6">
        <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Purpose of My Portfolio</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Thank you for taking the time to explore my portfolio! I designed this space to present my experience and skills in a professional manner, showcasing the various projects and accomplishments I have achieved throughout my coding journey.
            Each section is crafted to give you insight into my capabilities, creativity, and dedication to continuous improvement in the tech field. I hope you find the content engaging and informative, allowing you to learn more about who I am as a developer.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            If you have any questions or would like to discuss my work further, please don’t hesitate to reach out through the contact page. I am eager to connect and will respond as soon as possible. Your feedback and inquiries are valuable to me, and I look forward to engaging in meaningful conversations that could lead to exciting opportunities.
          </p>
        </div>
      </section>

      {/* Footer Component */}
      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  );
}
