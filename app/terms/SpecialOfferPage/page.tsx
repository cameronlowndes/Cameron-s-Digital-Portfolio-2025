import Head from "next/head";
import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Terms & Conditions | Discounted Offer | Cameron Lowndes",
  description:
    "Terms and conditions for the discounted web development services offered to charities and small businesses by Cameron Lowndes.",
  keywords: [
    "Cameron Lowndes",
    "discounted web development",
    "charity websites",
    "small business websites",
    "Next.js development",
    "React development",
    "terms and conditions",
  ],
  openGraph: {
    title: "Terms & Conditions | Discounted Offer | Cameron Lowndes",
    description:
      "Terms and conditions for the discounted web development services offered to charities and small businesses by Cameron Lowndes.",
    images: ["/image/logo.jpg"],
    type: "website",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
};

export default function DiscountedDevTerms() {
  return (
    <div className="min-h-screen flex flex-col pt-16 bg-gradient-to-b from-gray-50 to-white px-4">
      <Head>
        <title>Terms & Conditions | Discounted Offer | Cameron Lowndes</title>
        <meta
          name="description"
          content="Terms and conditions for the discounted web development services offered to charities and small businesses by Cameron Lowndes."
        />
      </Head>



      <main className="max-w-4xl mx-auto w-full py-16">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">📄 Terms & Conditions</h1>
          <p className="text-gray-600 text-lg">
            Discounted Web Development Services for Charities & Small Businesses
          </p>
        </div>

        <section className="space-y-8 text-gray-800 text-base leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">1. Eligibility</h2>
            <p>This offer is available exclusively to verified:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Registered charities with a valid charity number</li>
              <li>Small businesses with fewer than 10 employees and under £200,000 annual turnover</li>
            </ul>
            <p className="mt-2">
              Verification may include documentation such as official registration certificates, proof of turnover (e.g. tax filings), or employee headcount (e.g. payroll summary). Applications are reviewed on a case-by-case basis.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">2. Scope of Services</h2>
            <p>
              The services offered under this program include a set of predefined packages, which may consist of custom design, responsive development, basic SEO setup, integration of contact forms, and CMS setup (e.g., WordPress, Next.js). Additional services such as eCommerce functionality, advanced animations, API integrations, or copywriting are not included unless specifically agreed upon in writing and may incur extra fees.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">3. Payment Terms</h2>
            <p>
              Full payment is typically required upfront before development begins. However, for eligible applicants, flexible payment plans are available. These may involve an initial upfront payment followed by monthly installments over a 12-month period. All payment agreements must be finalized and documented in writing prior to the start of the project. Work will not commence until the first payment is received.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">4. Timeline & Communication</h2>
            <p>
              A detailed project timeline will be shared with the client at the start of the engagement. Estimated delivery times are dependent on timely feedback and provision of necessary materials (e.g. text, images, branding). If the client fails to respond within 7 days at any point during the project, the timeline may be extended or the project paused. Clear and ongoing communication is critical to ensuring a smooth development process.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">5. Cancellation & Refunds</h2>
            <p>
              All payments are non-refundable once development work has begun. If a project is cancelled before any work starts, a partial refund may be issued at the discretion of the developer, minus any time spent on consultation or planning. In the event of a payment plan, the client remains responsible for completing scheduled payments as per the agreed contract.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">6. Intellectual Property</h2>
            <p>
              Upon full payment, the client receives full ownership of the final website and its assets. This includes all code, content, and designs unless third-party licenses or software are used (e.g. stock photos, plugins), in which case license terms will apply. The developer retains the right to display completed work in a personal or professional portfolio.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">7. Fair Use Clause</h2>
            <p>
              This discounted offer is extended to support charities and small businesses making a positive impact. Any misuse, including reselling the service, submitting false information to qualify, or requesting excessive changes beyond the agreed scope, may result in immediate cancellation without refund and may be subject to legal action. The developer reserves the right to deny service if abuse is suspected.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">8. Ongoing Maintenance</h2>
            <p>
              Ongoing maintenance, such as software updates, bug fixes, backups, and content updates, is not included by default. Maintenance packages can be purchased as monthly add-ons and are billed separately. Clients who opt-in can cancel with 14 days’ written notice. Emergency support is available but may be billed at an hourly rate if no plan is in place.
            </p>

          </div>
          {/* Explanation of "+" symbol for prices */}
          <section className="mb-16 max-w-md mx-auto bg-indigo-100 bg-opacity-30 rounded-lg p-4 text-center text-gray-700 italic text-sm">
            <strong>Note:</strong> The symbol <span className="font-bold">+</span> next to a price (e.g., £1999+) indicates that the price is a starting estimate and may vary based on project scope and additional requirements.
          </section>

        </section>

        <div className="mt-16 text-center pb-6 sm:pb-0">
          <Link href="/services/SpecialOfferPage">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform">
              ⬅ Back to Offer Page
            </button>
          </Link>
        </div>
      </main>


    </div>
  );
}
