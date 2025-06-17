import Head from "next/head";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function NextJsReactDevelopment() {
  return (
    <div className="min-h-screen flex flex-col pt-16 bg-gradient-to-b from-gray-100 to-white px-4">
      <Head>
        <title>Next.js/React Development | Cameron Lowndes</title>
        <meta
          name="description"
          content="Professional Next.js and React development services tailored for performance, scalability, and modern design."
        />
      </Head>

      <main className="flex-grow max-w-6xl mx-auto w-full py-16">
        {/* Intro */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Next.js / React Development
          </h1>
          <p className="text-xl text-gray-700">
            Build blazing-fast, scalable web apps with cutting-edge tech.
          </p>
        </div>

        {/* Terms Link */}
        <div className="flex justify-center mb-16">
          <Link href="/terms/TermsNextJsReact" passHref>
            <button
              type="button"
              className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform text-center whitespace-pre-line"
            >
              Terms and Conditions{"\n"}for{"\n"}Next.js / React Development
            </button>
          </Link>
        </div>

        {/* Packages */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            💼 Packages & Pricing
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                "Ongoing support",
              ]}
            />
          </div>
        </section>

        {/* Add-ons */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">✨ Add-Ons</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>E-commerce setup (Stripe + product pages): +£400</li>
            <li>Multilingual support: +£250</li>
            <li>Hosting migration: +£100</li>
            <li>Monthly maintenance: £250+/month</li>
            <li>Remove Watermark: +£300</li>
          </ul>
        </section>

        {/* Tech Stack */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🧰 Tech Stack</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li><strong>Frontend:</strong> React, Next.js, Tailwind, TypeScript</li>
            <li><strong>CMS:</strong> Sanity, Strapi, Contentful</li>
            <li><strong>Hosting:</strong> Vercel, Netlify, DigitalOcean</li>
            <li><strong>Auth:</strong> Clerk, Firebase, NextAuth.js</li>
          </ul>
        </section>

        {/* Form */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
            📩 Let’s Work Together
          </h2>
          <div className="w-full aspect-[4/3] max-w-3xl mx-auto">
            <iframe
              src="https://forms.gle/6tUbkKQpebgotUpu6"
              title="Next.js Inquiry Form"
              className="w-full h-[600px] border-0 rounded-xl shadow-lg"
              loading="lazy"
              allowFullScreen
            >
              Loading…
            </iframe>
          </div>
        </section>

        {/* Back to Services */}
        <div className="text-center pb-6 sm:pb-0">
          <Link href="/services">
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform">
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
  const colorClass = {
    green: "text-green-600 border-green-500",
    blue: "text-blue-600 border-blue-600",
    purple: "text-purple-600 border-purple-600",
  }[color];

  return (
    <div className={`bg-white rounded-2xl shadow-xl p-6 border-t-8 ${colorClass} flex flex-col`}>
      <h3 className={`text-2xl font-bold mb-2 ${colorClass}`}>{title}</h3>
      <p className="text-lg font-semibold mb-4">{price}</p>
      <ul className="space-y-2 text-gray-700 flex-1">
        {features.map((feature, i) => (
          <li key={i}>
            <CheckCircle className={`inline mr-2 ${colorClass}`} /> {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
