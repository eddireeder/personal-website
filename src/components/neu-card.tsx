import styled from "styled-components";

interface Props {
  size: "small" | "medium" | "large";
}

const NeuCard = styled.div<Props>`
  background-color: #eaf0f8;
  box-shadow: -3px -6px 8px 0px rgba(255, 255, 255, 1),
    3px 6px 8px 0px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  ${(props) =>
    props.size === "medium" &&
    `box-shadow: 12px 12px 50px 0px rgba(0, 0, 0, 0.1),
  -12px -12px 50px 0px rgba(248, 252, 255, 0.15);`}
  ${(props) =>
    props.size === "large" &&
    `box-shadow: 25px 25px 100px 0px rgba(0, 0, 0, 0.2),
    -25px -25px 100px 0px rgba(248, 252, 255, 0.3);`}
`;

export default NeuCard;
