import Head from "next/head";
import Link from "next/link";

export default function ConsultationTerms() {
  return (
    <div className="min-h-screen flex flex-col pt-16 px-4">
      <Head>
        <title>Consultation Terms & Conditions | Cameron Lowndes</title>
        <meta
          name="description"
          content="Terms and conditions governing the consultation services provided by Cameron Lowndes."
        />
      </Head>

      <main className="flex-grow max-w-4xl mx-auto w-full py-16">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
          Terms & Conditions for Consultation Services
        </h1>

        <section className="space-y-6 text-gray-800 text-lg leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold mb-2">1. Introduction</h2>
            <p>
              These terms and conditions outline the rules and regulations for the use of Cameron Lowndes’ Consultation Services. By booking any consultation package, you accept and agree to be bound by these terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">2. Booking & Payment</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Full payment is required prior to the consultation date.</li>
              <li>Payments are non-refundable except in circumstances outlined below.</li>
              <li>Consultations can be booked via the provided contact form. A confirmation email will follow with details.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">3. Cancellation & Rescheduling</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>You may cancel or reschedule a session up to 48 hours in advance.</li>
              <li>No refunds are issued for cancellations made within 48 hours of your scheduled session.</li>
              <li>In the event Cameron Lowndes must reschedule, a new date will be provided promptly or a full refund offered.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">4. Service Scope</h2>
            <p>
              The consultation services provided are advisory in nature. Any actions taken based on the advice are at your own discretion and risk. Cameron Lowndes accepts no liability for business decisions made as a result of the consultation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">5. Free Tier Consultation</h2>
            <p>
              The Free Tier consultation is available specifically for small businesses and charities. It consists of a 30-minute session providing initial advice and guidance. This tier is designed to support community organizations with limited resources.
            </p>
            <p>
              Due to its complimentary nature, availability may be limited, and sessions are subject to scheduling based on demand. The same general terms of confidentiality and service scope apply.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">6. Confidentiality</h2>
            <p>
              All information shared during consultations will be treated as confidential and will not be disclosed to third parties without written consent unless required by law.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">7. Intellectual Property</h2>
            <p>
              Any materials or strategies shared during the consultation remain the intellectual property of Cameron Lowndes unless otherwise agreed in writing.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">8. Limitation of Liability</h2>
            <p>
              Under no circumstances will Cameron Lowndes be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use the services provided.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">9. Changes to Terms</h2>
            <p>
              These terms may be updated from time to time. Clients will be notified of significant changes, and continued use of services implies acceptance of the revised terms.
            </p>
          </div>

          {/* Explanation of "+" symbol for prices */}
          <section className="mb-16 max-w-md mx-auto bg-indigo-100 bg-opacity-30 rounded-lg p-4 text-center text-gray-700 italic text-sm">
            <strong>Note:</strong> The symbol <span className="font-bold">+</span> next to a price (e.g., £1999+) indicates that the price is a starting estimate and may vary based on project scope and additional requirements.
          </section>

        </section>

        <div className="mt-16 text-center pb-6 sm:pb-0">
          <Link href="/services/consultation">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform">
              ⬅ Consultation Services
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
