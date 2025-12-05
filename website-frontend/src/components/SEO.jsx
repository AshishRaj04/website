import { Helmet } from "react-helmet-async";
import portfolioData from "../content";

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
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={portfolioData.socials.twitter} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={metaDescription} />
    </Helmet>
  );
};

export default SEO;
