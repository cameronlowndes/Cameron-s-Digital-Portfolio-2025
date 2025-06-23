import Head from "next/head";
import HtmlCssDevelopmentClient from "../../components/Content/HtmlCssDevelopmentClient";

export default function HtmlCssDevelopment() {
  return (
    <>
      <Head>
        <title>HTML/CSS Development | Cameron Lowndes</title>
        <meta
          name="description"
          content="Professional HTML and CSS development for clean, responsive, and fast-loading websites. Ideal for static sites and landing pages."
        />
      </Head>

      <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-gray-100 font-sans">
        <HtmlCssDevelopmentClient />
      </div>
    </>
  );
}
