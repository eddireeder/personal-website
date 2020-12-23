import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  width: calc(100% - 4rem);
  padding-top: 2rem;
  display: flex;
  justify-content: flex-end;
`;

const NavLink = styled(Link)`
  padding: 1rem;
  position: relative;
  z-index: 1;
  text-decoration: none;

  @media (hover: hover) and (pointer: fine) {
    &:before {
      content: "";
      position: absolute;
      background-color: ${(props) => props.theme.colors.secondary};
      height: 0.5rem;
      top: 1.25rem;
      left: 0.5rem;
      width: 0;
      z-index: -1;
      transition: 0.4s;
    }

    &:hover {
      cursor: pointer;

      &:before {
        width: calc(100% - 1rem);
      }
    }
  }
`;

const Highlight = styled.span`
  color: ${(props) => props.theme.colors.primary.light};
`;

const NavBar: React.FC = () => {
  return (
    <Wrapper>
      <NavLink to="/#about">
        <Highlight>1. </Highlight>About
      </NavLink>
      <NavLink to="/#experience">
        <Highlight>2. </Highlight>Experience
      </NavLink>
      <NavLink to="/#projects">
        <Highlight>3. </Highlight>Projects
      </NavLink>
    </Wrapper>
  );
};

export default NavBar;
