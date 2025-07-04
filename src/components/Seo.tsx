// src/components/SEO.jsx
import { Helmet } from "react-helmet";

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
}) => {
  const baseUrl = "https://www.swosticonsultancy.com";
  const canonicalUrl = canonical && canonical.startsWith("http") ? canonical : baseUrl + canonical;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph / Social */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      <meta name="twitter:url" content={canonicalUrl} />
    </Helmet>
  );
};

export default SEO;