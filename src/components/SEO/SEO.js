import React from "react";
import { Helmet } from "react-helmet-async";
import { greeting, socialMediaLinks } from "../../portfolio";

const SEO = ({ title, description, image, url, keywords }) => {
  const siteTitle =
    title || `${greeting.title1} ${greeting.full_name} | Portfolio`;
  const siteDescription = description || greeting.subTitle;
  const siteImage =
    image || "https://aryanjsx.github.io/React-Portfolio/logo512.png";
  const siteUrl = url || "https://aryankr.netlify.app/";
  const siteKeywords =
    keywords || "portfolio, developer, react, javascript, web developer";

  // JSON-LD structured data for Person
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: greeting.full_name,
    url: "https://aryankr.netlify.app/",
    sameAs: [
      "https://github.com/aryanjsx",
      "https://www.linkedin.com/in/aryanjsx",
      "https://x.com/aryanjsx",
      "https://aryanjsx.medium.com",
      "https://www.leetcode.com/aryanjsx",
      "https://www.geeksforgeeks.org/user/aryanjsx/",
      "https://www.instagram.com/aryanjsx",
      "https://www.facebook.com/aryanjsx",
      "https://in.pinterest.com/aryanjsx/",
    ],
    jobTitle: "Developer",
    image: siteImage,
    description: siteDescription,
    email: greeting.mail,
  };

  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />
      <meta
        property="og:site_name"
        content={`${greeting.full_name} | Portfolio`}
      />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={siteDescription} />
      <meta property="twitter:image" content={siteImage} />
      <meta name="twitter:creator" content={socialMediaLinks.twitter} />

      {/* Canonical URL */}
      <link rel="canonical" href={siteUrl} />

      {/* JSON-LD structured data */}
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
    </Helmet>
  );
};

export default SEO;
