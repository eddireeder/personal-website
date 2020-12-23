import React from "react";
import AboutSection from "../components/about-section";
import Layout from "../components/layout";
import IntroductionSection from "../components/introduction-section";
import ExperiencesSection from "../components/experiences-section";
import ProjectsSection from "../components/projects-section";
import NavBar from "../components/nav-bar";

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <NavBar />
      <IntroductionSection />
      <AboutSection />
      <ExperiencesSection />
      <ProjectsSection />
    </Layout>
  );
};

export default IndexPage;
