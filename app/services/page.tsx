//hello
import Link from "next/link";
export default function Services() {
  return (
    <div className="flex flex-col min-h-screen pt-20 px-6 bg-gradient-to-b from-indigo-900 via-purple-900 to-indigo-800">
      <main className="flex-1 max-w-7xl mx-auto w-full pt-16 pb-32">
        <h1 className="text-6xl font-extrabold text-center text-white mb-20 tracking-tight drop-shadow-lg">
          Services I Offer
        </h1>

        <div className="space-y-28">
          <ServiceSection
            title="Web Development"
            description="Modern, responsive websites using Next.js, React, and Node.js. Perfect for everything from simple static sites to full-blown web applications."
            services={[
              {
                title: "Next.js/React Development",
                description:
                  "Build fast and scalable websites using Next.js or React, optimized for performance.",
                price: "£499 - £3000",
                link: "/services/NextRsreactDevelopment",
              },
              {
                title: "Basic HTML/CSS Development",
                description:
                  "For simple and clean static websites, I offer basic HTML and CSS development.",
                price: "£199 - £699",
                link: "/services/HTMLCssDevelopment",
              },
            ]}
          />

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

          <ServiceSection
            title="Special Offer for Small Companies"
            description="If you’re a small business, I offer customized pricing and special discounts. Please get in touch—I'd love to help your business grow."
            services={[
              {
                title: " Special Discount for Charities & Small Businesses",
                description:
                  "Hourly consultation to help you navigate the best path forward.",
                price: "Special Discounted Rate",
                link: "/services/SpecialOfferPage",
              },
            ]}
          />
        </div>
      </main>
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
      <h2 className="text-4xl font-extrabold text-white mb-6 drop-shadow-lg tracking-wide">
        {title}
      </h2>
      <p className="text-lg text-indigo-200 mb-12 max-w-3xl">{description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
    <div className="relative bg-gradient-to-tr from-purple-700 via-indigo-800 to-blue-800 rounded-3xl p-8 shadow-2xl hover:shadow-[0_0_20px_4px_rgba(139,92,246,0.7)] transform hover:-translate-y-1 transition-transform duration-300 text-white border border-indigo-600 cursor-default select-none">
      <h3 className="text-2xl font-bold mb-3 tracking-tight">{title}</h3>
      <p className="text-base mb-5 text-indigo-200 leading-relaxed">{description}</p>
      <p className="text-xl font-semibold mb-6 text-indigo-100">{price}</p>

      {comingSoon ? (
        <button
          disabled
          className="w-full bg-gray-600 text-gray-300 font-semibold py-3 rounded-xl cursor-not-allowed select-none shadow-inner"
          title="Coming Soon"
        >
          Coming Soon
        </button>
      ) : (
        <Link
          href={link}
          className="w-full block text-center bg-gradient-to-r from-purple-400 to-indigo-500 text-black font-bold py-3 rounded-xl shadow-lg hover:from-purple-500 hover:to-indigo-600 transition-colors duration-300"
          aria-label={`Get started with ${title}`}
        >
          Get Started
        </Link>
      )}
    </div>
  );
}
