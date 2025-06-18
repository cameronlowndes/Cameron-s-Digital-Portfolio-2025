import Head from "next/head";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import ConsultationServicesContactForm from '../../components/ContactForms/ConsultationServicesContactForm'

export default function ExpertConsultation() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-gray-100 font-sans">
      <Head>
        <title>Expert Consultation Services | Cameron Lowndes</title>
        <meta
          name="description"
          content="Tailored expert consultation services to help your business grow, improve efficiency, and solve complex challenges."
        />
      </Head>

      <main className="flex-1 w-full max-w-6xl mx-auto px-6 pt-28 pb-36">
        {/* Header */}
        <header className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-lg">
            Expert Consultation Services
          </h1>
          <p className="text-xl sm:text-2xl text-indigo-300 leading-relaxed font-light">
            Tailored solutions to help your business grow, improve efficiency, and solve complex challenges.
          </p>
        </header>

        {/* Terms Button */}
        <div className="flex justify-center mb-20">
          <Link href="/terms/ConsultationTerms" passHref>
            <button
              type="button"
              className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-4 rounded-full shadow-xl hover:scale-110 hover:shadow-2xl transition-transform duration-300 font-semibold text-lg whitespace-pre-line select-none"
            >
              Terms and Conditions{"\n"}for{"\n"}Expert Consultation Services
            </button>
          </Link>
        </div>

        {/* What's Included */}
        <section className="bg-indigo-800 bg-opacity-70 p-8 rounded-3xl shadow-2xl mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 border-b-4 border-pink-500 inline-block pb-2">
            What’s Included
          </h2>
          <ul className="space-y-5 text-indigo-100 text-lg">
            {[
              "One-on-one expert consultation tailored to your needs",
              "Business strategy and growth planning",
              "Market research and competitor analysis",
              "Operational efficiency review",
              "Personalized action plans and ongoing support",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="text-pink-400 mt-1" size={24} />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </section>

      {/* Consultation Packages */}
<section className="mb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <h2 className="text-3xl font-bold text-center text-gray-100 mb-12 tracking-wide">
    💼 Consultation Packages
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-10">
    {/* Free Tier */}
    <div className="bg-white rounded-3xl shadow-lg border-t-8 border-green-500 p-8 flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <h3 className="text-3xl text-black font-extrabold mb-3 flex items-center gap-3 ">
        🎁 Free Consult
      </h3>
      <p className="text-2xl font-bold mb-6 text-black">FREE</p>
      <ul className="space-y-3 text-black flex-1 text-lg font-medium">
        <li><CheckCircle className="inline mr-3 text-black" />30-minute video call</li>
        <li><CheckCircle className="inline mr-3 text-black" />Discuss your goals</li>
        <li><CheckCircle className="inline mr-3 text-black" />Technical advice</li>
        <li><CheckCircle className="inline mr-3 text-black" />No obligation</li>
      </ul>
    </div>

    {/* Basic Consultation */}
    <div className="bg-white rounded-3xl shadow-lg border-t-8 border-green-500 p-8 flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <h3 className="text-2xl font-extrabold text-green-600 mb-4">🟢 Basic</h3>
      <p className="text-2xl font-bold text-gray-900 mb-6">£50</p>
      <ul className="flex-grow space-y-3 text-gray-700 text-base font-medium">
        <li className="flex items-center gap-3"><CheckCircle className="text-green-500" size={20} />1 hour consultation</li>
        <li className="flex items-center gap-3"><CheckCircle className="text-green-500" size={20} />Strategy review</li>
        <li className="flex items-center gap-3"><CheckCircle className="text-green-500" size={20} />Business assessment</li>
      </ul>
    </div>

    {/* Advanced Consultation */}
    <div className="bg-white rounded-3xl shadow-lg border-t-8 border-blue-600 p-8 flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <h3 className="text-2xl font-extrabold text-blue-600 mb-4">🔵 Advanced</h3>
      <p className="text-2xl font-bold text-gray-900 mb-6">£200</p>
      <ul className="flex-grow space-y-3 text-gray-700 text-base font-medium">
        <li className="flex items-center gap-3"><CheckCircle className="text-blue-600" size={20} />3 hour consultation</li>
        <li className="flex items-center gap-3"><CheckCircle className="text-blue-600" size={20} />Detailed business strategy</li>
        <li className="flex items-center gap-3"><CheckCircle className="text-blue-600" size={20} />Market analysis</li>
      </ul>
    </div>

    {/* Premium Consultation */}
    <div className="bg-white rounded-3xl shadow-lg border-t-8 border-purple-600 p-8 flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <h3 className="text-2xl font-extrabold text-purple-600 mb-4">🟣 Premium</h3>
      <p className="text-2xl font-bold text-gray-900 mb-6">£450</p>
      <ul className="flex-grow space-y-3 text-gray-700 text-base font-medium">
        <li className="flex items-center gap-3"><CheckCircle className="text-purple-600" size={20} />6 hour consultation</li>
        <li className="flex items-center gap-3"><CheckCircle className="text-purple-600" size={20} />Full business audit</li>
        <li className="flex items-center gap-3"><CheckCircle className="text-purple-600" size={20} />Growth plan & implementation</li>
      </ul>
    </div>

    {/* VIP Consultation */}
    <div className="bg-white rounded-3xl shadow-lg border-t-8 border-yellow-500 p-8 flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <h3 className="text-2xl font-extrabold text-yellow-600 mb-4">⭐ VIP</h3>
      <p className="text-2xl font-bold text-gray-900 mb-6">£600+</p>
      <ul className="flex-grow space-y-3 text-gray-700 text-base font-medium">
        <li className="flex items-center gap-3"><CheckCircle className="text-yellow-500" size={20} />10+ hours consultation</li>
        <li className="flex items-center gap-3"><CheckCircle className="text-yellow-500" size={20} />Ongoing support</li>
        <li className="flex items-center gap-3"><CheckCircle className="text-yellow-500" size={20} />Full strategic planning</li>
        <li className="flex items-center gap-3"><CheckCircle className="text-yellow-500" size={20} />Exclusive insights</li>
      </ul>
    </div>
  </div>
</section>


        {/* Add-Ons */}
        <section className="bg-indigo-900 bg-opacity-75 p-8 rounded-3xl shadow-2xl max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-semibold text-center mb-8 text-pink-400 tracking-wide">
            ✨ Add-Ons
          </h2>
          <ul className="list-disc pl-8 space-y-3 text-indigo-300 text-lg font-medium">
            <li>Ongoing monthly support: +£150/month</li>
            <li>Detailed market research reports: +£250</li>
            <li>Custom workshop sessions: +£350</li>
            <li>Extended implementation assistance: +£300</li>
          </ul>
        </section>

        {/* Contact Form */}
        <section className="max-w-4xl mx-auto px-6 py-12 bg-gradient-to-tr from-pink-700 via-purple-800 to-indigo-900 rounded-3xl shadow-3xl">
          <h2 className="text-3xl font-extrabold text-center text-white mb-8 drop-shadow-lg tracking-wider">
            Ready to get started? Fill out the form below:
          </h2>
          {/* You can replace this with your own consultation contact form component */}
          <ConsultationServicesContactForm />
          <div className="text-center pt-12">
            <Link href="/services" passHref>
              <button
                type="button"
                className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full shadow-xl hover:scale-110 hover:shadow-2xl transition-transform duration-300 font-semibold text-lg"
              >
                ⬅ Back to Services
              </button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
