import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Cameron Digital Works",
  description:
    "Review the terms and conditions that govern services provided by Cameron Digital Works, including ethics, accessibility, payment, privacy, cancellations, and dispute policies.",
  openGraph: {
    title: "Terms and Conditions - Cameron Digital Works",
    description:
      "Review the terms and conditions that govern services provided by Cameron Digital Works, including ethics, accessibility, payment, privacy, cancellations, and dispute policies.",
    images: ["/image/logo.jpg"],
    type: "website",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function Terms() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen flex flex-col pt-20 pb-20 px-6 bg-white text-gray-900 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">
        Terms and Conditions
      </h1>

      {/* Quick Summary */}
      <details className="mb-12 border rounded-md p-4 bg-gray-50">
        <summary className="cursor-pointer font-semibold text-lg select-none">
          Quick Summary
        </summary>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-base">
          <li>Using our services means you agree to these Terms.</li>
          <li>Payments are due within 7 days of invoice unless agreed otherwise.</li>
          <li>All work is aligned with our ethics, accessibility, and transparency standards.</li>
          <li>Project changes and cancellations follow clear, fair policies.</li>
          <li>Privacy and data security are enforced per UK GDPR.</li>
          <li>Limitation of liability applies to indirect damages.</li>
          <li>We reserve the right to pause or decline projects that conflict with our ethical values.</li>
        </ul>
      </details>

      {/* Sections 1–14 */}

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
        <p className="text-base leading-relaxed">
          By accessing the Cameron Digital Works website or engaging our services, you agree to these Terms and Conditions.
          As an ethics-focused business, all projects must adhere to principles of inclusivity, accessibility, transparency, fairness, privacy, and security. Projects conflicting with these principles may be paused or declined.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">2. About Cameron Digital Works</h2>
        <p className="text-base leading-relaxed">
          Cameron Digital Works (CDW) is a sole proprietorship operated by Cameron Lowndes in the United Kingdom.
          CDW provides ethical, accessible, and human-centred web development services and works only with clients whose projects respect equality, dignity, and lawful conduct.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">3. Services</h2>
        <p className="text-base leading-relaxed">
          CDW provides services including:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Full-stack web development (frontend & backend)</li>
          <li>Mobile-first, responsive, and accessible design</li>
          <li>Technical consultation, troubleshooting, and audits</li>
          <li>Server setup, monitoring, maintenance, and security hardening</li>
          <li>SEO improvements and content adjustments (ethical and accurate)</li>
          <li>Ongoing site management and updates</li>
        </ul>
        <p className="text-base leading-relaxed mt-2">
          All services are scoped via a written project proposal detailing deliverables, timelines, costs, and ethical/accessibility measures. CDW does not implement deceptive or harmful features (e.g., dark patterns, fake engagement, botting).
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">4. Project Deliverables & Revisions</h2>
        <p className="text-base leading-relaxed">
          Deliverables (code, designs, documentation) are provided upon completion and final payment.
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Minor revisions included within 14 days to fix defects or small scope adjustments.</li>
          <li>Substantial changes require a formal change request and may incur additional fees.</li>
          <li>Documentation includes plain-language notes, accessibility guidance, and style recommendations.</li>
          <li>Acceptance criteria may cover performance, accessibility heuristics, and ethical safeguards.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">5. Payments & Invoicing</h2>
        <p className="text-base leading-relaxed">
          Standard payment terms: net 7 days from invoice date unless agreed otherwise.
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>5% monthly late fee for overdue invoices.</li>
          <li>Temporary suspension of services for non-payment.</li>
          <li>Referral to collections/legal services after 30 days if unresolved.</li>
          <li>Payments via bank transfer (details on invoice). Reference the invoice number.</li>
          <li>All invoices are in GBP unless otherwise agreed.</li>
        </ul>
        <p className="text-base leading-relaxed mt-2">
          Good-faith payment plans may be considered for clients experiencing genuine hardship.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">6. Intellectual Property</h2>
        <p className="text-base leading-relaxed">
          All work remains CDW property until full payment.
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Clients receive a business-use license for completed work after payment.</li>
          <li>Resale, sublicensing, redistribution, or reuse requires prior written consent.</li>
          <li>Third-party assets are used under their licenses; client is responsible for ongoing compliance.</li>
          <li>Work will not include materials that infringe others’ rights; clients are notified if content raises IP or ethical concerns.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">7. Cancellations & Refunds</h2>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Written notice required to cancel.</li>
          <li>Fees due pro-rata for work performed.</li>
          <li>No refunds for completed milestones or delivered digital goods.</li>
          <li>CDW may pause or withdraw from projects conflicting with ethical principles, providing a fair pro-rata invoice.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">8. Privacy & Data Security</h2>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Compliance with Data Protection Act 2018 and UK GDPR.</li>
          <li>Data minimisation; only required project data is processed.</li>
          <li>Encrypted communications, access controls, patching, and hardening where appropriate.</li>
          <li>Backups are recommended for clients’ own copies.</li>
          <li>Data will not be sold or exploited; processors/subcontractors follow confidentiality rules.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">9. Client Responsibilities</h2>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Provide timely content, assets, and feedback.</li>
          <li>Ensure materials are lawful and do not infringe third-party rights.</li>
          <li>Consider accessibility guidance (alt text, transcripts, clear copy).</li>
          <li>Nominate a responsible contact for decision-making.</li>
          <li>Do not request features or tactics that are deceptive, discriminatory, or unlawful.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">10. Limitation of Liability</h2>
        <p className="text-base leading-relaxed">
          CDW is not liable for indirect or consequential losses. Total liability is capped at the amount paid for the service. Nothing limits liability where unlawful.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">11. Force Majeure</h2>
        <p className="text-base leading-relaxed">
          CDW is not responsible for delays due to events beyond reasonable control (natural disasters, strikes, outages, pandemics, cyber incidents). CDW will communicate promptly where possible.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">12. Changes to These Terms</h2>
        <p className="text-base leading-relaxed">
          Terms may be updated for legal, technical, or ethical reasons. Last-updated date will be visible. Continued use signifies acceptance.
        </p>
        <p className="text-sm text-gray-500 mt-2 select-none">
          Last updated: 6 September 2025
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">13. Contact</h2>
        <p className="text-base leading-relaxed">
          Email: <a href="mailto:camerondigitalwork@gmail.com" className="underline text-blue-700 hover:text-blue-900">camerondigitalwork@gmail.com</a><br/>
          Postal: Cameron Digital Works, United Kingdom<br/>
          Accessible formats available on request (larger print, plain-language summary, etc.). Response time: within 5 business days.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-2">14. Our Values</h2>
        <p className="text-base leading-relaxed mb-2">
          CDW is guided by ethics, inclusivity, transparency, accessibility, and integrity. Projects conflicting with these values will not proceed.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Inclusion for All</h3>
        <p className="text-base leading-relaxed mb-2">
          Everyone deserves respect and equal opportunity. Websites reflect these principles.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Celebrating Diversity</h3>
        <p className="text-base leading-relaxed mb-2">
          As a pansexual developer, I ensure diversity is central to all projects.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Supporting Neurodiversity</h3>
        <p className="text-base leading-relaxed mb-2">
          Accessibility is a priority, including clear typography, simple navigation, and dyslexia-friendly design.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Respect & Integrity</h3>
        <p className="text-base leading-relaxed mb-2">
          Professionalism, courtesy, and ethics guide all interactions. Work that conflicts with these values will be declined.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Transparency & Collaboration</h3>
        <p className="text-base leading-relaxed mb-2">
          Clear communication, detailed agreements, and collaborative partnerships ensure mutual understanding and success.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Online Responsibility & Growth</h3>
        <p className="text-base leading-relaxed">
          Websites reflect kindness, positive digital presence, and continuous learning.
        </p>
      </section>

      <div className="mt-16 text-center pb-6 sm:pb-2 space-y-4">
        <Link
          href="/terms/PrivacyPolicy"
          className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform"
        >
          Privacy Policy Page
        </Link>
        <Link
          href="/about/CoreValues"
          className="inline-block bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform"
        >
          Our Values Page
        </Link>
      </div>
    </main>
  );
}
