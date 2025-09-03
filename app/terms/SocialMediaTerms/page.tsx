import Head from "next/head";
import SocialMediaTermsContent from "../../components/Content/Terms/SocialMediaTermsContent";

export default function SocialMediaTermsPage() {
  return (
    <>
      <Head>
        <title>Social Media Services Terms | Cameron Lowndes</title>
        <meta
          name="description"
          content="Basic terms and conditions for Social Media Management services offered by Cameron Lowndes."
        />
      </Head>
      <SocialMediaTermsContent />
    </>
  );
}
