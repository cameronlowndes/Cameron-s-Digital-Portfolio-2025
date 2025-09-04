"use client";

import Head from "next/head";
import Link from "next/link";

export default function Terms() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Head>
        <title>Terms and Conditions | Cameron Digital Works</title>
        <meta
          name="description"
          content="Review the terms and conditions that govern use of services provided by Cameron Digital Works, including policies on payment, privacy, cancellations, social media services, and ethical standards."
        />
        <meta property="og:title" content="Terms and Conditions - Cameron Digital Works" />
        <meta
          property="og:description"
          content="Review the terms and conditions that govern use of services provided by Cameron Digital Works, including policies on payment, privacy, cancellations, social media services, and ethical standards."
        />
        <meta property="og:image" content="/image/logo.jpg" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="min-h-screen flex flex-col pt-20 pb-20 px-6 bg-white text-gray-900 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Terms and Conditions</h1>

        {/* Quick Summary */}
        <details className="mb-12 border rounded-md p-4 bg-gray-50">
          <summary className="cursor-pointer font-semibold text-lg select-none">
            Quick Summary
          </summary>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-base">
            <li>Using our services means you agree to these Terms.</li>
            <li>Payments are due within 7 days of invoice.</li>
            <li>We respect your privacy and data security.</li>
            <li>Project changes and cancellations have defined policies.</li>
            <li>Social media services may include additional disclaimers regarding engagement & followers.</li>
            <li>We are not liable for indirect damages.</li>
            <li>All work aligns with our values of inclusivity, integrity, and respect.</li>
          </ul>
        </details>

        {/* Core Terms 1-13 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
          <p className="text-base leading-relaxed">
            These Terms and Conditions ("Terms") govern the provision of services by Cameron
            Digital Works. By using our website or engaging our services, you agree to be legally
            bound by these Terms. These Terms apply to all clients, collaborators, and visitors.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">2. About Cameron Digital Works</h2>
          <p className="text-base leading-relaxed">
            Cameron Digital Works is a sole proprietorship owned and operated by Cameron Lowndes in
            the United Kingdom. We specialise in ethical and accessible web development services
            built around values of inclusivity, transparency, and respect.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">3. Services</h2>
          <ul className="list-disc pl-6 text-base space-y-1">
            <li>Full-stack web development (frontend & backend)</li>
            <li>Mobile-first and responsive web design</li>
            <li>Technical consultation and troubleshooting</li>
            <li>Server setup, monitoring, and maintenance</li>
            <li>SEO improvements and content adjustments</li>
            <li>Ongoing site management and updates</li>
          </ul>
          <p className="mt-2 text-base">
            A full project proposal including scope, timeline, and costs will be shared before any
            work begins. Work is accepted only if it aligns with our values and capabilities.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">4. Project Deliverables & Revisions</h2>
          <p className="text-base leading-relaxed">
            All deliverables, including code, designs, and documentation, will be provided upon
            completion and final payment. Minor revisions are typically included within 14 days of
            project completion. Substantial revisions or scope changes may be billed separately.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">5. Payments and Invoicing</h2>
          <p className="text-base leading-relaxed mb-2">
            Payment terms are net <strong>7 days</strong> from the date of invoice unless otherwise
            agreed in writing. Invoices unpaid after 7 days may incur:
          </p>
          <ul className="list-disc pl-6 text-base space-y-1">
            <li>A 5% late fee applied monthly</li>
            <li>Temporary suspension of services or access</li>
            <li>Referral to a collections or legal service after 30 days</li>
          </ul>
          <p className="mt-2 text-base">
            Invoices should be paid via bank transfer (details provided on the invoice). Please
            quote the invoice reference number when paying.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">6. Intellectual Property</h2>
          <p className="text-base leading-relaxed">
            All custom work remains the intellectual property of Cameron Digital Works until full
            payment is received. Upon final payment, clients receive a license to use the code or
            assets for their intended business purposes. Reuse or resale is not permitted without
            prior written consent.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">7. Cancellations & Refunds</h2>
          <p className="text-base leading-relaxed">
            Clients may cancel a project by giving written notice. If work has already started, a
            cancellation fee may apply to cover work completed to date. Refunds are not issued for
            completed milestones or digital goods already delivered. Projects may be paused or
            rescheduled where appropriate.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">8. Privacy and Data Security</h2>
          <p className="text-base leading-relaxed">
            We comply with the Data Protection Act 2018 and UK GDPR. All client data is stored
            securely and is not shared with third parties without explicit consent. Clients are
            responsible for the legality of any data or content they provide. Backups are taken
            regularly but we recommend clients retain their own copies.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">9. Client Responsibilities</h2>
          <p className="text-base leading-relaxed">
            Clients must provide timely access to content, assets, and feedback to ensure the
            project timeline is met. Delays in providing required materials may result in project
            rescheduling or additional charges.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">10. Limitation of Liability</h2>
          <p className="text-base leading-relaxed">
            Cameron Digital Works is not responsible for indirect or consequential damages,
            including but not limited to lost profits, loss of data, or downtime. Total liability is
            limited to the amount paid by the client for the specific service involved in the
            dispute.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">11. Force Majeure</h2>
          <p className="text-base leading-relaxed">
            Cameron Digital Works shall not be liable for failure or delay in performance due to
            circumstances beyond reasonable control including natural disasters, cyberattacks,
            strikes, outages, or changes in legal regulations.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">12. Changes to These Terms</h2>
          <p className="text-base leading-relaxed">
            Terms may be updated at any time. It is the client’s responsibility to check this page
            periodically. Continued use of our services constitutes acceptance of the most recent
            version of these Terms.
          </p>
          <p className="text-sm text-gray-500 mt-2 select-none">Last updated: July 14, 2025</p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-2">13. Contact</h2>
          <p className="text-base leading-relaxed">
            Questions or concerns about these Terms should be directed to:
            <br />
            <a
              href="mailto:camerondigitalwork@gmail.com"
              className="underline text-blue-700 hover:text-blue-900"
            >
              cameron<strong>digital</strong>work@gmail.com
            </a>
          </p>
        </section>

       

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-2">14. Our Values</h2>

          <p className="text-base leading-relaxed mb-2">
            At Cameron Digital Works, I hold strong core values that guide everything I do as a web developer.
            I believe in fairness and integrity, and I’m committed to working only with clients whose projects align with my values.
            If a website doesn’t reflect the principles I stand for, I will respectfully decline to create it.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Inclusion for All</h3>
          <p className="text-base leading-relaxed mb-2">
            No matter your background, beliefs, or identity, you deserve respect and equal opportunity.
            I’m committed to building websites that reflect these values.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Celebrating Diversity</h3>
          <p className="text-base leading-relaxed mb-2">
            I am a passionate pansexual developer who believes diversity is essential. Projects are inclusive and welcoming for all.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Supporting Neurodiversity</h3>
          <p className="text-base leading-relaxed mb-2">
            I focus on creating accessible, user-friendly websites for people with dyslexia and other neurodivergent conditions, including clear typography and simple navigation.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Respect & Integrity</h3>
          <p className="text-base leading-relaxed mb-2">
            I maintain professionalism and courtesy, declining work that conflicts with inclusivity, ethics, or equality.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Transparency & Collaboration</h3>
          <p className="text-base leading-relaxed mb-2">
            I commit to clear, honest communication, detailed agreements, and collaborative partnerships to ensure mutual understanding and successful outcomes.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Online Responsibility & Ongoing Growth</h3>
          <p className="text-base leading-relaxed mb-2">
            All websites created reflect respect, kindness, and positive digital presence. Continuous learning ensures that services evolve with the changing digital landscape.
          </p>

          <p className="text-base leading-relaxed">
            By partnering with Cameron Digital Works, clients receive projects built with integrity, inclusivity, transparency, and user-focused design.
          </p>
        </section>

        {/* Buttons */}
        <div className="mt-16 text-center pb-6 sm:pb-2 space-y-4">
          <Link href="/terms/PrivacyPolicy">
            <button className="cursor-pointer bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform">
              Privacy Policy Page
            </button>
          </Link>
          <Link href="/values">
            <button className="cursor-pointer bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform">
              Our Values Page
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
