import Head from "next/head";

import Link from "next/link";

export default function BuildTerms() {
  return (
    <div className="min-h-screen flex flex-col pt-16 bg-gradient-to-b from-gray-100 to-white px-4">
      <Head>
        <title>Build Terms & Conditions | Cameron Lowndes</title>
        <meta
          name="description"
          content="Detailed terms and conditions for Next.js and React development services by Cameron Lowndes."
        />
      </Head>


      <main className="flex-grow max-w-4xl mx-auto w-full py-16">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
          🔒 Build Terms & Conditions for HTML/CSS Development
        </h1>

        <section className="space-y-10 text-gray-700 text-lg leading-relaxed">

          <div>
            <h2 className="text-2xl font-bold mb-3">1. Project Timeline & Delivery</h2>
            <p>
              Project timelines vary depending on package and project complexity. Timelines start only once the client has provided all necessary content, assets, branding materials, and approvals.
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Starter:</strong> Estimated 5–7 business days</li>
              <li><strong>Professional:</strong> Estimated 10–14 business days</li>
              <li><strong>Premium:</strong> Timeline custom; agreed before project start</li>
            </ul>
            <p className="mt-2">
              Any delays in client feedback or asset delivery may extend the timeline.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">2. Revisions</h2>
            <p>
              Revisions are an important part of the process. To keep the project on track, revision rounds are limited per package:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Starter:</strong> 1 revision round included</li>
              <li><strong>Professional:</strong> 2 revision rounds included</li>
              <li><strong>Premium:</strong> Unlimited revisions within the agreed scope</li>
            </ul>
            <p className="mt-2">
              Additional revisions or changes beyond the original scope will incur extra fees billed at £50/hour.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">3. Payment Terms</h2>
            <p>
              To secure your project start date, a deposit is required:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Projects under £999: 100% payment upfront</li>
              <li>Projects £999 and above: 50% deposit upfront, balance upon project completion</li>
            </ul>
            <p className="mt-2">
              Payments can be made via bank transfer, PayPal, or other agreed methods. Final deliverables are provided after full payment is received.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">4. Deliverables & Intellectual Property</h2>
            <p>
              Upon receipt of full payment, all source files, website code, and assets created specifically for your project become your property.
            </p>
            <p className="mt-2">
              Note that any third-party assets (images, fonts, plugins) must be properly licensed by the client or are subject to their own licensing agreements.
            </p>
            <p className="mt-2">
              The developer retains the right to showcase the project in portfolios and marketing materials unless explicitly requested otherwise.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">5. Exclusions</h2>
            <p>
              The base development packages exclude the following services unless otherwise stated:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Content creation or copywriting</li>
              <li>Graphic or logo design</li>
              <li>Ongoing website maintenance or updates (available via maintenance plan)</li>
              <li>Third-party plugin or API costs</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">6. Communication & Client Responsibilities</h2>
            <p>
              Communication will primarily be conducted through email or a shared project management tool (such as Trello or Notion), to be agreed before project start.
            </p>
            <p className="mt-2">
              Clients are expected to provide timely feedback and supply all necessary materials to avoid project delays.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">7. Hosting, Domain & Deployment</h2>
            <p>
              Hosting, domain purchase, and ongoing hosting fees are the client’s responsibility unless hosting migration services are included as an add-on.
            </p>
            <p className="mt-2">
              The developer will assist with deployment to the client's hosting environment after final payment is made.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">8. Maintenance & Support</h2>
            <p>
              One week of complimentary post-launch bug fixing is included with all packages.
            </p>
            <p className="mt-2">
              Extended maintenance and updates are available for an additional monthly fee (£250/month) under a separate maintenance agreement.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">9. Cancellation & Refund Policy</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Cancellation prior to project start: Full refund of all payments made.</li>
              <li>Cancellation after work begins: Refunds prorated based on completed work.</li>
              <li>No refunds after final deliverables have been approved and delivered.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">10. Confidentiality</h2>
            <p>
              Both parties agree to keep all project information, proprietary materials, and communications confidential.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">11. Liability</h2>
            <p>
              The developer is not liable for indirect, incidental, or consequential damages arising from use of the delivered website or materials.
            </p>
            <p className="mt-2">
              It is the client’s responsibility to maintain backups of website content and data.
            </p>
          </div>

              {/* Explanation of "+" symbol for prices */}
        <section className="mb-16 max-w-md mx-auto bg-indigo-100 bg-opacity-30 rounded-lg p-4 text-center text-gray-700 italic text-sm">
          <strong>Note:</strong> The symbol <span className="font-bold">+</span> next to a price (e.g., £1999+) indicates that the price is a starting estimate and may vary based on project scope and additional requirements.
        </section>

        </section>

        <div className="mt-16 text-center pb-6 sm:pb-0">
          <Link href="/services/HTMLCssDevelopment">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform">
              ⬅HTML/CSS Development
            </button>
          </Link>
        </div>
      </main>

   
    </div>
  );
}
