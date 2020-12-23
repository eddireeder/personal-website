import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "../theme";
import "../css/typography.css";

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
  }
`;

const Section = styled.main`
  max-width: 65rem;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
`;

const Footer = styled.footer`
  height: 5rem;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Section>{children}</Section>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
