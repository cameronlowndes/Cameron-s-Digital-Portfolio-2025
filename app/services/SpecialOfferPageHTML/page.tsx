import Head from "next/head";
import HtmlStarterPackageContent from "../../components/Content/HtmlOfferContent";

export default function HtmlStarterPackagePage() {
  return (
    <>
      <Head>
        <title>
          HTML Starter Website Package | Cameron Lowndes
        </title>
        <meta
          name="description"
          content="Simple, professional, and affordable HTML/CSS websites. Perfect for small businesses and startups looking for a cost-effective online presence."
        />
      </Head>
      <HtmlStarterPackageContent />
    </>
  );
}
