// pages/about.tsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

export default function About() {
  return (
    <div className="bg-white min-h-screen flex flex-col pt-24 pb-1 px-4">
      <Head>
        {/* Custom Page Title */}
        <title>About Me | Cameron Lowndes - Full-Stack Developer</title>

        {/* SEO Metadata */}
        <meta
          name="description"
          content="Learn more about Cameron Lowndes, a passionate full-stack developer eager to contribute to innovative projects and expand his skills in the tech industry."
        />
        <meta property="og:title" content="About Me - Cameron Lowndes" />
        <meta
          property="og:description"
          content="Learn more about Cameron Lowndes, a passionate full-stack developer eager to contribute to innovative projects and expand his skills in the tech industry."
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

      <section className="max-w-4xl mx-auto mt-12 p-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Me</h1>

        <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-200">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            I am currently immersed in learning various aspects of coding and am eager to secure a position where I can leverage my education and hands-on experience. Having completed a comprehensive full-stack web development bootcamp, I have gained proficiency in a range of programming languages, including <strong className="text-lavender-400">Python</strong>, <strong className="text-lavender-400">JavaScript</strong>, and <strong className="text-lavender-400">HTML</strong>, as well as other relevant technologies. This educational background has equipped me with the skills necessary to develop and deploy web applications effectively.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            In addition to my bootcamp experience, I have also pursued a <strong className="text-lavender-400">Python data science program</strong>, which has deepened my understanding of data analysis and machine learning concepts. My goal is to find a job that not only allows me to apply my coding skills but also fosters continuous learning and growth in the tech industry. I am passionate about creating innovative solutions and contributing to projects that have a meaningful impact.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Purpose of My Portfolio</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Thank you for taking the time to explore my portfolio! I designed this space to present my experience and skills in a professional manner, showcasing the various projects and accomplishments I have achieved throughout my coding journey. Each section is crafted to give you insight into my capabilities, creativity, and dedication to continuous improvement in the tech field. I hope you find the content engaging and informative, allowing you to learn more about who I am as a developer.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            If you have any questions or would like to discuss my work further, please don’t hesitate to reach out through the contact page. I am eager to connect and will respond as soon as possible. Your feedback and inquiries are valuable to me, and I look forward to engaging in meaningful conversations that could lead to exciting opportunities. My goal career is to work in software development, creating full-stack online applications that run on all platforms, including mobile devices. I have faith in my abilities and am giving it my best, but I know it will take time to become successful.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Courses I'm Taking</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            I'm taking a number of courses to help me realize my desire to become a software developer. Most of them are offered online at <a href="https://www.udemy.com" className="text-lavender-400 hover:underline">Udemy</a>. These courses provide hands-on experience and deep dives into various technologies that I can apply in my future projects. To view the course page, visit the link on the left side of this page.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills Development</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            These courses and experiences are advancing my abilities in many ways, allowing me to live more fully in some of the things I enjoy doing. When I achieve my goal job, I will continue to build on my skill set, and I firmly believe in my ability to succeed. The journey will take time, but I am dedicated to reaching my goal and constantly improving.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
