import React from "react";
import Head from "next/head";
import ProjectsContent from "../components/Content/ProjectsContent";

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects | Cameron Lowndes</title>
        <meta
          name="description"
          content="Showcasing my personal and professional web development projects."
        />
      </Head>
      <ProjectsContent />
    </>
  );
}
