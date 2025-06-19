"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import DiscountedDevOfferForm from "./ContactForms/DiscountedDevOfferfrorm";
import { CheckCircle } from "lucide-react";

export default function HomeContent() {
  return (
    <div className="min-h-screen flex flex-col pt-16 bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 px-6 text-white">
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-12">
        {/* Profile Image */}
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

        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 text-center text-white">
          Hey, I'm Cameron Lowndes 👋
        </h1>

        {/* About Me Section */}
        <section className="max-w-4xl w-full mx-auto flex flex-col md:flex-row items-start gap-6 p-6 bg-white border-2 border-gray-200 rounded-lg shadow-md mb-12">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Welcome to <strong className="text-purple-700">Cameron Digital Works</strong>! We specialize in building <strong>full-stack websites</strong> tailored to your needs. Our <span className="font-semibold text-indigo-600">basic website packages</span> include expertly crafted HTML, CSS, and JavaScript to create clean, responsive, and user-friendly sites. For those looking to enhance their online presence, we offer <strong className="text-blue-600">additional JavaScript features and functionalities</strong> as add-ons, giving your website that extra edge to engage your visitors and improve user experience.
            <br /><br />
            For businesses seeking a more powerful and scalable solution, we provide full-stack website development using modern frameworks like <strong className="text-green-700">React and Next.js</strong>, combined with <span className="font-semibold text-teal-600">TypeScript</span> for robust and maintainable code. Whether you need a completely custom web application built from scratch or want to rewrite and expand your existing site, <strong className="text-purple-700">Cameron Digital Works</strong> delivers tailored, high-performance web apps designed to help your business grow and succeed in the digital world.
          </p>
        </section>

        {/* Purpose Section */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800 text-center text-white">
          Purpose of My Portfolio
        </h2>

        <section className="max-w-4xl w-full mx-auto flex flex-col md:flex-row items-start gap-6 p-6 bg-white border-2 border-gray-200 rounded-lg shadow-md mb-12">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            The purpose of this website is to showcase my <strong className="text-purple-700">skills, experience, and portfolio</strong> as a full-stack developer. It serves as a platform to demonstrate the <strong className="text-indigo-600">quality and range of web development projects</strong> I have completed, highlighting both <span className="font-semibold text-blue-600">front-end and back-end expertise</span>. This site also acts as a point of contact for potential clients, employers, or collaborators interested in <strong className="text-green-700">working together or learning more about my services and professional background</strong>.
            <br /><br />
            Through this website, I aim to provide visitors with a comprehensive understanding of my <strong className="text-purple-700">technical abilities, project approach</strong>, and <span className="font-semibold text-indigo-600">passion for coding and technology</span>. Whether you are looking for a <strong className="text-blue-600">custom website solution</strong>, want to explore my previous work, or simply want to connect, this site offers an <span className="font-semibold text-green-700">engaging and easy-to-navigate experience</span> to help you make informed decisions.
          </p>
        </section>
      </main>
    </div>
  );
}
