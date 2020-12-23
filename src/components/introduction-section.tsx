import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Badge from "./badge";
import Tags from "./tags";

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
`;

const CenterPiece = styled.div`
  place-self: center;
`;

const Me = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Name = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
`;

const Role = styled.div`
  font-size: 1.5rem;
`;

const IntroductionSection: React.FC = () => {
  const [tagsVisible, setTagsVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (event: Event) => {
    setTagsVisible(window.scrollY === 0);
  };

  return (
    <Wrapper>
      <CenterPiece>
        <Me>
          <Name>Edward Reeder</Name>
          <Role>Software Engineer</Role>
        </Me>
        <Badge />
      </CenterPiece>
      <Tags hide={!tagsVisible} />
    </Wrapper>
  );
};

export default IntroductionSection;
