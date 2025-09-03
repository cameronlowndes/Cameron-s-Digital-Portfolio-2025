"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function ServicesClient() {
  return (
    <main className="flex-1 max-w-7xl mx-auto w-full pt-16 pb-32 px-4 sm:px-6 lg:px-8">
      <motion.h1
        className="text-6xl font-extrabold text-center text-white mb-20 tracking-tight drop-shadow-lg"
        initial="hidden"
        animate="visible"
        variants={fadeInUpVariants}
        custom={0}
      >
        Services I Offer
      </motion.h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-28"
      >
        <ServiceSection
          title="Web Development"
          description="Modern, responsive websites using Next.js, React, and Node.js. Perfect for everything from simple static sites to full-blown web applications."
          services={[
            {
              title: "Next.js/React Development",
              description:
                "Build fast and scalable websites using Next.js or React, optimized for SEO, accessibility, and performance. Includes SSR, SSG, and client-side interactivity.",
              price: "£499 - £3000",
              link: "/services/NextJSDevelopment",
            },
            {
              title: "Basic HTML/CSS Development",
              description:
                "Clean, semantic, and responsive static websites or landing pages. Ideal for portfolios, small business sites, or marketing pages.",
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
                "Seamlessly migrate your existing applications and data to the cloud. Ensuring minimal downtime and optimal cloud architecture design.",
              price: "£2000 - £5000",
              link: "/services/cloud-migration",
              comingSoon: true,
            },
            {
              title: "Cloud Deployment & Management",
              description:
                "Setup, deploy, and maintain your cloud infrastructure, including continuous integration/deployment pipelines, auto-scaling, and security hardening.",
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
                "Develop bespoke web applications built to your exact specifications, including complex workflows, user management, and integrations.",
              price: "£2500 - £8000",
              link: "/services/custom-web-application",
              comingSoon: true,
            },
            {
              title: "API Integration",
              description:
                "Integrate third-party APIs or build your own custom APIs to extend functionality and automate business processes.",
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
                "Regular updates, bug fixes, security patches, and performance optimizations. Monthly reports and priority support included.",
              price: "£150 - £1500 / month",
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
                "Expert advice on technology choices, architecture design, project planning, and best practices tailored to your business goals.",
              price: "£50 - £600+ / hour",
              link: "/services/consultation",
            },
          ]}
        />

        <ServiceSection
          title="Social Media Starter Package"
          description="Affordable social media management designed specifically for small businesses. Includes posting, engagement tracking, and content creation."
          services={[
            {
              title: "Social Media Starter Package",
              description:
                "Basic social media management for small businesses—posting, engagement tracking, and content creation included.",
              price: "£149 - £499",
              link: "/services/SocialMedia",
            },
          ]}
        />


        <ServiceSection
          title="Special Offer for Small Companies"
          description="If you’re a small business, I offer customized pricing and special discounts. Please get in touch—I'd love to help your business grow."
          services={[
            {
              title: "Discounted Soical Meida",
              description:
                "Affordable social media management services for charities and small businesses — content creation, posting, engagement tracking, and tailored support to grow your audience responsibly.",
              price: "£99 - £299+",
              link: "/services/SoicalMediaForCharity",
            },
            {
              title: "HTML Starter Website Package",
              description:
                "A simple but professional HTML/CSS website, perfect for small businesses wanting a cost-effective online presence.",
              price: "£149 - £399",
              link: "/services/SpecialOfferPageHTML",
            },
            {
              title: "Special Discount for Charities & Small Businesses",
              description:
                "Affordable rates and flexible packages to support charities and small businesses with limited budgets.",
              price: "Custom Pricing",
              link: "/services/SpecialOfferPage",
            },
          ]}
        />

      </motion.div>
    </main>
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
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUpVariants}
      custom={0}
    >
      <motion.h2
        className="text-4xl font-extrabold text-white mb-6 drop-shadow-lg tracking-wide"
        variants={fadeInUpVariants}
        custom={1}
      >
        {title}
      </motion.h2>
      <motion.p
        className="text-lg text-indigo-200 mb-12 max-w-3xl"
        variants={fadeInUpVariants}
        custom={2}
      >
        {description}
      </motion.p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <ServiceCard key={service.title} {...service} custom={i + 3} />
        ))}
      </div>
    </motion.section>
  );
}

function ServiceCard({
  title,
  description,
  price,
  link,
  comingSoon = false,
  custom = 0,
}: {
  title: string;
  description: string;
  price: string;
  link: string;
  comingSoon?: boolean;
  custom?: number;
}) {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0 15px 30px rgba(139, 92, 246, 0.7)",
      transition: { duration: 0.3 },
    },
  };

  const buttonHoverVariants: Variants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      className="relative bg-gradient-to-tr from-purple-700 via-indigo-800 to-blue-800 rounded-3xl p-8 shadow-2xl cursor-pointer text-white border border-indigo-600 select-none"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
      custom={custom}
      whileHover="hover"
    >
      <motion.h3
        className="text-2xl font-bold mb-3 tracking-tight"
        variants={cardVariants}
        custom={custom + 0.1}
      >
        {title}
      </motion.h3>
      <motion.p
        className="text-base mb-5 text-indigo-200 leading-relaxed"
        variants={cardVariants}
        custom={custom + 0.2}
      >
        {description}
      </motion.p>
      <motion.p
        className="text-xl font-semibold mb-6 text-indigo-100"
        variants={cardVariants}
        custom={custom + 0.3}
      >
        {price}
      </motion.p>

      {comingSoon ? (
        <motion.button
          disabled
          className="w-full bg-gray-600 text-gray-300 font-semibold py-3 rounded-xl cursor-not-allowed select-none shadow-inner"
          title="Coming Soon"
          variants={buttonHoverVariants}
          whileHover={{ scale: 1 }}
        >
          Coming Soon
        </motion.button>
      ) : (
        <motion.div variants={buttonHoverVariants} whileHover="hover">
          <Link
            href={link}
            className="w-full block text-center bg-gradient-to-r from-purple-400 to-indigo-500 text-black font-bold py-3 rounded-xl shadow-lg hover:from-purple-500 hover:to-indigo-600 transition-colors duration-300"
            aria-label={`Get started with ${title}`}
          >
            Get Started
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
}
