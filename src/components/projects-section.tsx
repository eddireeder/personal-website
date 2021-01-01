import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import React from "react";
import Header from "./header";
import Project from "./project";

const Wrapper = styled.div`
  margin-top: 10rem;
`;

const ProjectsSection: React.FC = () => {
  return (
    <Wrapper id="projects">
      <Header>
        3. Things I've <span style={{ fontWeight: 800 }}>Built</span>
      </Header>
      <StaticQuery
        query={graphql`
          query {
            covidScreenshot: file(
              relativePath: { eq: "covid-screenshot.png" }
            ) {
              childImageSharp {
                gatsbyImageData(layout: FLUID)
              }
            }
            kekamoScreenshot: file(
              relativePath: { eq: "kekamo-screenshot.png" }
            ) {
              childImageSharp {
                gatsbyImageData(layout: FLUID)
              }
            }
            theSonosynthesiserScreenshots: file(
              relativePath: { eq: "the-sonosynthesiser-screenshots.png" }
            ) {
              childImageSharp {
                gatsbyImageData(layout: FLUID)
              }
            }
            hqheroScreenshot: file(
              relativePath: { eq: "hqhero-screenshot.png" }
            ) {
              childImageSharp {
                gatsbyImageData(layout: FLUID)
              }
            }
          }
        `}
        render={(data) => (
          <>
            <Project
              title="COVID-19 Analyser"
              description="Developed the frontend for a breakthrough COVID-19 diagnosis machine."
              tags={["Angular", "ASP.NET", "Websockets"]}
              imageData={data.covidScreenshot.childImageSharp.gatsbyImageData}
            />
            <Project
              title="Kekamo"
              description="Created an online store that sells 'spiralised' posters of uploaded images."
              tags={["React", "Redux", "Typescript"]}
              imageData={data.kekamoScreenshot.childImageSharp.gatsbyImageData}
              directLink="https://kekamo.com"
            />
            <Project
              title="The Sonosynthesiser"
              description="Built an app to explore the BBC's SFX archive through movement. Showcased in multiple exhibitions."
              tags={["Android", "Kotlin", "Node.js"]}
              imageData={
                data.theSonosynthesiserScreenshots.childImageSharp
                  .gatsbyImageData
              }
              githubLink="https://github.com/eddireeder/the-sonosynthesiser-android-app"
            />
            <Project
              title="HQHero"
              description="Designed and developed the frontend to a popular quiz helper with +300k page views."
              tags={["Angular", "SCSS"]}
              imageData={data.hqheroScreenshot.childImageSharp.gatsbyImageData}
              githubLink="https://github.com/freshollie/hqhero"
            />
          </>
        )}
      />
    </Wrapper>
  );
};

export default ProjectsSection;
