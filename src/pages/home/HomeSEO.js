import React from "react";
import SEO from "../../components/SEO/SEO";
import { greeting } from "../../portfolio";

const HomeSEO = () => {
  return (
    <SEO
      title={`${greeting.title} ${greeting.title2} | Portfolio`}
      description={greeting.subTitle}
      keywords="portfolio, developer, home, skills, projects"
    />
  );
};

export default HomeSEO;
