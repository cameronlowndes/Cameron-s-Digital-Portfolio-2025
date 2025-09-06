import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Cameron Digital Works",
  description:
    "Learn how Cameron Digital Works collects, uses, and protects your personal data while upholding values of ethics, inclusivity, accessibility, and transparency.",
  openGraph: {
    title: "Privacy Policy - Cameron Digital Works",
    description:
      "Learn how Cameron Digital Works collects, uses, and protects your personal data while upholding values of ethics, inclusivity, accessibility, and transparency.",
    images: ["/image/logo.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - Cameron Digital Works",
    description:
      "Learn how Cameron Digital Works collects, uses, and protects your personal data while upholding values of ethics, inclusivity, accessibility, and transparency.",
    images: ["/image/logo.jpg"],
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen flex flex-col pt-20 px-6 pb-20 bg-white text-gray-900 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">
        Privacy Policy – Cameron Digital Works (Ethics-Focused)
      </h1>

      <p className="text-sm text-gray-500 text-center mb-10 select-none">
        Effective Date: September 4, 2025
      </p>

      {/* Quick Summary Accordion */}
      <details className="mb-12 border rounded-md p-4 bg-gray-50">
        <summary className="cursor-pointer font-semibold text-lg select-none">
          Quick Summary
        </summary>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-base">
          <li>I only collect information necessary to provide services ethically.</li>
          <li>Your personal data is never sold or exploited.</li>
          <li>You have full control over your data (access, correction, deletion).</li>
          <li>Cookies are used only for accessibility, usability, and analytics.</li>
          <li>Data is stored securely and only kept as long as required.</li>
        </ul>
      </details>

      {/* Sections */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
        <p className="text-base leading-relaxed">
          At Cameron Digital Works, I don’t just build websites—I build them
          responsibly, inclusively, and ethically. This Privacy Policy explains
          how I collect, use, and protect your personal data while upholding my
          core values of fairness, transparency, respect, and accessibility.
        </p>
        <p className="text-base leading-relaxed mt-2">
          I comply with the UK Data Protection Act 2018 and UK GDPR. By using my
          services or website, you consent to this ethical handling of your data.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">2. Information I Collect</h2>
        <ul className="list-disc pl-6 text-base space-y-1">
          <li>
            <strong>Personal Information:</strong> Full name, email, phone,
            postal address, company details, job title, and payment info.
          </li>
          <li>
            <strong>Project Information:</strong> Requirements, designs, media,
            files, and communication records.
          </li>
          <li>
            <strong>Technical & Usage Data:</strong> IP address, device type,
            OS, browser, website activity, and cookies.
          </li>
        </ul>
        <p className="mt-2 text-base leading-relaxed">
          <em>Ethical Note:</em> I do not collect unnecessary data, nor do I sell
          or exploit your information.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">3. How I Use Your Information</h2>
        <ul className="list-disc pl-6 text-base space-y-1">
          <li>Delivering web development and accessibility services</li>
          <li>Clear and timely communication about projects and invoices</li>
          <li>Meeting legal compliance and bookkeeping standards</li>
          <li>Improving accessibility, usability, and client experience</li>
        </ul>
        <p className="mt-2">
          I will never use your data for deceptive marketing or share it without
          your consent.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">
          4. Ethical Data Sharing & Disclosure
        </h2>
        <p className="text-base leading-relaxed">
          I only share data with trusted partners, under ethical agreements:
        </p>
        <ul className="list-disc pl-6 text-base space-y-1">
          <li>Accountants, hosting providers, or IT support (confidentiality bound)</li>
          <li>Legal authorities, only if required by law</li>
        </ul>
        <p className="mt-2">I never exploit client data for profit or gain.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">5. Your Rights</h2>
        <ul className="list-disc pl-6 text-base space-y-1">
          <li>Access your data</li>
          <li>Correct inaccuracies</li>
          <li>Request deletion</li>
          <li>Restrict or object to processing</li>
          <li>Request portability of your data</li>
        </ul>
        <p className="mt-2">
          Contact:{" "}
          <a
            href="mailto:camerondigitalwork@gmail.com"
            className="underline text-blue-700 hover:text-blue-900"
          >
            cameron<strong>digital</strong>work@gmail.com
          </a>
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">6. Data Retention</h2>
        <p>
          Data is retained only as long as necessary for fulfilling projects,
          legal, and ethical obligations. Afterward, it is securely deleted or
          anonymised.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">
          7. Accessibility & Inclusivity
        </h2>
        <p>
          I design with accessibility in mind, ensuring content is usable for
          people with disabilities or neurodivergence. Your data is handled in
          ways that support inclusivity, not just efficiency.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">8. Cookies & Tracking</h2>
        <p>Cookies are only used to:</p>
        <ul className="list-disc pl-6 text-base space-y-1">
          <li>Enhance user experience</li>
          <li>Track anonymous usage</li>
          <li>Improve accessibility and functionality</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">9. Security Measures</h2>
        <ul className="list-disc pl-6 text-base space-y-1">
          <li>Encrypted communications</li>
          <li>Secure storage and access controls</li>
          <li>Regular audits and updates</li>
          <li>Protection of sensitive project files</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">
          10. Transparency & Accountability
        </h2>
        <p>
          Consent is always required for personal data collection. I provide
          honest reporting, clear communication, and ethical decision-making at
          all times.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">11. Third-Party Links</h2>
        <p>
          I may link to third-party resources. I am not responsible for their
          privacy practices and recommend reviewing their policies.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">12. Children’s Data</h2>
        <p>
          Services are for adults (18+). I do not knowingly collect data from
          children.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">
          13. International Data Transfers
        </h2>
        <p>
          If data is transferred outside the UK, I ensure GDPR safeguards and
          ethical handling by all parties involved.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">14. Updates to this Policy</h2>
        <p>
          This policy may be updated to reflect ethical practices or legal
          requirements. Significant changes will be highlighted on the site.
        </p>
        <p className="text-sm text-gray-500 mt-2 select-none">
          Last updated: September 4, 2025
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">15. Contact</h2>
        <p>
          For questions, email:{" "}
          <a
            href="mailto:camerondigitalwork@gmail.com"
            className="underline text-blue-700 hover:text-blue-900"
          >
            cameron<strong>digital</strong>work@gmail.com
          </a>
        </p>
      </section>
       {/* Buttons */}
      <div className="mt-16 text-center pb-6 sm:pb-2 space-y-4">
        <Link
          href="/terms"
          className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform"
        >
         Terms and Conditions
        </Link>
        </div>
    </main>
  );
}
