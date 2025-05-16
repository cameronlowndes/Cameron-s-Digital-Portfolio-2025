import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function OngoingMaintenance() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white">
      <Head>
        <title>Post-Launch Support & Ongoing Maintenance | Cameron Lowndes</title>
        <meta
          name="description"
          content="Ensure your website or application runs smoothly with post-launch support, bug fixes, performance tuning, and regular updates."
        />
      </Head>

      <Navbar />

      <main className="flex-grow pt-16 bg-gradient-to-b from-white px-4 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Post-Launch Support & Ongoing Maintenance
          </h1>
          <p className="text-xl text-gray-700">
            Keep your website or application running smoothly with reliable support and optimization.
          </p>
        </div>

               <div className="flex justify-center mb-16">
          <Link href="/terms/MaintenanceTerms" passHref>
            <button
              className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform text-center whitespace-pre-line"
              type="button"
            >
              Terms and Conditions{"\n"}for{"\n"}Post-Launch Support & Ongoing Maintenance
            </button>
          </Link>
        </div>

        {/* Service Breakdown */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">🔧 Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Bug Fixes */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border-t-8 border-red-500 flex flex-col">
              <h3 className="text-2xl font-bold text-red-600 mb-2">🐞 Bug Fixes</h3>
              <p className="text-lg font-semibold mb-4">
                Ensure your website or application is free from bugs that could affect the user experience.
              </p>
              <p className="text-md font-bold text-red-600 mb-2">
                💰 Starting from <span className="text-xl">£75</span> per fix or <span className="text-xl">£150/month</span> for basic coverage
              </p>
              <ul className="space-y-2 text-gray-700 flex-1">
                <li><CheckCircle className="inline mr-2 text-red-500" /> Fix broken links and error pages</li>
                <li><CheckCircle className="inline mr-2 text-red-500" /> Resolve JavaScript errors and performance issues</li>
                <li><CheckCircle className="inline mr-2 text-red-500" /> Resolve browser compatibility issues</li>
                <li><CheckCircle className="inline mr-2 text-red-500" /> Implement client feedback for continuous improvement</li>
              </ul>
            </div>

            {/* Performance Tuning */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border-t-8 border-blue-500 flex flex-col">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">⚡ Performance Tuning</h3>
              <p className="text-lg font-semibold mb-4">
                Optimize your website’s or app’s speed for a seamless user experience.
              </p>
              <p className="text-md font-bold text-blue-600 mb-2">
                💰 From <span className="text-xl">£200</span> one-time or <span className="text-xl">£300/month</span> with ongoing optimization
              </p>
              <ul className="space-y-2 text-gray-700 flex-1">
                <li><CheckCircle className="inline mr-2 text-blue-600" /> Optimize loading times for faster performance</li>
                <li><CheckCircle className="inline mr-2 text-blue-600" /> Image optimization and lazy loading</li>
                <li><CheckCircle className="inline mr-2 text-blue-600" /> Minify CSS and JavaScript for efficiency</li>
                <li><CheckCircle className="inline mr-2 text-blue-600" /> Cache management and CDN setup</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Updates */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">🔄 Regular Updates</h2>
          <div className="bg-white rounded-2xl shadow-xl p-6 border-t-8 border-purple-600">
            <h3 className="text-2xl font-bold text-purple-600 mb-2">🛠️ Site & App Updates</h3>
            <p className="text-lg font-semibold mb-4">
              Keep your platform up to date with the latest security patches, features, and improvements.
            </p>
            <p className="text-md font-bold text-purple-600 mb-2">
                💰 <span className="text-xl">£100/month</span> or <span className="text-xl">£1000/year</span> depending on scope
            </p>
            <ul className="space-y-2 text-gray-700 flex-1">
              <li><CheckCircle className="inline mr-2 text-purple-600" /> Regular content updates and feature enhancements</li>
              <li><CheckCircle className="inline mr-2 text-purple-600" /> Update plugins, libraries, and frameworks</li>
              <li><CheckCircle className="inline mr-2 text-purple-600" /> Ensure the site is fully secure with up-to-date patches</li>
              <li><CheckCircle className="inline mr-2 text-purple-600" /> Maintain compliance with best practices</li>
            </ul>
          </div>
        </section>

        {/* Ongoing Support */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">💼 Ongoing Support</h2>
          <div className="bg-white rounded-2xl shadow-xl p-6 border-t-8 border-green-500">
            <h3 className="text-2xl font-bold text-green-600 mb-2">📞 Continuous Assistance</h3>
            <p className="text-lg font-semibold mb-4">
              Get the help you need, whenever you need it, with our ongoing support services.
            </p>
            <p className="text-md font-bold text-green-600 mb-2">
                💰 <span className="text-xl">£170/month</span> for priority access & proactive monitoring depending on scope
            </p>
            <ul className="space-y-2 text-gray-700 flex-1">
              <li><CheckCircle className="inline mr-2 text-green-600" /> Access to a dedicated support team</li>
              <li><CheckCircle className="inline mr-2 text-green-600" /> Priority handling for urgent issues</li>
              <li><CheckCircle className="inline mr-2 text-green-600" /> Proactive monitoring to catch problems before they occur</li>
              <li><CheckCircle className="inline mr-2 text-green-600" /> Guidance on scaling and evolving your platform</li>
            </ul>
          </div>
        </section>

        {/* Contact Form */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
            📩 Request Ongoing Support & Maintenance
          </h2>
          <div className="w-full aspect-[4/3] max-w-3xl mx-auto">
            <iframe
              src="https://forms.gle/hPqprkC8yyZsyMAt5"
              width="100%"
              height="100%"
              className="w-full h-[600px] border-0 rounded-xl shadow-lg"
              loading="lazy"
              allowFullScreen
            >
              Loading…
            </iframe>
          </div>
        </section>

        <div className="text-center mb-12">
          <Link href="/services">
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform">
              ⬅ Back to Services
            </button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
