import Head from "next/head";
import Values from "../../components/Content/ValuesContent";

export default function Page() {
  return (
    <>
      <Head>
        <title>Core Values | Cameron Digital Works</title>
        <meta
          name="description"
          content="Explore the core values behind Cameron Digital Works — including inclusion, diversity, respect, integrity, and responsible web development. Learn what drives our mission."
        />
        <meta
          name="keywords"
          content="Cameron Digital Works, core values, inclusion, diversity, respect, transparency, ethical web design, web development values"
        />
        <meta property="og:title" content="Core Values | Cameron Digital Works" />
        <meta
          property="og:description"
          content="Discover the principles that guide Cameron Digital Works — including inclusion, diversity, neurodiversity, respect, and online responsibility."
        />
        <meta property="og:image" content="/image/logo.jpg" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Values />
    </>
  );
}
