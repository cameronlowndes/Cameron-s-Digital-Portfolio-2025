"use client";

import React from "react";
import Link from "next/link";
import ClientSlider from "../ClientSlider"; // Make sure this path is correct!

type Project = {
  title: string;
  description: string;
  techStack: string[];
  links: { url: string; label: string }[];
  images: string[];
};

const projectData: Project[] = [
  {
    title: "Burton Pride Website",
    description:
      "A responsive, accessible website for Burton Pride built with Next.js and TypeScript. Designed to promote events, community stories, and volunteer engagement.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
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
      "A sleek, performance-optimized portfolio to showcase my skills and projects. Built with HTML, CSS, PHP, and JavaScript.",
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
      "A fully functional e-commerce store with payment integration and a smooth user interface built with React and Stripe.",
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
    description:
      "A demo showcasing routing, nested layouts, and client-side navigation in a clean Next.js news site design.",
    techStack: ["Next.js", "Custom CSS", "JavaScript"],
    links: [
      { url: "https://newswebsite-sand.vercel.app/", label: "Live Demo" },
      {
        url: "https://github.com/cameronlowndes/NewsWebsite_1",
        label: "GitHub",
      },
    ],
    images: [
      "/image/NewsWebsite/NewsWebsite-1.png",
      "/image/NewsWebsite/NewsWebsite-2.png",
      "/image/NewsWebsite/NewsWebsite-3.png",
      "/image/NewsWebsite/NewsWebsite-4.png",
    ],
  },
];

export default function ProjectsContent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 text-white px-6 py-20">
      <div className="text-center mb-20">
        <h1 className="text-5xl font-extrabold drop-shadow-[0_4px_8px_rgba(0,0,0,0.7)] tracking-tight animate-fadeInUp">
          🚀 My Web Development Projects
        </h1>
        <p className="text-xl text-indigo-200 mt-6 max-w-2xl mx-auto animate-fadeInUp delay-200">
          A collection of real-world, client-focused, and personal development work using cutting-edge technologies and creative design.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      <div className="mt-20 text-center">
        <Link href="/services" passHref>
          <button className="bg-gradient-to-r from-purple-600 to-blue-500 px-8 py-4 rounded-full shadow-lg hover:scale-110 hover:shadow-2xl transition-transform font-semibold text-white">
            ⬅ Back to Services
          </button>
        </Link>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.7s ease forwards;
        }
        .animate-fadeInUp.delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
}

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, techStack, links, images } = project;

  return (
    <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out border border-white/20 text-black leading-relaxed">
      <h2 className="text-2xl md:text-3xl font-bold mb-3">{title}</h2>
      <p className="text-base md:text-lg text-gray-800 mb-4">{description}</p>
      <p className="text-sm text-gray-700 mb-4">
        <span className="font-semibold">Tech Stack:</span> {techStack.join(", ")}
      </p>
      {images.length > 0 && (
        <div className="mb-4">
          <ClientSlider images={images} />
        </div>
      )}
      {links.length > 0 && (
        <div className="mt-2 space-y-1">
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline hover:text-black block font-medium"
            >
              {link.label} →
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
