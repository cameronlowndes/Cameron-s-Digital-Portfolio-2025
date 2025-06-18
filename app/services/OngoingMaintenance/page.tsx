import Head from "next/head";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import PostLaunchSupportMaintenanceRequestContactForm from '../../components/ContactForms/PostLaunchSupportMaintenanceRequestContactForm'

export default function OngoingMaintenance() {
  const services = [
    {
      title: "🐞 Bug Fixes",
      subtitle: "Essential for maintaining a glitch-free experience.",
      color: "red",
      price: "£75 per fix / £150 per month",
      features: [
        "Fix broken links and error pages",
        "Resolve JavaScript errors and performance issues",
        "Resolve browser compatibility issues",
        "Implement client feedback for continuous improvement"
      ]
    },
    {
      title: "⚡ Performance Tuning",
      subtitle: "Speed matters. Let’s make it fast and snappy.",
      color: "blue",
      price: "£200 one-time / £300 per month",
      features: [
        "Optimize loading times for faster performance",
        "Image optimization and lazy loading",
        "Minify CSS and JavaScript for efficiency",
        "Cache management and CDN setup"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col pt-16 bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-800 text-white px-6">
      <Head>
        <title>Post-Launch Support & Ongoing Maintenance | Cameron Lowndes</title>
        <meta
          name="description"
          content="Ensure your website or application runs smoothly with post-launch support, bug fixes, performance tuning, and regular updates."
        />
      </Head>

      <main className="flex-grow max-w-7xl mx-auto w-full py-20">
        {/* Hero */}
        <section className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text drop-shadow-md">
            Post-Launch Support & Ongoing Maintenance
          </h1>
          <p className="text-xl sm:text-2xl text-indigo-100 max-w-2xl mx-auto">
            Keep your website or application running smoothly with reliable support, updates, and optimization.
          </p>
        </section>

        {/* Terms CTA */}
        <div className="flex justify-center mb-20">
          <Link href="/terms/MaintenanceTerms">
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform text-lg font-semibold">
              📄 View Maintenance Terms & Conditions
            </button>
          </Link>
        </div>

        {/* Services */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-14 text-white">🔧 Our Core Services</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {services.map(({ title, subtitle, color, price, features }) => (
              <div
                key={title}
                className={`bg-white/10 backdrop-blur-md text-white rounded-3xl shadow-xl p-8 border-t-8 border-${color}-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-shadow`}
              >
                <h3 className={`text-2xl font-bold text-${color}-300 mb-2`}>{title}</h3>
                <p className="text-indigo-100 mb-4">{subtitle}</p>
                <p className={`text-md font-bold text-${color}-300 mb-5`}>
                  💰 <span className="text-xl">{price}</span>
                </p>
                <ul className="space-y-3 text-indigo-100">
                  {features.map((feature, idx) => (
                    <li key={idx}>
                      <CheckCircle className={`inline mr-2 text-${color}-300`} /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Updates */}
        <section className="mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-white">🔄 Regular Updates</h2>
          <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 border-t-8 border-purple-400 hover:shadow-[0_10px_25px_rgba(0,0,0,0.4)] transition-shadow text-white">
            <h3 className="text-2xl font-bold text-purple-300 mb-3">🛠️ Site & App Updates</h3>
            <p className="text-lg mb-4 text-indigo-100">
              Stay updated with the latest features and security patches.
            </p>
            <p className="text-md font-bold text-purple-300 mb-5">
              💰 <span className="text-xl">£100/month</span> or <span className="text-xl">£1000/year</span>
            </p>
            <ul className="space-y-3 text-indigo-100">
              <li><CheckCircle className="inline mr-2 text-purple-300" /> Content updates and enhancements</li>
              <li><CheckCircle className="inline mr-2 text-purple-300" /> Plugin and library upgrades</li>
              <li><CheckCircle className="inline mr-2 text-purple-300" /> Security patch maintenance</li>
              <li><CheckCircle className="inline mr-2 text-purple-300" /> Industry best practices compliance</li>
            </ul>
          </div>
        </section>

        {/* Support */}
        <section className="mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-white">💼 Ongoing Support</h2>
          <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 border-t-8 border-green-400 hover:shadow-[0_10px_25px_rgba(0,0,0,0.4)] transition-shadow text-white">
            <h3 className="text-2xl font-bold text-green-300 mb-3">📞 Continuous Assistance</h3>
            <p className="text-lg mb-4 text-indigo-100">
              We're here when you need us — and even before.
            </p>
            <p className="text-md font-bold text-green-300 mb-5">
              💰 <span className="text-xl">£170/month</span> for priority support and monitoring
            </p>
            <ul className="space-y-3 text-indigo-100">
              <li><CheckCircle className="inline mr-2 text-green-300" /> Direct support access</li>
              <li><CheckCircle className="inline mr-2 text-green-300" /> Priority issue response</li>
              <li><CheckCircle className="inline mr-2 text-green-300" /> Proactive platform monitoring</li>
              <li><CheckCircle className="inline mr-2 text-green-300" /> Scaling and improvement guidance</li>
            </ul>
          </div>
        </section>

        {/* Contact Form */}
        <section className="mb-10">
           < PostLaunchSupportMaintenanceRequestContactForm />
        </section>

        {/* Back Button */}
        <div className="text-center">
          <Link href="/services">
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform text-lg font-semibold">
              ⬅ Back to Services
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
