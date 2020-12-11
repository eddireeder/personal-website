import React from "react";
import "./App.scss";
import About from "./components/About/About";
import Experiences from "./components/Experiences/Experiences";
import Footer from "./components/Footer/Footer";
import Introduction from "./components/Introduction/Introduction";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <NavBar
        links={[
          { text: "About", to: "about" },
          { text: "Experiences", to: "experiences" },
          { text: "Projects", to: "projects" },
        ]}
      />
      <Introduction />
      <About />
      <Experiences />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
