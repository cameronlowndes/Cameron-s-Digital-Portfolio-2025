// pages/terms.tsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col pt-16 px-4">
      <Head>
        <title>Terms and Conditions | Cameron Lowndes - Full-Stack Developer</title>
        <meta
          name="description"
          content="Read the terms and conditions for using the services offered by Cameron Lowndes, a full-stack developer. Understand the rules and guidelines for using this website and related services."
        />
        <meta property="og:title" content="Terms and Conditions - Cameron Lowndes" />
        <meta
          property="og:description"
          content="Read the terms and conditions for using the services offered by Cameron Lowndes, a full-stack developer. Understand the rules and guidelines for using this website and related services."
        />
        <meta property="og:image" content="/image/cameron.jpg" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Navbar />

      <main className="max-w-6xl mx-auto w-full py-16">
        <h1 className="text-5xl font-semibold text-center text-gray-900 mb-16">
          Terms and Conditions
        </h1>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Introduction</h2>
          <p className="text-lg text-gray-700 mb-4">
            These terms and conditions ("Terms") govern your use of the website and the services provided by Cameron Lowndes ("I," "me," or "my"). By accessing or using the website and services, you agree to comply with and be bound by these Terms. If you do not agree with these Terms, please do not use the website or services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Services</h2>
          <p className="text-lg text-gray-700 mb-4">
            Cameron Lowndes provides web development, cloud solutions, custom software development, and consulting services. The services offered will be detailed in the service agreements and are subject to change without prior notice.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Use of the Website</h2>
          <p className="text-lg text-gray-700 mb-4">
            You agree to use the website only for lawful purposes and in accordance with these Terms. You must not use the website to transmit or introduce any viruses, malicious code, or harmful data.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Intellectual Property</h2>
          <p className="text-lg text-gray-700 mb-4">
            All content, logos, designs, and intellectual property on this website are the property of Cameron Lowndes unless otherwise stated. You may not use any content from this website without obtaining permission from me.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Limitation of Liability</h2>
          <p className="text-lg text-gray-700 mb-4">
            In no event shall Cameron Lowndes be liable for any direct, indirect, incidental, special, or consequential damages arising from the use of the website or services. This includes, but is not limited to, loss of data or business interruption.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Indemnification</h2>
          <p className="text-lg text-gray-700 mb-4">
            You agree to indemnify and hold harmless Cameron Lowndes from any claims, damages, liabilities, or expenses (including legal fees) arising from your use of the website or services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Termination</h2>
          <p className="text-lg text-gray-700 mb-4">
            I reserve the right to suspend or terminate your access to the website and services at any time, without notice, for any violation of these Terms or any unlawful activity.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Governing Law</h2>
          <p className="text-lg text-gray-700 mb-4">
            These Terms are governed by and construed in accordance with the laws of the jurisdiction in which I operate. Any legal action or proceeding related to these Terms must be brought in the appropriate court in that jurisdiction.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Changes to Terms</h2>
          <p className="text-lg text-gray-700 mb-4">
            I may update or modify these Terms at any time. Any changes will be posted on this page, and the date of the most recent revision will be reflected at the top of the page.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Information</h2>
          <p className="text-lg text-gray-700 mb-4">
            If you have any questions or concerns about these Terms, please contact me at: <strong>contact@cameronlowndes.com</strong>.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
