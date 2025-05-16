import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function MaintenanceTerms() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b">
      <Head>
        <title>Terms & Conditions | Ongoing Maintenance | Cameron Lowndes</title>
        <meta
          name="description"
          content="View the terms and conditions for ongoing maintenance and post-launch support services provided by Cameron Lowndes."
        />
      </Head>

      <Navbar />

      <main className="flex-grow pt-20 pb-16 px-6 max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
          📜 Terms & Conditions: Ongoing Maintenance & Post-Launch Support
        </h1>

        {/* Section: Overview */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Overview</h2>
          <p className="text-gray-700 text-lg">
            These terms apply to all ongoing maintenance, post-launch support, bug fixing, performance optimization, and related services provided by Cameron Lowndes. By purchasing any of these services, you agree to the following terms.
          </p>
        </section>

        {/* Section: Services Included */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Services Included</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
            <li>Bug Fixing & Error Resolution</li>
            <li>Performance Tuning & Speed Optimization</li>
            <li>Content & Feature Updates</li>
            <li>Security Patching & Compliance Updates</li>
            <li>Ongoing Support & Proactive Monitoring</li>
          </ul>
        </section>

        {/* Section: Pricing & Payment */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Pricing & Payment</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
            <li>All prices are listed clearly on the <strong>Ongoing Maintenance</strong> service page.</li>
            <li><strong>Monthly plans</strong> must be paid in advance. Services will begin once payment is received.</li>
            <li><strong>One-time services</strong> (e.g., single bug fixes or performance improvements) require full payment before work begins.</li>
            <li>For projects over <strong>£1000</strong>, a 50% deposit is required upfront. The remaining 50% is due upon completion and approval.</li>
            <li>All payments are <strong>non-refundable</strong> once the work has commenced.</li>
          </ul>
        </section>

        {/* Section: Cancellations & Termination */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Cancellations & Termination</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
            <li>Monthly plans can be cancelled anytime with no future billing.</li>
            <li>Once cancelled, support and updates will cease at the end of your paid period.</li>
            <li>No refunds will be issued for partial months or services already delivered.</li>
          </ul>
        </section>

        {/* Section: Client Responsibilities */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Client Responsibilities</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
            <li>You agree to provide timely access to servers, credentials, and necessary content.</li>
            <li>Client delays in communication or asset delivery may impact project timelines and ongoing services.</li>
            <li>You are responsible for maintaining your own backups unless otherwise agreed in writing.</li>
          </ul>
        </section>

        {/* Section: Liability & Warranty */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Liability & Warranty</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
            <li>Best efforts will be made to ensure uptime and service quality.</li>
            <li>However, no guarantees are made regarding uptime, bug prevention, or traffic performance unless part of a dedicated SLA (Service Level Agreement).</li>
            <li>Cameron Lowndes is not responsible for losses resulting from third-party tools, platforms, or server outages.</li>
          </ul>
        </section>

        {/* Section: Privacy & Confidentiality */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Privacy & Confidentiality</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
            <li>All information shared with Cameron Lowndes during the project is treated as confidential.</li>
            <li>Your data will never be shared, sold, or disclosed to third parties without explicit written consent.</li>
          </ul>
        </section>

        {/* Section: Changes to Terms */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Changes to These Terms</h2>
          <p className="text-gray-700 text-lg">
            These terms may be updated occasionally. Clients will be notified of major changes. Continued use of services after changes constitutes acceptance of the revised terms.
          </p>
        </section>
        <div className="mt-16 text-center pb-6 sm:pb-0">
        <Link href="/services/OngoingMaintenance">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform">
            ⬅ Ongoing Maintenance<br />&<br />Post-Launch Support
            </button>
        </Link>
     </div>
      </main>
      <Footer />
    </div>
  );
}
