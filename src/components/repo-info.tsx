import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ForkSVG from "../svgs/fork";
import StarSVG from "../svgs/star";
import Axios from "axios";

const WrapperLink = styled.a`
  display: flex;

  svg {
    fill: ${(props) => props.theme.colors.primary.light};
    height: 0.9rem;
    width: 0.9rem;
  }
`;

const Stat = styled.div`
  display: flex;

  &:not(:last-of-type) {
    margin-right: 0.5rem;
  }
`;

interface Props {
  username: string;
  repo: string;
}

const RepoInfo: React.FC<Props> = (props) => {
  const [stars, setStars] = useState(0);
  const [forks, setForks] = useState(0);

  useEffect(() => {
    Axios.get(
      `https://api.github.com/repos/${props.username}/${props.repo}`
    ).then(({ data }) => {
      setStars(data.stargazers_count);
      setForks(data.forks_count);
    });
  }, []);

  return (
    <WrapperLink
      href={`https://github.com/${props.username}/${props.repo}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Stat>
        <StarSVG />
        {stars}
      </Stat>
      <Stat>
        <ForkSVG />
        {forks}
      </Stat>
    </WrapperLink>
  );
};

export default RepoInfo;
