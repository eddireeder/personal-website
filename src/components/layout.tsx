import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "../theme";
import "../css/typography.css";
import RepoInfo from "./repo-info";

//add smooth scrolling
if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
    easing: "easeInOutQuad",
  });
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${theme.colors.background};
    font-family: "Gilroy", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.primary.dark};

    a {
      color: ${theme.colors.primary.light};
      text-decoration: none;
    }
  }
`;

const Section = styled.main`
  max-width: 65rem;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
`;

const Footer = styled.footer`
  height: 10rem;
  margin-top: 8rem;
  background-color: #cadaee;
`;

const FooterSection = styled(Section)`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BuiltWith = styled.div``;

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Section>{children}</Section>
      <Footer>
        <FooterSection>
          <BuiltWith>
            Built with{" "}
            <a
              href="https://www.gatsbyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gatsby
            </a>{" "}
            in Typescript
          </BuiltWith>
          <RepoInfo username="eddireeder" repo="personal-website" />
        </FooterSection>
      </Footer>
    </ThemeProvider>
  );
};

export default Layout;
