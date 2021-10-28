import { graphql, StaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import Experience from "./experience";
import Header from "./header";

const Wrapper = styled.div`
  margin-top: 10rem;
`;

const ExperiencesSection: React.FC = () => {
  return (
    <Wrapper id="experience">
      <Header>
        2. Places I've <span style={{ fontWeight: 800 }}>Worked</span>
      </Header>
      <StaticQuery
        query={graphql`
          query {
            intuitLogo: file(relativePath: { eq: "intuit-logo.png" }) {
              childImageSharp {
                gatsbyImageData(layout: FLUID)
              }
            }
            watersLogo: file(relativePath: { eq: "waters-logo.png" }) {
              childImageSharp {
                gatsbyImageData(layout: FLUID)
              }
            }
            alelionLogo: file(relativePath: { eq: "alelion-logo.png" }) {
              childImageSharp {
                gatsbyImageData(layout: FLUID)
              }
            }
          }
        `}
        render={(data) => (
          <>
            <Experience
              role="Software Engineer"
              company="Intuit"
              from="Mar 2021"
              to="Present"
              bullets={[
                "Writing maintainable, well-tested code across the full stack using React and Groovy.",
                "Leading our team to build the product’s most requested feature.",
                "Driving retrospective meetings to enhance our team’s velocity and productivity.",
              ]}
              imageData={data.intuitLogo.childImageSharp.gatsbyImageData}
            />
            <Experience
              role="Software Engineer"
              company="Waters"
              from="Dec 2019"
              to="Jan 2021"
              bullets={[
                "Developed modern full stack applications with Angular and ASP.NET.",
                "Maximised test coverage by writing end-to-end tests using Specflow.",
                "Utilised my '10% time' to work on exciting company projects such as the COVID-19 Analyser.",
              ]}
              imageData={data.watersLogo.childImageSharp.gatsbyImageData}
            />
            <Experience
              role="Software Engineer"
              company="Alelion"
              from="Jul 2017"
              to="Aug 2018"
              bullets={[
                "Architected and built the main system dashboard using Angular, NodeJS and PostgreSQL.",
                "Presented weekly sprint demos and implemented feedback from clients and peers.",
                "Achieved an outstanding 91% in my employer's report.",
              ]}
              imageData={data.alelionLogo.childImageSharp.gatsbyImageData}
            />
          </>
        )}
      />
    </Wrapper>
  );
};

export default ExperiencesSection;
