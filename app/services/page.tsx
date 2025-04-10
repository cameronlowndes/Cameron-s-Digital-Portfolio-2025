// pages/services.tsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Services() {
  return (
    <div className="bg-white min-h-screen flex flex-col pt-24 pb-1 px-4">
      <Head>
        {/* Custom Page Title */}
        <title>Services | Cameron Lowndes - Full-Stack Developer</title>

        {/* SEO Metadata */}
        <meta
          name="description"
          content="Discover the services offered by Cameron Lowndes, a skilled full-stack developer, including web development, cloud solutions, and custom software development."
        />
        <meta property="og:title" content="Services - Cameron Lowndes" />
        <meta
          property="og:description"
          content="Discover the services offered by Cameron Lowndes, a skilled full-stack developer, including web development, cloud solutions, and custom software development."
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
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Services</h1>

        <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-200">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            As a full-stack developer with experience in various technologies and cloud computing, I offer a range of services designed to help you achieve your business goals.
          </p>

          {/* Web Development Service */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Web Development</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            I specialize in creating responsive, fast, and user-friendly websites. From static sites to dynamic web applications, I build solutions tailored to your needs. I work with modern frameworks and technologies like <strong className="text-lavender-400">Next.js</strong>, <strong className="text-lavender-400">React</strong>, and <strong className="text-lavender-400">Node.js</strong>.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="font-semibold text-xl text-gray-800 mb-4">Next.js/React Development</h3>
              <p className="text-lg text-gray-700 mb-4">
                Build fast and scalable websites using Next.js or React, optimized for performance.
              </p>
              <p className="text-2xl font-bold text-gray-800 mb-4">
                £1500 - £3000
              </p>
              <button className="bg-lavender-400 text-black px-4 py-2 rounded-md">Get Started</button>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="font-semibold text-xl text-gray-800 mb-4">Basic HTML/CSS Development</h3>
              <p className="text-lg text-gray-700 mb-4">
                For simple and clean static websites, I offer basic HTML and CSS development.
              </p>
              <p className="text-2xl font-bold text-gray-800 mb-4">
                £500 - £1000
              </p>
              <button className="bg-lavender-400 text-whit px-4 py-2 rounded-md">Get Started</button>
            </div>
          </div>

          {/* Cloud Solutions Service */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cloud Solutions</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            With expertise in <strong className="text-lavender-400">Azure</strong> and <strong className="text-lavender-400">AWS</strong>, I can help you migrate, deploy, and manage applications in the cloud. Whether you're looking to scale your application or leverage cloud services, I provide solutions that enhance performance and reduce operational costs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="font-semibold text-xl text-gray-800 mb-4">Cloud Migration</h3>
              <p className="text-lg text-gray-700 mb-4">
                Migrate your applications to the cloud for improved performance and scalability.
              </p>
              <p className="text-2xl font-bold text-gray-800 mb-4">
                £2000 - £5000
              </p>
              <button className="bg-lavender-400 text-black px-4 py-2 rounded-md">Get Started</button>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="font-semibold text-xl text-gray-800 mb-4">Cloud Deployment & Management</h3>
              <p className="text-lg text-gray-700 mb-4">
                Deployment and management of your cloud infrastructure to ensure smooth operations.
              </p>
              <p className="text-2xl font-bold text-gray-800 mb-4">
                £1500 - £3000
              </p>
              <button className="bg-lavender-400 text-black px-4 py-2 rounded-md">Get Started</button>
            </div>
          </div>

          {/* Custom Software Development Service */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Custom Software Development</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            I offer custom software development services to create solutions that are tailored specifically to your business needs. From database design to API integration, I build systems that streamline workflows and improve efficiency.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="font-semibold text-xl text-gray-800 mb-4">Custom Web Application</h3>
              <p className="text-lg text-black text-gray-700 mb-4">
                Fully customized web applications to suit your unique business needs.
              </p>
              <p className="text-2xl font-bold text-gray-800 mb-4">
                £2500 - £8000
              </p>
              <button className="bg-lavender-400 text-black px-4 py-2 rounded-md">Get Started</button>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="font-semibold text-xl text-gray-800 mb-4">API Integration</h3>
              <p className="text-lg text-gray-700 mb-4">
                Seamless API integration to enhance your applications with third-party services.
              </p>
              <p className="text-2xl font-bold text-gray-800 mb-4">
                £1000 - £2500
              </p>
              <button className="bg-lavender-400 texte-black px-4 py-2 rounded-md">Get Started</button>
            </div>
          </div>

          {/* Maintenance and Support Service */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Maintenance and Support</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Post-launch, I offer maintenance and support to ensure your website or application continues to run smoothly. Whether it's troubleshooting issues or implementing updates, I’m here to keep your systems optimized.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="font-semibold text-xl text-gray-800 mb-4">Ongoing Maintenance</h3>
              <p className="text-lg text-gray-700 mb-4">
                Ongoing support and optimization to keep your application running smoothly.
              </p>
              <p className="text-2xl font-bold text-gray-800 mb-4">
                £500 - £1500 per month
              </p>
              <button className="bg-lavender-400 text-black px-4 py-2 rounded-md">Get Started</button>
            </div>
          </div>

          {/* Consulting Service */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Consulting</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            If you’re unsure where to start, I offer consulting services to help guide your project. I provide advice on architecture, technology stacks, and best practices to ensure your project is set up for success.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="font-semibold text-xl text-gray-800 mb-4">Consultation Hourly Rate</h3>
              <p className="text-lg text-gray-700 mb-4">
                Hourly consultation to help you navigate the best path forward.
              </p>
              <p className="text-2xl font-bold text-gray-800 mb-4">
                £100 - £200 per hour
              </p>
              <button className="bg-lavender-400 text-black px-4 py-2 rounded-md">Get Started</button>
            </div>
          </div>

          {/* Small Business Offer */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Special Offer for Small Companies</h3>
            <p className="text-lg text-gray-700 mb-4">
              If you’re a small business, I offer customized pricing and special discounts. Please get in touch with me, and I’d be happy to discuss how I can help your business succeed.
            </p>
            <button className="bg-lavender-400 text-black px-6 py-3 rounded-md">Contact Me</button>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
