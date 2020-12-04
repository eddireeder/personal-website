import React from "react";
import "./App.scss";
import Experiences from "./components/Experiences/Experiences";
import Footer from "./components/Footer/Footer";
import Introduction from "./components/Introduction/Introduction";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Introduction />
      <Experiences />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
