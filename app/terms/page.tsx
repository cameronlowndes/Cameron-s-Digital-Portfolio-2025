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
            These Terms and Conditions ("Terms") govern your use of the website and the services provided by Cameron Lowndes, a sole trader operating under the business name [Your Business Name]. By accessing or using the website and services, you agree to comply with and be bound by these Terms. If you do not agree with these Terms, please do not use the website or services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-lg text-gray-700 mb-4">
            Cameron Lowndes is a sole trader registered with HMRC in the United Kingdom, offering [description of services]. The business operates under the registered trading name [Your Business Name].
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Scope of Services</h2>
          <p className="text-lg text-gray-700 mb-4">
            We provide the following services:
            <ul className="list-disc pl-6 text-lg text-gray-700">
              <li>Web development (including design, development, and maintenance)</li>
              <li>Server management and hosting services</li>
              <li>Custom web applications</li>
              <li>SEO optimization</li>
              <li>Mobile-first website design</li>
              <li>Technical support and consultancy</li>
            </ul>
            These services are subject to availability and may change from time to time. Additional or custom services can be requested and are subject to mutual agreement.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contract Formation</h2>
          <p className="text-lg text-gray-700 mb-4">
            By placing an order or requesting services from us, you are making an offer to purchase services under these Terms and Conditions. We reserve the right to accept or reject any offer, and the contract will be deemed to have been formed upon our acceptance.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Payment Terms</h2>
          <p className="text-lg text-gray-700 mb-4">
            - Payments for services will be due within <strong>7 days</strong> of the invoice date.<br />
            - A <strong>5% interest charge</strong> may apply to overdue balances after <strong>7 days</strong> from the invoice date.<br />
            - Continued <strong>non-payment</strong> may result in <strong>service suspension</strong> until the outstanding amount is paid.<br />
            - Please <strong>reference the invoice number</strong> when making payment to avoid processing delays.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Failure to make payment in accordance with these terms may result in the suspension or termination of services, and the client will be responsible for any recovery costs associated with overdue payments.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Liability</h2>
          <p className="text-lg text-gray-700 mb-4">
            Cameron Lowndes will not be liable for any indirect, special, or consequential damages resulting from the use of our services. Our liability is limited to the total amount paid for the services that directly caused the damage.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Privacy and Data Protection</h2>
          <p className="text-lg text-gray-700 mb-4">
            We are committed to protecting your privacy and handling your data in compliance with UK data protection laws, including the Data Protection Act 2018 and GDPR. For more information, please refer to our Privacy Policy.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Cancellation and Refunds</h2>
          <p className="text-lg text-gray-700 mb-4">
            If you wish to cancel a service, you must notify us in writing. Refunds are only provided in accordance with our refund policy, which may vary depending on the nature of the service. In most cases, once the work has commenced or services have been rendered, refunds may not be issued.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Governing Law</h2>
          <p className="text-lg text-gray-700 mb-4">
            These Terms and Conditions shall be governed by and construed in accordance with the laws of the United Kingdom. Any disputes shall be subject to the exclusive jurisdiction of the courts of the United Kingdom.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Changes to Terms</h2>
          <p className="text-lg text-gray-700 mb-4">
            We reserve the right to update or modify these Terms and Conditions at any time. Any changes will be posted on this page, and it is your responsibility to review them regularly.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Information</h2>
          <p className="text-lg text-gray-700 mb-4">
            For any questions or concerns regarding these Terms and Conditions, you can contact us at: <strong>camerondigitalwork@gmail.com</strong>.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
