"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50 pt-24 px-4 pb-44 sm:pb-32">

      <Head>
        <title>Cameron Lowndes | Full-Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Explore the work and skills of Cameron Lowndes, a full-stack web developer with a passion for coding and cloud technologies."
        />
        <meta property="og:title" content="Cameron's Digital Portfolio" />
        <meta
          property="og:description"
          content="Explore the work and skills of Cameron Lowndes, a full-stack web developer with a passion for coding and cloud technologies."
        />
        <meta property="og:image" content="/image/cameron.jpg" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Navbar />

      {/* Name on top of the image */}
      <div className="flex flex-col items-center mt-6 mb-10">
      
        <motion.div
          className="relative group w-36 h-36 md:w-60 md:h-60 rounded-full overflow-hidden shadow-2xl border-4 border-white"
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
      </div>
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 text-center">
          Hey, I'm Cameron Lowndes 👋
        </h1>
      {/* About Me Section */}
      <section className="max-w-4xl mx-auto flex flex-col md:flex-row items-start gap-6 p-6 bg-white border-2 border-gray-200 rounded-lg shadow-md mb-12 pb-36 justify-start">
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          I am currently immersed in learning various aspects of coding as a full-stack web developer.
          I’ve explored different programming languages like{" "}
          <strong className="text-purple-600">Python</strong>,{" "}
          <strong className="text-purple-600">JavaScript</strong>, and{" "}
          <strong className="text-purple-600">HTML</strong>.
          I'm also moving to the cloud with{" "}
          <strong className="text-purple-600">Azure</strong> and{" "}
          <strong className="text-purple-600">AWS</strong>, expanding my skills into the world of cloud computing.
        </p>
      </section>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800 text-center md:text-center">
          Purpose of My Portfolio
        </h2>
      {/* Repeated "Purpose of My Portfolio" Section */}
      <section className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 p-6 bg-white border-2 border-gray-200 rounded-lg shadow-md mb-12 pb-36 justify-start">
        
        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
          Thank you for taking the time to explore my portfolio! I designed this space to present my experience and skills in a professional manner, showcasing the various projects and accomplishments I have achieved throughout my coding journey.
          <br />
          If you have any questions or would like to discuss my work further, please don’t hesitate to reach out through the contact page. I am eager to connect and will respond as soon as possible.
        </p>
       
      </section>

      {/* Footer always at the bottom, scrollable page if needed */}
      <div className="mt-12">
        <Footer />
      </div>
    </main>
  );
}
