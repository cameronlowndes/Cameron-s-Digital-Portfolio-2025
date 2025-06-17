"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Profile Image */}
      <motion.div
        className={styles.profileImageWrapper}
        whileHover={{ scale: 1.1, rotate: 3 }}
        transition={{ type: "spring", stiffness: 250, damping: 18 }}
        aria-label="Profile picture of Cameron Lowndes"
      >
        <Image
          src="/image/cameron.jpg"
          alt="Profile picture of Cameron Lowndes"
          fill
          className={styles.profileImage}
          priority
        />
        <div className={styles.glowOverlay} />
      </motion.div>

      <h1 className={styles.headingMain}>
        Hey, I&apos;m <span className={styles.highlightPink}>Cameron Lowndes</span> 👋
      </h1>

      {/* About Me Section */}
      <section className={styles.sectionCard}>
        <p>
          Welcome to <strong className={styles.highlightPink}>Cameron Digital Works</strong>! We specialize in building{" "}
          <strong>full-stack websites</strong> tailored to your needs. Our{" "}
          <span className={styles.textHighlightIndigo}>basic website packages</span> include expertly crafted HTML, CSS, and JavaScript to create clean, responsive, and user-friendly sites. For those looking to enhance their online presence, we offer{" "}
          <strong className={styles.textHighlightBlue}>additional JavaScript features and functionalities</strong> as add-ons, giving your website that extra edge to engage your visitors and improve user experience.
          <br />
          <br />
          For businesses seeking a more powerful and scalable solution, we provide full-stack website development using modern frameworks like{" "}
          <strong className={styles.textHighlightGreen}>React and Next.js</strong>, combined with{" "}
          <span className={styles.textHighlightTeal}>TypeScript</span> for robust and maintainable code. Whether you need a completely custom web application built from scratch or want to rewrite and expand your existing site,{" "}
          <strong className={styles.highlightPink}>Cameron Digital Works</strong> delivers tailored, high-performance web apps designed to help your business grow and succeed in the digital world.
        </p>
      </section>

      {/* Purpose Section */}
      <h2 className={styles.sectionTitle}>Purpose of My Portfolio</h2>

      <section className={styles.sectionCard}>
        <p>
          The purpose of this website is to showcase my <strong className={styles.highlightPink}>skills, experience, and portfolio</strong> as a full-stack developer. It serves as a platform to demonstrate the{" "}
          <strong className={styles.textHighlightIndigo}>quality and range of web development projects</strong> I have completed, highlighting both{" "}
          <span className={styles.textHighlightBlue}>front-end and back-end expertise</span>. This site also acts as a point of contact for potential clients, employers, or collaborators interested in{" "}
          <strong className={styles.textHighlightGreen}>working together or learning more about my services and professional background</strong>.
          <br />
          <br />
          Through this website, I aim to provide visitors with a comprehensive understanding of my <strong className={styles.highlightPink}>technical abilities, project approach</strong>, and{" "}
          <span className={styles.textHighlightIndigo}>passion for coding and technology</span>. Whether you are looking for a <strong className={styles.textHighlightBlue}>custom website solution</strong>, want to explore my previous work, or simply want to connect, this site offers an{" "}
          <span className={styles.textHighlightGreen}>engaging and easy-to-navigate experience</span> to help you make informed decisions.
        </p>
      </section>
    </div>
  );
}
