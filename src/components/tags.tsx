import React from "react";
import styled from "styled-components";

interface Props {
  hide: boolean;
}

const Wrapper = styled.div<Props>`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  justify-content: center;
  transition: 0.7s;
  ${(props) =>
    props.hide &&
    `
      transform: translate(0px, -40px);
      opacity: 0;
    `}
`;

const Tag = styled.div`
  margin: 0 2rem;
  line-height: 2rem;
`;

const Tags: React.FC<Props> = ({ hide }) => {
  return (
    <Wrapper hide={hide}>
      <Tag>
        First Class Graduate{" "}
        <span role="img" aria-label="medal">
          🥇
        </span>
      </Tag>
      <Tag>
        270k user web-app{" "}
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </Tag>
      <Tag>Angular</Tag>
      <Tag>React</Tag>
      <Tag>Node.js</Tag>
      <Tag>ASP.NET</Tag>
    </Wrapper>
  );
};

export default Tags;
