import Head from "next/head";
import HomeContent from "./components/HomeContent";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cameron Lowndes | Full-Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Explore the work and skills of Cameron Lowndes, a full-stack web developer with a passion for coding and cloud technologies."
        />
        <meta property="og:title" content="Cameron's Digital Portfolio" />
        <meta
          property="og:description"
          content="Explore the work and skills of Cameron Lowndes, a full-stack web developer with a passion for coding and cloud technologies."
        />
        <meta property="og:image" content="/image/cameron.jpg" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <HomeContent />
    </>
  );
}
