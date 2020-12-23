import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import NeuCard from "./neu-card";
import LinkedInSVG from "../svgs/linked-in";
import GithubSVG from "../svgs/github";
import StackOverflowSVG from "../svgs/stack-overflow";

const Wrapper = styled(NeuCard)`
  width: 16rem;
  height: 18rem;
  display: grid;
  grid-template-rows: 1fr auto;
`;

const Ring = styled(NeuCard)`
  width: 10rem;
  height: 10rem;
  border-radius: 6rem;
  border: solid 0.5rem ${(props) => props.theme.colors.secondary};
  overflow: hidden;
  place-self: center;
`;

const SocialRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 2rem 1rem 2rem;
`;

const SocialLink = styled(NeuCard)`
  width: 2.7rem;
  height: 2.7rem;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    box-shadow: -6px -12px 16px 0px rgba(255, 255, 255, 1),
      6px 12px 16px 0px rgba(0, 0, 0, 0.15);
  }
`;

const Badge: React.FC = () => {
  return (
    <Wrapper size="large">
      <Ring size="small">
        <StaticImage
          src="../images/faceshot.jpg"
          alt="faceshot"
          layout="fluid"
          transformOptions={{}}
          blurredOptions={{}}
        />
      </Ring>
      <SocialRow>
        <SocialLink
          as="a"
          size="small"
          href="https://www.linkedin.com/in/edward-reeder/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInSVG />
        </SocialLink>
        <SocialLink
          as="a"
          size="small"
          href="https://github.com/eddireeder"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubSVG />
        </SocialLink>
        <SocialLink
          as="a"
          size="small"
          href="https://stackoverflow.com/users/9127393/eddie-reeder?tab=profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StackOverflowSVG />
        </SocialLink>
      </SocialRow>
    </Wrapper>
  );
};

export default Badge;
