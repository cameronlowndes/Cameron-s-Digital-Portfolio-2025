"use client";
import styles from "../../about/CoreValues/animations.module.css"; 
import Head from "next/head";
import Image from "next/image";
import { values } from "@/data/valuesData";

export default function Values() {
  return (
    <>
      <Head>
        <title>Cameron Digital Works - Core Values</title>
        <meta
          name="description"
          content="Learn about the core values that guide Cameron Digital Works."
        />
        <meta
          name="keywords"
          content="Cameron Digital Works, core values, diversity, inclusion, neurodiversity, community, respect, equality"
        />
      </Head>

      <main className="min-h-screen flex flex-col pt-16 bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-800 text-white px-6">
        {/* Hero Section */}
        <section
          className={`flex flex-col items-center justify-center flex-shrink-0 px-6 pt-20 pb-16 text-center max-w-5xl mx-auto ${styles.animateFadeInUp}`}
        >
          <Image
            src="/image/logo.jpg"
            alt="Cameron Digital Works Logo"
            width={200}
            height={200}
            className={`rounded-full shadow-2xl mb-8 ${styles.animateScaleUp}`}
            priority
          />
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
            Our Core Values
          </h1>
          <p className="max-w-3xl text-lg md:text-xl font-light leading-relaxed drop-shadow-md">
            At <strong className="font-semibold">Cameron Digital Works</strong>, I hold strong core values that guide everything I do as a web developer. I believe in fairness and integrity, and I’m committed to working only with clients whose projects align with my values. If a website doesn’t reflect the principles I stand for, I will respectfully decline to create it. My mission is to build meaningful, ethical, and impactful digital experiences that I can be proud of.
          </p>
        </section>

        {/* Values Grid */}
        <section className="flex-grow px-6 pb-20 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
            {values.map(({ title, description }, i) => (
              <article
                key={i}
                className="bg-white text-gray-900 rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col max-w-xl mx-auto"
              >
                <h2 className="text-3xl font-bold text-indigo-700 mb-4">{title}</h2>
                <div className="flex-grow text-lg leading-relaxed">{description}</div>
              </article>
            ))}
          </div>
        </section>

        {/* Closing Message */}
        <section className="pb-24">
          <p className="max-w-4xl mx-auto text-xl md:text-2xl font-semibold leading-relaxed drop-shadow-lg">
            By choosing <strong>Cameron Digital Works</strong>, you’re not just getting a website you’re partnering with me, someone dedicated to building your online presence grounded in strong core values. Every project I undertake is crafted with integrity, respect, inclusivity, and transparency at its heart, ensuring your website truly reflects these principles while delivering a seamless, user-friendly experience. I commit to creating digital solutions that not only meet your needs but also align with the values that define who I am.
          </p>
        </section>
      </main>
    </>
  );
}
