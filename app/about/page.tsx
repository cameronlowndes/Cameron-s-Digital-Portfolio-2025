import Head from "next/head";
import styles from './About.module.css';

export default function About() {
  return (
    <>
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

      <main className="flex-grow flex flex-col items-center justify-start px-6 pt-32 pb-32 bg-gradient-to-tr from-blue-900 via-indigo-900 to-purple-900 min-h-screen text-gray-100 select-none">
        <section className={`${styles.animateFadeInUp} w-full max-w-4xl bg-gradient-to-br from-indigo-800/80 via-blue-800/80 to-purple-900/90 rounded-3xl shadow-2xl border border-indigo-700 backdrop-blur-md p-12 md:p-16`}>
          <h1 className="text-5xl font-extrabold text-center mb-12 tracking-wide drop-shadow-lg">
            About <span className="text-indigo-400">Me</span>
          </h1>

          <div className="space-y-8 text-lg leading-relaxed tracking-wide">
            <p className="text-indigo-200">
              At <strong className="text-indigo-400">Cameron Digital Works</strong>, I’m continuously expanding my expertise in full-stack web development while building a foundation for long-term success in the tech industry.
              Having completed a comprehensive bootcamp in full-stack development, I’ve gained hands-on experience and strong proficiency in technologies such as
              <strong className="text-purple-400"> Python</strong>, <strong className="text-purple-400">JavaScript</strong>, and <strong className="text-purple-400">HTML</strong>.
              This technical background empowers me to create and deploy responsive, high-quality web applications tailored to real-world needs.
              <em className="text-indigo-300"> Cameron Digital Works</em> reflects both my professional growth and my commitment to delivering modern, scalable digital solutions.
            </p>

            <p className="text-indigo-200">
              In addition to my bootcamp experience, I have also pursued a{" "}
              <strong className="text-purple-400">Python data science program</strong>,
              which has deepened my understanding of data analysis and machine learning concepts.
              My goal is to find a job that not only allows me to apply my coding skills but also fosters continuous learning and growth in the tech industry.
            </p>

            <h2 className="text-3xl font-bold text-indigo-400 mt-12 mb-6 tracking-wide drop-shadow-md">
              Purpose of Cameron Digital Works
            </h2>

            <p className="text-indigo-200">
              Thank you for visiting <strong className="text-indigo-400">Cameron Digital Works</strong>! This platform was created to professionally showcase the skills,
              services, and projects behind the brand. It reflects my journey as a full-stack developer and highlights the practical solutions
              I offer to businesses and individuals alike. Every section is designed to give you a clear view of my capabilities,
              creative problem-solving, and commitment to building high-quality, scalable digital experiences.
            </p>

            <p className="text-indigo-200">
              If you have any questions or would like to discuss my work further, please don’t hesitate to
              reach out through the contact page. I am eager to connect and will respond as soon as possible.
              My goal career is to work in software development, creating full-stack online applications that run on all platforms, including mobile devices.
            </p>

            <h2 className="text-3xl font-bold text-indigo-400 mt-12 mb-6 tracking-wide drop-shadow-md">
              How I’m Growing as a Web Developer
            </h2>

            <p className="text-indigo-200">
              At <strong className="text-indigo-400">Cameron Digital Works</strong>, continuous learning is a core part of the mission. I am actively taking a range of advanced courses to further strengthen my skills as a full-stack software developer.
              In today’s fast-paced digital landscape, staying current is not just beneficial — it’s essential.
              Technology evolves rapidly, and the rise of cloud computing platforms like <strong className="text-blue-400">Amazon Web Services (AWS)</strong> and <strong className="text-blue-400">Microsoft Azure</strong>
              is reshaping how businesses build, deploy, and scale their applications.
            </p>

            <p className="text-indigo-200">
              By deepening my knowledge in areas such as cloud infrastructure, DevOps practices, and scalable architecture,
              I’m equipping myself and <strong className="text-indigo-400">Cameron Digital Works</strong> to deliver smarter, more efficient, and future-ready digital solutions.
              Whether it's integrating cloud services into web applications, optimizing performance, or ensuring secure and reliable deployments,
              I believe that embracing lifelong learning is key to staying relevant and providing real value in a constantly evolving industry.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
