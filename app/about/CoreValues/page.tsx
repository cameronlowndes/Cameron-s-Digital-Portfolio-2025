"use client";
import styles from "./animations.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const values = [
  {
    title: "Inclusion for All",
    description:
      "As a web developer at Cameron Digital Works, I believe in Inclusion for All. No matter your background, beliefs, or identity, you deserve respect and equal opportunity. I’m committed to building websites that reflect these values because I will never create a site for a client whose vision doesn’t align with the principles of respect, acceptance, and diversity. Together, let’s build digital spaces that empower everyone and celebrate what makes us unique.",
  },
  {
    title: "Celebrating Diversity",
    description:
      "At Cameron Digital Works, we wholeheartedly embrace diversity as a core strength that enriches our work and community. As a pansexual developer, I am personally committed to fostering an environment where every individual feels valued, respected, and empowered. We take great pride in being an active part of our vibrant community, and it’s our mission to give back through thoughtful, inclusive projects that truly make a difference. If you share these values and want to collaborate on something meaningful, please visit our Special Deals page to explore how we can work together to build a more inclusive digital future.",
  },
  {
    title: "Supporting Neurodiversity",
    description:
      "At Cameron Digital Works, we strongly believe in celebrating neurodiversity by creating websites thoughtfully designed to be accessible and user-friendly for people with dyslexia and other neurodivergent conditions. We prioritize features such as clear typography, simple navigation, and supportive tools that make browsing easier and more enjoyable. Our commitment is to build digital experiences that empower everyone to engage confidently and comfortably, ensuring that no one is left behind in the online world.",
  },
  {
    title: "Respect",
    description:
      "At Cameron Digital Works, we deeply believe in respect and kindness, treating everyone with professionalism even when there are disagreements. We are committed to maintaining a positive and respectful approach in all our work and relationships. However, we will not create websites for clients whose values don’t align with ours, while always ensuring that all interactions remain courteous and respectful.",
  },
  {
    title: "Integrity and Transparency",
    description:
      "At Cameron Digital Works, we firmly believe that transparency is the foundation of trust and success. Even when differences of opinion or disagreements occur, we commit to open, honest communication and clear accountability in every aspect of our work. This unwavering dedication to transparency ensures that both our team and clients are always informed, respected, and confident in the integrity of everything we create together. Because these values guide everything we do, we will not create websites for clients whose principles do not align with ours, ensuring that every project we take on reflects mutual respect and shared commitment.",
  },
  {
    title: "Unity and Collaboration",
    description:
      "At Cameron Digital Works, we believe that clear communication and mutual understanding are the foundation of a successful partnership. That’s why we work closely with each client to create tailored, specific agreements that outline every detail of the project—from scope and deliverables to timelines and responsibilities. This ensures that both parties have aligned expectations and can collaborate smoothly, resulting in a final product that truly meets the client’s needs while upholding the values we stand for.",
  },
  {
    title: "Online Responsibility",
    description:
      "At Cameron Digital Works, we hold a firm belief in online responsibility and the power of positive digital presence. We are committed to creating websites that reflect respect, kindness, and integrity. Because of this, we make it clear that we will not take on projects for clients whose values conflict with ours or who promote negativity, hate, or disrespect online. This is not about being harsh but about standing firmly by our principles ensuring that every website we build contributes positively to the online community and upholds the respectful standards we believe in.",
  },
  {
    title: "Ongoing Learning and Growth",
    description: (
      <>
        At Cameron Digital Works, we believe in continuous learning and growth within our business, always striving to improve our skills, processes, and services to better serve our clients and adapt to the ever-changing digital landscape.
        <div className="mt-6">
          <Link
            href="/Contact"
            className="inline-block bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 font-semibold tracking-wide"
          >
            Send Feedback
          </Link>
        </div>
      </>
    ),
  },
];

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

      <main className="min-h-screen bg-gradient-to-tr from-purple-900 via-indigo-900 to-blue-900 text-white flex flex-col">
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
            At <strong className="font-semibold">Cameron Digital Works</strong>, we hold strong core values that guide everything we do as web developers. We believe in fairness and integrity, and we are committed to working only with clients whose projects align with our values. If a website does not reflect the principles we stand for, we will respectfully decline to create it. Our mission is to build meaningful, ethical, and impactful digital experiences that we can be proud of.
          </p>
        </section>

        {/* Values Grid */}
        <section className="flex-grow px-6 pb-20 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {values.map(({ title, description }, i) => (
              <article
                key={i}
                className="bg-white text-gray-900 rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >
                <h2 className="text-3xl font-bold text-indigo-700 mb-4">{title}</h2>
                <div className="flex-grow text-lg leading-relaxed">{description}</div>
              </article>
            ))}
          </div>
        </section>

        {/* Closing Message */}
        <section className="bg-indigo-800 py-16 px-6 text-center">
          <p className="max-w-4xl mx-auto text-xl md:text-2xl font-semibold leading-relaxed drop-shadow-lg">
            By choosing <strong>Cameron Digital Works</strong>, you’re not just getting a website—you’re partnering with a team dedicated to building your online presence grounded in strong core values. Every project we undertake is crafted with integrity, respect, inclusivity, and transparency at its heart, ensuring your website truly reflects these principles while delivering a seamless, user-friendly experience. We commit to creating digital solutions that not only meet your needs but also align with the values that define who we are.
          </p>
        </section>
      </main>
    </>
  );
}
