import React from "react";
import styled from "styled-components";
import BulletPoint from "./bullet-point";
import NeuCard from "./neu-card";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

interface Props {
  role: string;
  company: string;
  from: string;
  to: string;
  bullets: string[];
  imageData: IGatsbyImageData;
}

const Wrapper = styled(NeuCard)`
  display: grid;
  height: 18rem;
  grid-template-columns: 30% 70%;
  margin: 2rem 0;

  @media screen and (max-width: 700px) {
    grid-template-columns: 100%;
  }
`;

const LogoImage = styled(GatsbyImage)`
  width: 50%;
  place-self: center;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 3rem 3rem 3rem 0;

  @media screen and (max-width: 700px) {
    padding: 2.5rem;
  }

  @media screen and (max-width: 500px) {
    padding: 2rem;
  }
`;

const Title = styled.div`
  font-size: 1.4rem;

  @media screen and (max-width: 500px) {
    font-size: 1.3rem;
  }
`;

const Company = styled.span`
  color: ${(props) => props.theme.colors.primary.light};
`;

const TimeRange = styled.div`
  font-size: 1rem;
  margin-top: 0.5rem;
`;

const Bullet = styled.div`
  font-size: 0.9rem;
  margin: 1rem 0;
  display: flex;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

const ExperienceBulletPoint = styled(BulletPoint)`
  margin-right: 0.8rem;
  position: relative;
  top: 3px;
`;

const Experience: React.FC<Props> = (props) => {
  return (
    <Wrapper size="medium">
      <LogoImage
        image={props.imageData}
        alt={`${props.company} logo`}
      ></LogoImage>
      <Information>
        <div>
          <Title>
            {props.role} @ <Company>{props.company}</Company>
          </Title>
          <TimeRange>
            {props.from} - {props.to}
          </TimeRange>
        </div>
        <div>
          {props.bullets.map((bullet, i) => (
            <Bullet key={i}>
              <ExperienceBulletPoint />
              <div>{bullet}</div>
            </Bullet>
          ))}
        </div>
      </Information>
    </Wrapper>
  );
};

export default Experience;
