import React from "react";
import { Helmet } from "react-helmet";
import AboutSection from "../components/about-section";
import Layout from "../components/layout";
import IntroductionSection from "../components/introduction-section";
import ExperiencesSection from "../components/experiences-section";
import ProjectsSection from "../components/projects-section";
import NavBar from "../components/nav-bar";

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>Edward Reeder | Software Engineer</title>
        <meta
          name="description"
          content="Software engineer with experience building high quality websites and applications."
        />
      </Helmet>
      <NavBar />
      <IntroductionSection />
      <AboutSection />
      <ExperiencesSection />
      <ProjectsSection />
    </Layout>
  );
};

export default IndexPage;
