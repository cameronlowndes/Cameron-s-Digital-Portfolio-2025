import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import ClientSlider from "../components/ClientSlider";

export default function Projects() {
  const projectData: {
    title: string;
    description: React.ReactNode;
    techStack: string[];
    links: { url: string; label: string }[];
    images: string[];
  }[] = [
    {
      title: "Burton Pride Website",
      description:
        "This project aims to create a responsive, easy-to-manage website for Burton Pride, showcasing news, events, community stories, and volunteer engagement. Built with Next.js and TypeScript, the site ensures long-term stability and accessibility across all devices, with mobile-first design principles in mind.",
      techStack: ["Next.js", "Tailwind CSS", "Typescript"],
      links: [{ url: "https://www.burtonpride.co.uk/", label: "Live Site" }],
      images: [
        "/image/BurtonPride/burton-pride-1.png",
        "/image/BurtonPride/burton-pride-2.png",
        "/image/BurtonPride/burton-pride-3.png",
      ],
    },
    {
      title: "Personal Portfolio",
      description:
        "A sleek, performance-optimized portfolio to showcase my skills, experience, and projects. Built with HTML, CSS, PHP, and JavaScript.",
      techStack: ["HTML", "CSS", "PHP", "JavaScript"],
      links: [],
      images: [
        "/image/Portfoilio/portfolio-1.png",
        "/image/Portfoilio/portfolio-2.png",
        "/image/Portfoilio/portfolio-3.png",
      ],
    },
    {
      title: "E-commerce Store",
      description:
        "A fully functional e-commerce store with integrated payment systems and a beautiful, user-friendly interface.",
      techStack: ["React", "Stripe", "Node.js"],
      links: [],
      images: [
        "/image/E-commerce/ecommerce-1.png",
        "/image/E-commerce/ecommerce-2.png",
        "/image/E-commerce/ecommerce-3.png",
        "/image/E-commerce/ecommerce-4.png",
        "/image/E-commerce/ecommerce-5.png",
        "/image/E-commerce/ecommerce-6.png",
      ],
    },
    {
      title: "Next.js News Website",
      description: (
        <>
          <p>
            This project was created as a demonstration of my routing capabilities
            within Next.js. It serves as a showcase of how I structure dynamic
            pages, nested layouts, and client-side navigation in a real-world
            setup.
          </p>
          <p className="mt-4">
            Please note that this is a demo project, so not all features are
            fully functional or production-ready. Unlike my main projects, this
            build has undergone limited testing and is intended primarily to
            highlight development concepts rather than deliver a polished user
            experience.
          </p>
        </>
      ),
      techStack: ["Next.js", "My own CSS", "JavaScript"],
      links: [
        { url: "https://newswebsite-sand.vercel.app/", label: "Live Demo" },
        { url: "https://github.com/cameronlowndes/NewsWebsite_1", label: "GitHub" },
      ],
      images: [
        "/image/NewsWebsite/NewsWebsite-1.png",
        "/image/NewsWebsite/NewsWebsite-2.png",
        "/image/NewsWebsite/NewsWebsite-3.png",
        "/image/NewsWebsite/NewsWebsite-4.png",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Projects | Cameron Lowndes</title>
        <meta
          name="description"
          content="Showcasing my personal and professional web development projects."
        />
      </Head>

      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-start px-4 py-16 pb-24 w-full">
        <div className="max-w-4xl w-full">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            My Projects
          </h1>
          <p className="text-lg text-gray-700 mb-10 text-center">
            Below are some of the web development projects I’ve worked on. Click on
            any project to learn more about the development process, technologies
            used, and view live demos.
          </p>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectData.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function ProjectCard({
  title,
  description,
  techStack,
  links,
  images,
}: {
  title: string;
  description: React.ReactNode;
  techStack: string[];
  links: { url: string; label: string }[];
  images: string[];
}) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300 ease-in-out">
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h2>

      <div className="text-gray-700 mb-4">{description}</div>

      <p className="text-gray-600 text-sm mb-4">
        <span className="font-medium text-gray-800">Tech Stack:</span>{" "}
        {techStack.join(", ")}
      </p>

      <ClientSlider images={images} />

      {links.length > 0 && (
        <div className="mt-4 space-y-1">
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="block text-blue-600 hover:text-blue-800 font-medium transition">
                {link.label} &rarr;
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
