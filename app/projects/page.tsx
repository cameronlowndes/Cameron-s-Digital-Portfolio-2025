import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import ClientSlider from "../components/ClientSlider"; // Import the new ClientSlider component

export default function Projects() {
  const projectData = [
    {
      title: "Burton Pride Website",
      description:
        "This project aims to create a responsive, easy-to-manage website for Burton Pride, showcasing news, events, community stories, and volunteer engagement. Built with Next.js and TypeScript, the site ensures long-term stability and accessibility across all devices, with mobile-first design principles in mind.",
      techStack: ["Next.js", "Tailwind CSS", "Node.js"],
      link: "https://www.burtonpride.co.uk/", // This project has a link
      images: [
        "/image/burton-pride-1.png",
        "/image/burton-pride-2.png",
        "/image/burton-pride-3.png",
      ],
    },
    {
      title: "Personal Portfolio",
      description:
        "A sleek, performance-optimized portfolio to showcase my skills, experience, and projects. Built with HTML, CSS, PHP, and JavaScript.",
      techStack: ["HTML", "CSS", "PHP", "JavaScript"],
      images: [
        "/image/portfolio-1.png",
        "/image/portfolio-2.png",
        "/image/portfolio-3.png",
      ],
      // No 'link' here, so no "Learn more" button will appear
    },
    {
      title: "E-commerce Store",
      description:
        "A fully functional e-commerce store with integrated payment systems and a beautiful, user-friendly interface.",
      techStack: ["React", "Stripe", "Node.js"],
      images: [
        "/image/ecommerce-1.png",
        "/image/ecommerce-2.png",
        "/image/ecommerce-3.png",
        "/image/ecommerce-4.png",
        "/image/ecommerce-5.png",
        "/image/ecommerce-6.png",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col pt-16 px-4">
      <Head>
        <title>Projects | Cameron Lowndes</title>
        <meta
          name="description"
          content="Showcasing my personal and professional web development projects."
        />
      </Head>

      <Navbar />

      <main className="max-w-4xl mx-auto w-full py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          My Projects
        </h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Below are some of the web development projects I’ve worked on. Click on
          any project to learn more about the development process, technologies
          used, and view live demos.
        </p>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <p className="text-gray-600 text-sm mb-4">
                Tech Stack: {project.techStack.join(", ")}
              </p>

              {/* Use ClientSlider component */}
              <ClientSlider images={project.images} />

              {/* Conditional rendering of the Link */}
              {project.link && (
                <Link href={project.link}>
                  <span className="text-blue-500 hover:text-blue-700 cursor-pointer">
                    Learn more &rarr;
                  </span>
                </Link>
              )}
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
