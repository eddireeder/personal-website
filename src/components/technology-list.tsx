import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import BulletPoint from "./bullet-point";

const Wrapper = styled.div`
  margin: 4rem 0rem 0rem 4rem;

  @media screen and (max-width: 700px) {
    margin-left: 3rem;
  }

  @media screen and (max-width: 600px) {
    margin-left: 2.5rem;
  }

  @media screen and (max-width: 500px) {
    margin-left: 2rem;
  }

  @media screen and (max-width: 400px) {
    margin-left: 0rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 15rem auto;
  margin-top: 2rem;

  @media screen and (max-width: 500px) {
    grid-template-columns: 11rem auto;
  }

  @media screen and (max-width: 350px) {
    grid-template-columns: auto;
  }
`;

const Technology = styled.div`
  display: flex;
  align-items: center;
  height: 2rem;

  > *:not(:first-child) {
    margin-left: 1.2rem;
  }
`;

const Name = styled.div`
  height: 1rem;
`;

const TechnologyList: React.FC = () => {
  return (
    <Wrapper>
      <p>Here are a few technologies I’ve been working with recently:</p>
      <Grid>
        <Technology>
          <BulletPoint />
          <StaticImage
            src="../images/typescript-logo.png"
            alt="Typescript logo"
            layout="fluid"
            transformOptions={{}}
            blurredOptions={{}}
            style={{ width: "1.1rem" }}
          />
          <Name>Typescript</Name>
        </Technology>
        <Technology>
          <BulletPoint />
          <StaticImage
            src="../images/nodejs-logo.png"
            alt="NodeJS logo"
            layout="fluid"
            transformOptions={{}}
            blurredOptions={{}}
            style={{ width: "1.1rem" }}
          />
          <Name>NodeJS</Name>
        </Technology>
        <Technology>
          <BulletPoint />
          <StaticImage
            src="../images/react-logo.png"
            alt="React logo"
            layout="fluid"
            transformOptions={{}}
            blurredOptions={{}}
            style={{ width: "1.1rem" }}
          />
          <Name>React</Name>
        </Technology>
        <Technology>
          <BulletPoint />
          <StaticImage
            src="../images/c-sharp-logo.png"
            alt="ASP.NET logo"
            layout="fluid"
            transformOptions={{}}
            blurredOptions={{}}
            style={{ width: "1.1rem" }}
          />
          <Name>ASP.NET</Name>
        </Technology>
        <Technology>
          <BulletPoint />
          <StaticImage
            src="../images/angular-logo.png"
            alt="Angular logo"
            layout="fluid"
            transformOptions={{}}
            blurredOptions={{}}
            style={{ width: "1.1rem" }}
          />
          <Name>Angular</Name>
        </Technology>
        <Technology>
          <BulletPoint />
          <StaticImage
            src="../images/docker-logo.png"
            alt="Docker logo"
            layout="fluid"
            transformOptions={{}}
            blurredOptions={{}}
            style={{ width: "1.1rem" }}
          />
          <Name>Docker</Name>
        </Technology>
      </Grid>
    </Wrapper>
  );
};

export default TechnologyList;
