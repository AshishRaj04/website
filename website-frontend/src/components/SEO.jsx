import { Helmet } from "react-helmet-async";
import portfolioData from "../content";

const SITE_URL = "https://imashish.vercel.app";
const OG_IMAGE = "https://avatars.githubusercontent.com/u/122210726?v=4";

const SEO = ({ title, description }) => {
  const siteTitle = title ? `${title} | ${portfolioData.name}` : portfolioData.name;
  const metaDescription = description || portfolioData.about.intro;

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={portfolioData.socials.twitter} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </Helmet>
  );
};

export default SEO;
