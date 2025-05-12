// pages/about.tsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

export default function About() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      <Head>
        <title>About Me | Cameron Lowndes - Full-Stack Developer</title>
        <meta
          name="description"
          content="Learn more about Cameron Lowndes, a passionate full-stack developer eager to contribute to innovative projects and expand his skills in the tech industry."
        />
        <meta property="og:title" content="About Me - Cameron Lowndes" />
        <meta
          property="og:description"
          content="Learn more about Cameron Lowndes, a passionate full-stack developer eager to contribute to innovative projects and expand his skills in the tech industry."
        />
        <meta property="og:image" content="/image/cameron.jpg" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Navbar />

      <div className="flex-grow flex flex-col items-center justify-start px-4 pt-24 pb-32">
        <section className="w-full max-w-4xl">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            About Me
          </h1>

          <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-200">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              I am currently immersed in learning various aspects of coding and am eager to secure a position where I can leverage my education and hands-on experience. Having completed a comprehensive full-stack web development bootcamp, I have gained proficiency in a range of programming languages, including{" "}
              <strong className="text-purple-600">Python</strong>,{" "}
              <strong className="text-purple-600">JavaScript</strong>, and{" "}
              <strong className="text-purple-600">HTML</strong>, as well as other relevant technologies. This educational background has equipped me with the skills necessary to develop and deploy web applications effectively.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              In addition to my bootcamp experience, I have also pursued a{" "}
              <strong className="text-purple-600">Python data science program</strong>, which has deepened my understanding of data analysis and machine learning concepts. My goal is to find a job that not only allows me to apply my coding skills but also fosters continuous learning and growth in the tech industry.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Purpose of My Portfolio
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Thank you for taking the time to explore my portfolio! I designed this space to present my experience and skills in a professional manner, showcasing the various projects and accomplishments I have achieved throughout my coding journey. Each section is crafted to give you insight into my capabilities, creativity, and dedication to continuous improvement in the tech field.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              If you have any questions or would like to discuss my work further, please don’t hesitate to reach out through the contact page. I am eager to connect and will respond as soon as possible. My goal career is to work in software development, creating full-stack online applications that run on all platforms, including mobile devices.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Courses I'm Taking
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              I'm taking a number of courses to help me realize my desire to become a software developer. Most of them are offered online at{" "}
              <a
                href="https://www.udemy.com"
                className="text-purple-600 hover:underline"
                target="_blank"
              >
                Udemy
              </a>
              . These courses provide hands-on experience and deep dives into various technologies that I can apply in my future projects.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Skills Development
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              These courses and experiences are advancing my abilities in many ways, allowing me to live more fully in some of the things I enjoy doing. When I achieve my goal job, I will continue to build on my skill set, and I firmly believe in my ability to succeed. The journey will take time, but I am dedicated to reaching my goal and constantly improving.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
