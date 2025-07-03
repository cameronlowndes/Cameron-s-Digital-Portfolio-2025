import Head from "next/head";
import AboutClient from "../components/Content/AboutClient";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Me | Cameron Lowndes - Full-Stack Developer</title>
        <meta
          name="description"
          content="Learn more about Cameron Lowndes, a passionate full-stack developer eager to contribute to innovative projects and expand his skills in the tech industry."
        />
        <meta property="og:title" content="About Me - Cameron Lowndes" />
        <meta
          property="og:description"
          content="Learn more about Cameron Lowndes, a passionate full-stack developer eager to contribute to innovative projects and expand his skills in the tech industry."
        />
        <meta property="og:image" content="/image/cameron.jpg" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <AboutClient />
    </>
  );
}
