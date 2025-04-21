import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col pt-16 px-4">
      <Head>
        <title>Contact | Cameron Lowndes</title>
        <meta
          name="description"
          content="Get in touch with Cameron Lowndes for freelance development work, collaborations, or consulting opportunities."
        />
        <meta property="og:title" content="Contact - Cameron Lowndes" />
        <meta
          property="og:description"
          content="Get in touch with Cameron Lowndes for freelance development work, collaborations, or consulting opportunities."
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Navbar />

      <main className="max-w-4xl mx-auto w-full py-16 flex-grow">
        <h1 className="text-4xl font-semibold text-center text-gray-900 mb-8">
          Let's Work Together
        </h1>
        <p className="text-center text-lg text-gray-700 mb-12">
          Fill out the form below and I’ll get back to you as soon as I can.
        </p>

        <div className="relative overflow-hidden rounded-2xl shadow-lg border border-gray-200">
          <iframe
            src="https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_ID/viewform?embedded=true"
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="w-full h-[800px]"
          >
            Loading…
          </iframe>
        </div>
      </main>

      <Footer />
    </div>
  );
}
