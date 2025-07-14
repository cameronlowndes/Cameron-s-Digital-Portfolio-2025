"use client";

import Head from "next/head";

export default function PrivacyPolicy() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Head>
        <title>Privacy Policy | Cameron Digital Works</title>
        <meta
          name="description"
          content="Understand how Cameron Digital Works collects, uses, and protects your personal data in accordance with GDPR and UK data protection laws."
        />
        <meta property="og:title" content="Privacy Policy - Cameron Digital Works" />
        <meta
          property="og:description"
          content="Understand how Cameron Digital Works collects, uses, and protects your personal data in accordance with GDPR and UK data protection laws."
        />
        <meta property="og:image" content="/image/logo.jpg" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Twitter Open Graph */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy - Cameron Digital Works" />
        <meta
          name="twitter:description"
          content="Understand how Cameron Digital Works collects, uses, and protects your personal data in accordance with GDPR and UK data protection laws."
        />
        <meta name="twitter:image" content="/image/logo.jpg" />
      </Head>

      <main className="min-h-screen flex flex-col pt-20 px-6 pb-20 bg-white text-gray-900 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>

        {/* Quick Summary Accordion */}
        <details className="mb-12 border rounded-md p-4 bg-gray-50">
          <summary className="cursor-pointer font-semibold text-lg select-none">
            Quick Summary
          </summary>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-base">
            <li>We only collect necessary information to deliver our services.</li>
            <li>Your personal data is never sold or rented.</li>
            <li>You have full control over your data including access, correction, and deletion.</li>
            <li>We use cookies only to improve website experience and analytics.</li>
            <li>We keep your data securely and only for as long as needed.</li>
          </ul>
        </details>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
          <p className="text-base leading-relaxed">
            At Cameron Digital Works, we take your privacy seriously. This Privacy Policy explains what personal data we collect,
            why we collect it, how we process it, and how you can exercise your rights. We are committed to handling your
            information securely and transparently in accordance with the Data Protection Act 2018 and the UK General Data
            Protection Regulation (GDPR).
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
          <p className="text-base leading-relaxed">
            We may collect and process the following types of personal information:
          </p>
          <ul className="list-disc pl-6 text-base space-y-1">
            <li>Full name, email address, phone number, and postal address</li>
            <li>Company details and job title (if applicable)</li>
            <li>Project requirements and communication records</li>
            <li>Non-sensitive financial data for invoicing and transactions</li>
            <li>Website usage data through cookies and analytics tools</li>
            <li>IP addresses, browser types, and device data for technical logs</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Information</h2>
          <p className="text-base leading-relaxed">
            The data we collect is used for the following purposes:
          </p>
          <ul className="list-disc pl-6 text-base space-y-1">
            <li>To provide you with web development services and support</li>
            <li>To communicate updates on your project, invoices, and contracts</li>
            <li>To comply with accounting, legal, and regulatory obligations</li>
            <li>To analyse website usage and improve our online services</li>
            <li>To manage our business operations and client relationships</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">4. Data Sharing & Disclosure</h2>
          <p className="text-base leading-relaxed">
            We treat your data with respect and do not sell, trade, or rent your personal information. However, we may share your data with trusted third parties, only when necessary, including:
          </p>
          <ul className="list-disc pl-6 text-base space-y-1">
            <li>Professional service providers (e.g., accountants, payment processors)</li>
            <li>IT support and hosting companies (bound by confidentiality agreements)</li>
            <li>Legal authorities, if required by law or for the protection of rights</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">5. Your Rights</h2>
          <p className="text-base leading-relaxed">
            Under data protection law, you have rights regarding your personal data, including:
          </p>
          <ul className="list-disc pl-6 text-base space-y-1">
            <li>Right to access – You can request copies of your personal data</li>
            <li>Right to rectification – You can request correction of inaccurate or incomplete data</li>
            <li>Right to erasure – You can request deletion of your personal data</li>
            <li>Right to restrict processing – You can request limits on how your data is used</li>
            <li>Right to object – You can object to specific types of data processing</li>
            <li>Right to data portability – You can request a copy of your data in a portable format</li>
          </ul>
          <p className="text-base leading-relaxed mt-2">
            To exercise any of these rights, contact us at:{" "}
            <a href="mailto:camerondigitalwork@gmail.com" className="underline text-blue-700 ml-1">
              cameron<strong>digital</strong>work@gmail.com
            </a>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">6. Data Retention</h2>
          <p className="text-base leading-relaxed">
            We retain personal data for as long as is necessary for the purposes outlined in this policy, including the fulfilment of our
            legal, contractual, and business obligations. After this period, data is securely deleted or anonymised.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">7. Cookies</h2>
          <p className="text-base leading-relaxed">
            Cookies are small text files placed on your device to enhance your experience. Our site may use cookies for:
          </p>
          <ul className="list-disc pl-6 text-base space-y-1">
            <li>Saving your preferences (e.g., dark mode, language)</li>
            <li>Measuring site traffic and user interactions via tools like Google Analytics</li>
          </ul>
          <p className="text-base leading-relaxed mt-2">
            You can disable cookies through your browser settings, though some functionality may be limited.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">8. Security</h2>
          <p className="text-base leading-relaxed">
            We implement a variety of security measures to protect your data, including:
          </p>
          <ul className="list-disc pl-6 text-base space-y-1">
            <li>Encrypted email and document delivery</li>
            <li>Password-protected storage systems</li>
            <li>Firewalls and up-to-date server software</li>
            <li>Regular audits and access control reviews</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">9. Updates to this Policy</h2>
          <p className="text-base leading-relaxed">
            This Privacy Policy may be reviewed and updated from time to time. Significant changes will be highlighted
            at the top of this page. The date of the most recent update will be noted here.
          </p>
          <p className="text-sm text-gray-500 mt-2 select-none">Last updated: July 14, 2025</p>
        </section>


      </main>
    </>
  );
}
