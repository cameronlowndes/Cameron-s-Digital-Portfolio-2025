"use client";

import React from "react";
import Link from "next/link";

export default function SocialMediaTermsContent() {
  return (
    <div className="min-h-screen flex flex-col pt-16 px-4 bg-white text-gray-900">
      <main className="flex-grow max-w-4xl mx-auto w-full py-16">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
          Terms & Conditions for Social Media Services
        </h1>

        {/* Packages Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">📦 Packages & Deliverables</h2>
          <p className="text-gray-700 mb-2">
            Cameron Digital Works offers three main social media packages: Starter, Professional, and Premium. Each package includes specific services, such as content creation, posting, analytics, and engagement tracking.
          </p>
          <p className="text-gray-700">
            Deliverables are provided according to the package selected at the time of booking. Any requests beyond the listed features (e.g., additional platforms, custom campaigns) may require extra charges. Cameron Digital Works will communicate clearly about what is included and provide timelines for delivery.
          </p>
        </section>

        {/* Payment Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">💳 Payment Terms</h2>
          <p className="text-gray-700 mb-2">
            Cameron Digital Works requires full payment for services before work begins. Optional add-ons, such as ad campaigns, custom graphics, or influencer collaborations, are charged separately and must be confirmed in writing before implementation.
          </p>
          <p className="text-gray-700">
            All payments are non-refundable once work has started. This is to cover the time, effort, and resources Cameron Digital Works dedicates to creating and managing your social media content.
          </p>
        </section>

        {/* Cancellation Policy */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">❌ Cancellation Policy</h2>
          <p className="text-gray-700">
            Clients may cancel their project before work begins for a full refund. Once work has started, payments are non-refundable.
          </p>
        </section>

        {/* Intellectual Property */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">📄 Intellectual Property</h2>
          <p className="text-gray-700">
            Cameron Digital Works retains ownership of all content created until full payment is received. After payment, ownership of approved deliverables is transferred to the client. Cameron Digital Works reserves the right to showcase work in portfolios or marketing materials unless requested otherwise.
          </p>
        </section>

        {/* Confidentiality */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">🔒 Confidentiality</h2>
          <p className="text-gray-700">
            All client information, accounts, and content provided to Cameron Digital Works will be kept confidential and not shared with third parties, except as required to provide services.
          </p>
        </section>

        {/* Turnaround Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">⏱️ Turnaround Time</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Cameron Digital Works will provide estimated delivery times for posts, reports, and campaigns. These timelines assume prompt communication and asset delivery from the client.</li>
            <li>Delays in providing content, logos, access to accounts, or approvals may result in extended project timelines.</li>
            <li>All timelines are approximate. Cameron Digital Works will do its best to adhere to deadlines, but external factors such as platform restrictions or algorithm changes may affect posting schedules and performance.</li>
          </ul>
        </section>

        {/* Revisions Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">🛠️ Revisions & Support</h2>
          <p className="text-gray-700 mb-2">
            Each package includes a limited number of revisions. Cameron Digital Works will work with you to make necessary adjustments to ensure satisfaction. Additional revisions beyond the agreed number may incur extra charges.
          </p>
          <p className="text-gray-700">
            Premium clients may receive ongoing support, including guidance on content strategy and campaign optimization. Cameron Digital Works is committed to providing professional advice and support, but cannot guarantee specific results.
          </p>
        </section>

        {/* Followers Disclaimer Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">⚠️ Followers & Engagement Disclaimer</h2>
          <p className="text-gray-700 mb-2">
            Cameron Digital Works cannot guarantee specific numbers of followers, likes, comments, or engagement rates. Social media growth is influenced by factors outside our control, including platform algorithms, audience behavior, content virality, and external trends.
          </p>
          <p className="text-gray-700 mb-2">
            We commit to using best practices, creating high-quality content, posting consistently, and optimizing your social media accounts to increase your audience and engagement. Cameron Digital Works will provide transparent performance reports and recommendations.
          </p>
          <p className="text-gray-700 mb-2">
            Any company claiming guaranteed followers or engagement is likely engaging in deceptive or fraudulent practices. Cameron Digital Works follows ethical practices and prioritizes authentic growth rather than artificial metrics.
          </p>
          <p className="text-gray-700">
            By using Cameron Digital Works’ services, clients acknowledge that results may vary and agree that no guarantees of social media metrics are implied or promised.
          </p>
        </section>

        {/* Client Responsibilities */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">📝 Client Responsibilities</h2>
          <p className="text-gray-700">
            Clients are responsible for providing timely access to social media accounts, logos, images, and approvals. Clients must ensure all content is legally compliant, including copyright and platform guidelines.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">⚖️ Limitation of Liability</h2>
          <p className="text-gray-700">
            Cameron Digital Works is not liable for indirect, incidental, or consequential damages resulting from social media services, including revenue loss, platform restrictions, or technical issues.
          </p>
        </section>

        {/* Force Majeure */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">🌪️ Force Majeure</h2>
          <p className="text-gray-700">
            Cameron Digital Works is not responsible for delays or failure to perform due to circumstances beyond its reasonable control, such as natural disasters, platform outages, or changes in regulations.
          </p>
        </section>

        {/* Communication Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">📩 Communication</h2>
          <p className="text-gray-700">
            All communication with Cameron Digital Works will be conducted via email, Google Forms, or scheduled video calls. Timely responses from the client are required to maintain project timelines. Delays in communication may affect posting schedules, reporting, and campaign management.
          </p>
        </section>

        {/* Agreement Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">📌 Agreement</h2>
          <p className="text-gray-700">
            By commissioning a package, submitting a contact form, or requesting services from Cameron Digital Works, you agree to all terms and conditions outlined above. These terms may be updated periodically, and continued use of services constitutes acceptance of the updated terms.
          </p>
        </section>

        {/* Plus Symbol */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">➕ Plus Symbol</h2>
          <p className="text-gray-700">
            The symbol + next to a price (e.g., £1999+) indicates that the price is a starting estimate and may vary based on project scope and additional requirements.
          </p>
        </section>

        {/* Note Section */}
        <section className="mb-16 max-w-md mx-auto bg-indigo-100 bg-opacity-30 rounded-lg p-4 text-center text-gray-700 italic text-sm">
          <strong>Note:</strong> Optional add-ons incur extra charges and are not included in base package prices. Cameron Digital Works will provide clear quotes before any additional services are implemented.
        </section>

        {/* Back Button */}
        <div className="mt-16 text-center pb-6 sm:pb-0">
          <Link href="/services/SocialMedia" passHref>
            <button
              type="button"
              className="cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform"
            >
              ⬅ Back to Social Media Page
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
