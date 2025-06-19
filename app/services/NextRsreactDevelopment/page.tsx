import Head from "next/head";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import NextContactForm from '../../components/ContactForms/NextContactForm'

export default function NextJsReactDevelopment() {
  return (
    <div className="min-h-screen flex flex-col pt-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 px-6">
      <Head>
        <title>Next.js/React Development | Cameron Lowndes</title>
        <meta
          name="description"
          content="Professional Next.js and React development services tailored for performance, scalability, and modern design."
        />
      </Head>

      <main className="flex-grow max-w-6xl mx-auto w-full py-20 text-white">
        {/* Intro */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-6xl font-extrabold mb-4 tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
            Next.js / React Development
          </h1>
          <p className="text-2xl font-light text-indigo-200">
            Build blazing-fast, scalable web apps with cutting-edge technology and modern design.
          </p>
        </div>

        {/* Terms Link */}
        <div className="flex justify-center mb-20">
          <Link href="/terms/TermsNextJsReact" passHref>
            <button
              type="button"
              className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 
                text-white px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 whitespace-pre-line font-semibold tracking-wide"
              aria-label="View Terms and Conditions for Next.js React Development"
            >
              Terms and Conditions{"\n"}for{"\n"}Next.js / React Development
            </button>
          </Link>
        </div>

        {/* Packages */}
        <section className="mb-32">
          <h2 className="text-4xl font-extrabold text-center mb-12 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] tracking-wide">
            💼 Packages & Pricing
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <PricingCard
              title="🟢 Starter"
              price="£499"
              color="green"
              features={[
                "1–3 pages (Home, About, Contact)",
                "Responsive design",
                "SEO-friendly setup",
                "Simple contact form",
                "Vercel deployment",
                "5–7 day turnaround",
              ]}
            />
            <PricingCard
              title="🔵 Professional"
              price="£999"
              color="blue"
              features={[
                "Up to 6 pages",
                "CMS integration",
                "Custom UI components",
                "Performance tuning",
                "Google Analytics setup",
                "Admin dashboard (optional)",
              ]}
            />
            <PricingCard
              title="🟣 Premium"
              price="£1999+"
              color="purple"
              features={[
                "Unlimited pages & components",
                "API integrations",
                "Authentication & roles",
                "Advanced dashboard",
                "Full CMS setup",
                "Ongoing support £150+",
              ]}
            />
          </div>
        </section>

        {/* Add-ons */}
        <section className="mb-28 max-w-3xl mx-auto bg-indigo-900 bg-opacity-70 rounded-3xl p-10 shadow-2xl">
          <h2 className="text-3xl font-extrabold mb-6 text-indigo-100 tracking-wide">✨ Add-Ons</h2>
          <ul className="list-disc pl-8 text-indigo-200 space-y-3 text-lg font-medium">
            <li>E-commerce setup (Stripe + product pages): <span className="font-bold">+£400</span></li>
            <li>Multilingual support: <span className="font-bold">+£250</span></li>
            <li>Hosting migration: <span className="font-bold">+£100</span></li>
            <li>Monthly maintenance: <span className="font-bold">£250+/month</span></li>
            <li>Remove Watermark: <span className="font-bold">+£300</span></li>
          </ul>
        </section>

        {/* Tech Stack */}
        <section className="mb-28 max-w-3xl mx-auto bg-indigo-900 bg-opacity-70 rounded-3xl p-10 shadow-2xl">
          <h2 className="text-3xl font-extrabold mb-6 text-indigo-100 tracking-wide">🧰 Tech Stack</h2>
          <ul className="list-disc pl-8 text-indigo-200 space-y-2 text-lg font-medium">
            <li><strong>Frontend:</strong> React, Next.js, Tailwind CSS, TypeScript</li>
            <li><strong>CMS:</strong> Sanity, Strapi, Contentful</li>
            <li><strong>Hosting:</strong> Vercel, Netlify, DigitalOcean</li>
            <li><strong>Auth:</strong> Clerk, Firebase, NextAuth.js</li>
          </ul>
        </section>

        {/* Form */}
        <section className="mb-32 max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-8 text-indigo-100 tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
            📩 Let’s Work Together
          </h2>
          <NextContactForm />
        </section>

        {/* Back to Services */}
        <div className="text-center pb-10">
          <Link href="/services" passHref>
            <button
              className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700
                text-white px-8 py-4 rounded-full shadow-lg hover:shadow-[0_4px_20px_rgba(139,92,246,0.8)] transition transform hover:-translate-y-1 duration-300 font-semibold"
              aria-label="Back to Services"
            >
              ⬅ Back to Services
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}

type PricingCardProps = {
  title: string;
  price: string;
  color: "green" | "blue" | "purple";
  features: string[];
};

function PricingCard({ title, price, color, features }: PricingCardProps) {
  const colors = {
    green: {
      text: "text-green-400",
      border: "border-green-400",
      bg: "bg-gradient-to-tr from-green-900 via-green-800 to-green-700",
      icon: "text-green-400",
    },
    blue: {
      text: "text-blue-400",
      border: "border-blue-400",
      bg: "bg-gradient-to-tr from-blue-900 via-blue-800 to-blue-700",
      icon: "text-blue-400",
    },
    purple: {
      text: "text-purple-400",
      border: "border-purple-400",
      bg: "bg-gradient-to-tr from-purple-900 via-purple-800 to-purple-700",
      icon: "text-purple-400",
    },
  };

  const colorClasses = colors[color];

  return (
    <div
      className={`${colorClasses.bg} rounded-3xl p-8 shadow-2xl border-4 border-opacity-70 border-white flex flex-col text-white
      hover:shadow-[0_0_30px_5px_rgba(255,255,255,0.3)] transition-shadow duration-400`}
    >
      <h3 className={`text-3xl font-extrabold mb-3 tracking-tight ${colorClasses.text} drop-shadow-lg`}>
        {title}
      </h3>
      <p className="text-2xl font-bold mb-6">{price}</p>
      <ul className="flex-1 space-y-4 text-lg font-semibold drop-shadow-sm">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3">
            <CheckCircle className={`${colorClasses.icon} w-6 h-6 flex-shrink-0 drop-shadow-md`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button
        disabled
        className="mt-8 bg-white bg-opacity-20 text-white font-semibold py-3 rounded-xl cursor-default select-none opacity-70"
        aria-label={`${title} package purchase coming soon`}
      >
        Coming Soon
      </button>
    </div>
  );
}
