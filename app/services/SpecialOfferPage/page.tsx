import Head from "next/head";
import DiscountedDevOfferContent from "../../components/DiscountedDevOfferContent"

export default function DiscountedDevOfferPage() {
  return (
    <>
      <Head>
        <title>
          Special Discount for Charities & Small Businesses | Cameron Lowndes
        </title>
        <meta
          name="description"
          content="Affordable, high-quality Next.js and React development services for charities and small businesses. Tailored for impact and accessibility."
        />
      </Head>
      <DiscountedDevOfferContent />
    </>
  );
}
