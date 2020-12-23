import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import NeuCard from "./neu-card";

interface Props {
  title: string;
  description: string;
  tags: string[];
  imageData: IGatsbyImageData;
}

const Wrapper = styled(NeuCard)`
  height: 20rem;
  display: grid;
  grid-template-columns: 55% 45%;
  margin: 2rem 0;

  @media screen and (max-width: 700px) {
    grid-template-columns: 100%;
  }
`;

const Information = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    padding: 3rem;
  }

  @media screen and (max-width: 350px) {
    padding: 2rem;
  }
`;

const Name = styled.div`
  font-size: 1.4rem;
  font-weight: 800;
`;

const Description = styled.div``;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.primary.light};
  margin-right: 2rem;

  &:last-child {
    margin-right: 0;
  }
`;

const ProjectScreenshotImage = styled(GatsbyImage)`
  width: 100%;
  align-self: end;
  border-radius: 0 0 15px 0;
  overflow: hidden;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const Project: React.FC<Props> = (props) => {
  return (
    <Wrapper size="medium">
      <Information>
        <Name>{props.title}</Name>
        <Description>{props.description}</Description>
        <Tags>
          {props.tags.map((tag, i) => (
            <Tag key={i}>{tag}</Tag>
          ))}
        </Tags>
      </Information>
      <ProjectScreenshotImage
        image={props.imageData}
        alt={`${props.title} screenshot`}
        loading="eager"
      ></ProjectScreenshotImage>
    </Wrapper>
  );
};

export default Project;
