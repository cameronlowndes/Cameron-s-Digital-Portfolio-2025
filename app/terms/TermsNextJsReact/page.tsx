import Head from "next/head";
import Link from "next/link";

export default function TermsNextJsReact() {
  return (
    <div className="min-h-screen flex flex-col pt-16 px-4">
      <Head>
        <title>Terms & Conditions | Next.js/React Development</title>
        <meta
          name="description"
          content="Terms and conditions for Next.js and React development services offered by Cameron Lowndes."
        />
      </Head>

      <main className="flex-grow max-w-4xl mx-auto w-full py-16">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
          Terms & Conditions for Next.js / React Development
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">📦 Packages & Deliverables</h2>
          <p className="text-gray-700">
            Each package (Starter, Professional, Premium) includes the features listed at time of booking. Any changes or additions beyond the listed items may require additional costs. Deliverables are provided as per the specifications outlined during the initial consultation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">💳 Payment Terms</h2>
          <p className="text-gray-700">
            A minimum of 50% upfront payment is required before any development begins. The remaining 50% is due upon project completion and approval. All payments are non-refundable once work has commenced.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">⏱️ Turnaround Time</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>For <strong>projects priced over £1000</strong>, a <strong>50% upfront payment</strong> is required before development begins. The remaining 50% is due upon project completion and approval.</li>
            <li>For <strong>projects priced at £1000 or below</strong>, <strong>full payment is required upfront</strong> before work commences.</li>
            <li><strong>All payments are non-refundable</strong> once development has started.</li>
            <li>Timeline estimates (e.g. 5–7 days) are dependent on prompt communication and asset delivery.</li>
            <li>Revisions beyond the agreed scope may incur additional charges.</li>
            <li>Final project delivery includes deployment and basic handover support. Ongoing maintenance is available as an add-on.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">🛠️ Revisions & Support</h2>
          <p className="text-gray-700">
            Each package includes a limited number of revisions (typically 2 rounds unless otherwise agreed). Additional revisions are chargeable. Premium clients receive ongoing support as part of their plan.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">📎 Ownership & Licensing</h2>
          <p className="text-gray-700">
            Upon full payment, the client receives full ownership of the codebase. Credits to Cameron Lowndes may appear in the code or website footer unless a watermark removal add-on is purchased.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">⚠️ Limitations & Disclaimers</h2>
          <p className="text-gray-700">
            Projects do not include backend development, database setup, or custom server infrastructure unless explicitly specified. Any 3rd-party integrations (e.g. Stripe, Firebase) rely on those platforms' uptime and documentation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">📩 Communication</h2>
          <p className="text-gray-700">
            All communication will be conducted via email, Google Forms, or video calls. Delays in response may delay the project timeline.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">📌 Agreement</h2>
          <p className="text-gray-700">
            By commissioning a package or submitting the Google Form, you agree to these terms and conditions. These may be updated periodically.
          </p>
        </section>

        {/* Explanation of "+" symbol for prices */}
        <section className="mb-16 max-w-md mx-auto bg-indigo-100 bg-opacity-30 rounded-lg p-4 text-center text-gray-700 italic text-sm">
          <strong>Note:</strong> The symbol <span className="font-bold">+</span> next to a price (e.g., £1999+) indicates that the price is a starting estimate and may vary based on project scope and additional requirements.
        </section>

        <div className="mt-16 text-center pb-6 sm:pb-0">
          <Link href="/services/NextJSDevelopment">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform">
              ⬅ Next.js / React Development
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
