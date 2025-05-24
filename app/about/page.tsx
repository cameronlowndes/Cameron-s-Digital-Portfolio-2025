// pages/about.tsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

export default function About() {
  return (
    <main className="flex flex-col min-h-screen">
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
              At Cameron Digital Works, I’m continuously expanding my expertise in full-stack web development while building a foundation for long-term success in the tech industry.
              Having completed a comprehensive bootcamp in full-stack development, I’ve gained hands-on experience and strong proficiency in technologies such as
              <strong className="text-purple-600">Python</strong>, <strong className="text-purple-600">JavaScript</strong>, and <strong className="text-purple-600">HTML</strong>.
              This technical background empowers me to create and deploy responsive, high-quality web applications tailored to real-world needs.
              Cameron Digital Works reflects both my professional growth and my commitment to delivering modern, scalable digital solutions.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              In addition to my bootcamp experience, I have also pursued a{" "}
              <strong className="text-purple-600">Python data science program</strong>,
              which has deepened my understanding of data analysis and machine learning concepts.
              My goal is to find a job that not only allows me to apply my coding skills but also fosters continuous learning and growth in the tech industry.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Purpose of Cameron Digital Works
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Thank you for visiting Cameron Digital Works! This platform was created to professionally showcase the skills,
              services, and projects behind the brand. It reflects my journey as a full-stack developer and highlights the practical solutions
              I offer to businesses and individuals alike. Every section is designed to give you a clear view of my capabilities,
              creative problem-solving, and commitment to building high-quality, scalable digital experiences.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              If you have any questions or would like to discuss my work further, please don’t hesitate to
              reach out through the contact page. I am eager to connect and will respond as soon as possible.
              My goal career is to work in software development, creating full-stack online applications that run on all platforms, including mobile devices.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How I’m Growing as a Web Developer</h2>
            <p>
              At Cameron Digital Works, continuous learning is a core part of the mission. I am actively taking a range of advanced courses to further strengthen my skills as a 
              full-stack software developer. In today’s fast-paced digital landscape, staying current is not just beneficial it’s essential. Technology evolves rapidly, and the rise offer
               cloud computing platforms like <strong className="text-blue-600">Amazon Web Services (AWS)</strong> and <strong className="text-blue-600">Microsoft Azure</strong> 
               is reshaping how businesses build, deploy, and scale their applications.
              By deepening my knowledge in areas such as cloud infrastructure, DevOps practices, and scalable architecture, 
              I’m equipping myself and Cameron Digital Works to deliver smarter, more efficient, and future ready digital solutions. 
              Whether it's integrating cloud services into web applications, optimizing performance, or ensuring secure and reliable deployments,
               I believe that embracing lifelong learning is key to staying relevant and providing real value in a constantly evolving industry.
            </p>

            
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
