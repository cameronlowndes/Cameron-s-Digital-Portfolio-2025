"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function AboutClient() {
  return (
    <main className="flex-grow flex flex-col items-center justify-start px-6 pt-32 pb-32 bg-gradient-to-tr from-blue-900 via-indigo-900 to-purple-900 min-h-screen text-gray-100 select-none font-sans">
      <section className="relative w-full max-w-5xl rounded-3xl bg-gradient-to-br from-indigo-800/90 via-blue-800/90 to-purple-900/90 shadow-2xl border border-indigo-700 backdrop-blur-lg p-14 md:p-20 overflow-hidden">
        {/* Glowing circles */}
        <div className="absolute -top-20 -left-10 w-72 h-72 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute top-0 -right-20 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-6000" />

        <motion.h1
          className="relative text-6xl md:text-7xl font-extrabold text-center mb-14 tracking-wide drop-shadow-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeInUp}
        >
          About <span className="text-indigo-400">Me</span>
        </motion.h1>

        <div className="relative space-y-10 text-lg leading-relaxed tracking-wide max-w-3xl mx-auto">
          <motion.p
            className="text-indigo-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeInUp}
          >
            At <strong className="text-indigo-400">Cameron Digital Works</strong>, I’m continuously expanding my expertise in full-stack web development while building a foundation for long-term success in the tech industry. Having completed a comprehensive bootcamp in full-stack development, I’ve gained hands-on experience and strong proficiency in technologies such as <strong className="text-purple-400">Python</strong>, <strong className="text-purple-400">JavaScript</strong>, and <strong className="text-purple-400">HTML</strong>. This technical background empowers me to create and deploy responsive, high-quality web applications tailored to real-world needs. <em className="text-indigo-300">Cameron Digital Works</em> reflects both my professional growth and my commitment to delivering modern, scalable digital solutions.
          </motion.p>

          <motion.p
            className="text-indigo-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeInUp}
          >
            In addition to my bootcamp experience, I have also pursued a <strong className="text-purple-400">Python data science program</strong>, which has deepened my understanding of data analysis and machine learning concepts. My goal is to find a job that not only allows me to apply my coding skills but also fosters continuous learning and growth in the tech industry.
          </motion.p>

          <motion.h2
            className="text-4xl font-bold text-indigo-400 mt-16 mb-6 tracking-wide drop-shadow-lg border-b-2 border-indigo-500 pb-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            variants={fadeInUp}
          >
            Purpose of Cameron Digital Works
          </motion.h2>

          <motion.p
            className="text-indigo-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
            variants={fadeInUp}
          >
            Thank you for visiting <strong className="text-indigo-400">Cameron Digital Works</strong>! This platform was created to professionally showcase the skills, services, and projects behind the brand. It reflects my journey as a full-stack developer and highlights the practical solutions I offer to businesses and individuals alike. Every section is designed to give you a clear view of my capabilities, creative problem-solving, and commitment to building high-quality, scalable digital experiences.
          </motion.p>

          <motion.p
            className="text-indigo-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={5}
            variants={fadeInUp}
          >
            If you have any questions or would like to discuss my work further, please don’t hesitate to reach out through the contact page. I am eager to connect and will respond as soon as possible. My goal career is to work in software development, creating full-stack online applications that run on all platforms, including mobile devices.
          </motion.p>

          <motion.h2
            className="text-4xl font-bold text-indigo-400 mt-16 mb-6 tracking-wide drop-shadow-lg border-b-2 border-indigo-500 pb-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={6}
            variants={fadeInUp}
          >
            How I’m Growing as a Web Developer
          </motion.h2>

          <motion.p
            className="text-indigo-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={7}
            variants={fadeInUp}
          >
            At <strong className="text-indigo-400">Cameron Digital Works</strong>, continuous learning is a core part of the mission. I am actively taking a range of advanced courses to further strengthen my skills as a full-stack software developer. In today’s fast-paced digital landscape, staying current is not just beneficial — it’s essential. Technology evolves rapidly, and the rise of cloud computing platforms like <strong className="text-blue-400">Amazon Web Services (AWS)</strong> and <strong className="text-blue-400">Microsoft Azure</strong> is reshaping how businesses build, deploy, and scale their applications.
          </motion.p>

          <motion.p
            className="text-indigo-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={8}
            variants={fadeInUp}
          >
            By deepening my knowledge in areas such as cloud infrastructure, DevOps practices, and scalable architecture, I’m equipping myself and <strong className="text-indigo-400">Cameron Digital Works</strong> to deliver smarter, more efficient, and future-ready digital solutions. Whether it's integrating cloud services into web applications, optimizing performance, or ensuring secure and reliable deployments, I believe that embracing lifelong learning is key to staying relevant and providing real value in a constantly evolving industry.
          </motion.p>
        </div>
      </section>

      {/* Custom Tailwind Animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-6000 {
          animation-delay: 6s;
        }
      `}</style>
    </main>
  );
}
