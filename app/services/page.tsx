// pages/services.tsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import Link from "next/link";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col pt-16 px-4">
      <Head>
        <title>Services | Cameron Lowndes - Full-Stack Developer</title>
        <meta
          name="description"
          content="Discover the services offered by Cameron Lowndes, a skilled full-stack developer, including web development, cloud solutions, and custom software development."
        />
        <meta property="og:title" content="Services - Cameron Lowndes" />
        <meta
          property="og:description"
          content="Discover the services offered by Cameron Lowndes, a skilled full-stack developer, including web development, cloud solutions, and custom software development."
        />
        <meta property="og:image" content="/image/cameron.jpg" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Navbar />

      <main className="max-w-6xl mx-auto w-full py-16">
        <h1 className="text-5xl font-semibold text-center text-gray-900 mb-16">
          Services I Offer
        </h1>

        <div className="space-y-24">
          {/* Web Development */}
          <ServiceSection
            title="Web Development"
            description="Modern, responsive websites using Next.js, React, and Node.js. Perfect for everything from simple static sites to full-blown web applications."
            services={[
              {
                title: "Next.js/React Development",
                description:
                  "Build fast and scalable websites using Next.js or React, optimized for performance.",
                price: "£499 - £3000",
                link: "/services/nextjs-react-development",
              },
              {
                title: "Basic HTML/CSS Development",
                description:
                  "For simple and clean static websites, I offer basic HTML and CSS development.",
                price: "£500 - £1000",
                link: "/services/html-css-development",
              },
            ]}
          />

          {/* Cloud Solutions (Coming Soon) */}
          <ServiceSection
            title="Cloud Solutions"
            description="Cloud-native development with Azure and AWS. I handle migrations, deployments, and infrastructure optimization for performance and cost savings."
            services={[
              {
                title: "Cloud Migration",
                description:
                  "Migrate your applications to the cloud for improved performance and scalability.",
                price: "£2000 - £5000",
                link: "/services/cloud-migration",
                comingSoon: true,
              },
              {
                title: "Cloud Deployment & Management",
                description:
                  "Deployment and management of your cloud infrastructure to ensure smooth operations.",
                price: "£1500 - £3000",
                link: "/services/cloud-deployment-management",
                comingSoon: true,
              },
            ]}
          />

          {/* Custom Software Development */}
          <ServiceSection
            title="Custom Software Development"
            description="Tailored software built to match your business needs—from custom web apps to integrations that improve workflow and efficiency."
            services={[
              {
                title: "Custom Web Application",
                description:
                  "Fully customized web applications to suit your unique business needs.",
                price: "£2500 - £8000",
                link: "/services/custom-web-application",
                comingSoon: true,
              },
              {
                title: "API Integration",
                description:
                  "Seamless API integration to enhance your applications with third-party services.",
                price: "£1000 - £2500",
                link: "/services/api-integration",
                comingSoon: true,
              },
            ]}
          />

          {/* Maintenance */}
          <ServiceSection
            title="Maintenance & Support"
            description="Post-launch support to keep your site running smoothly—bug fixes, performance tuning, and updates included."
            services={[
              {
                title: "Ongoing Maintenance",
                description:
                  "Ongoing support and optimization to keep your application running smoothly.",
                price: "£500 - £1500 / month",
                link: "/services/OngoingMaintenance",
              },
            ]}
          />

          {/* Consulting */}
          <ServiceSection
            title="Consulting"
            description="Not sure where to start? I offer technical consulting to help plan your project architecture, stack, and roadmap."
            services={[
              {
                title: "Consultation Hourly Rate",
                description:
                  "Hourly consultation to help you navigate the best path forward.",
                price: "£50 - £600+ / hour",
                link: "/services/consultation",
              },
            ]}
          /> 

          {/* Special Offer for Small Companies */}
          <ServiceSection
            title="Special Offer for Small Companies"
            description="If you’re a small business, I offer customized pricing and special discounts. Please get in touch—I'd love to help your business grow."
            services={[
              {
                title: "Consultation Hourly Rate",
                description:
                  "Hourly consultation to help you navigate the best path forward.",
                price: "Special Discounted Rate",
                link: "/services/SpecialOfferPage",
              },
            ]}
          />
          
        </div>
      </main>

      <Footer />
    </div>
  );
}

function ServiceSection({
  title,
  description,
  services,
}: {
  title: string;
  description: string;
  services: {
    title: string;
    description: string;
    price: string;
    link: string;
    comingSoon?: boolean;
  }[];
}) {
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
      <p className="text-lg text-gray-700 mb-8">{description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  description,
  price,
  link,
  comingSoon = false,
}: {
  title: string;
  description: string;
  price: string;
  link: string;
  comingSoon?: boolean;
}) {
  return (
    <div className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 text-center border border-gray-100">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-base text-gray-700 mb-4">{description}</p>
      <p className="text-lg font-bold text-gray-800 mb-6">{price}</p>

      {comingSoon ? (
        <button
          disabled
          className="bg-gray-300 text-gray-600 px-4 py-2 rounded-md cursor-not-allowed"
        >
          Coming Soon
        </button>
      ) : (
        <Link href={link}>
          <button className="bg-lavender-400 text-black px-4 py-2 rounded-md hover:bg-lavender-500 transition cursor-pointer">
            Get Started
          </button>
        </Link>
      )}
    </div>
  );
}