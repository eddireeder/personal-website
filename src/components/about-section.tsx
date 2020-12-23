import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import Header from "./header";
import NeuCard from "./neu-card";
import TechnologyList from "./technology-list";

const Wrapper = styled.div``;

const Card = styled(NeuCard)`
  display: grid;
  grid-template-columns: 60% 40%;
  place-items: center;

  @media screen and (max-width: 600px) {
    grid-template-columns: 100% 0%;
  }
`;

const TextWrapper = styled.div`
  font-size: 1rem;
  line-height: 1.4rem;
  padding: 4rem 0rem 4rem 4rem;

  @media screen and (max-width: 700px) {
    padding: 3rem 0rem 3rem 3rem;
  }

  @media screen and (max-width: 600px) {
    padding: 2.5rem;
  }

  @media screen and (max-width: 500px) {
    padding: 2rem;
  }
`;

const Paragraph = styled.p`
  &:first-of-type {
    margin-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Highlight = styled.span`
  color: ${(props) => props.theme.colors.primary.light};
`;

const ImageWrapper = styled.div`
  width: 50%;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const AboutSection: React.FC = () => {
  return (
    <Wrapper id="about">
      <Header>
        1. About <span style={{ fontWeight: 800 }}>Me</span>
      </Header>
      <Card size="medium">
        <TextWrapper>
          <Paragraph>
            Hi! I’m Edward, a software engineer based in London.
          </Paragraph>
          <Paragraph>
            I’m addicted to taking projects from idea, through design, to
            completion. Whether a native mobile app, or a microservice-based web
            application that scales.
          </Paragraph>
          <Paragraph>
            Shortly after graduating from{" "}
            <Highlight>University Of Exeter</Highlight>, I started working @{" "}
            <Highlight>Waters</Highlight>, where I love writing modern,
            maintainable code using the latest frameworks.
          </Paragraph>
        </TextWrapper>
        <ImageWrapper>
          <StaticImage
            src="../images/exeter-logo.png"
            alt="University Of Exeter logo"
            layout="fluid"
            transformOptions={{}}
            blurredOptions={{}}
          />
        </ImageWrapper>
      </Card>
      <TechnologyList />
    </Wrapper>
  );
};

export default AboutSection;
