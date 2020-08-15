import React from "react";
import "./App.scss";
import Badge from "./components/Badge/Badge";

function App() {
  return (
    <div className="App">
      <div className="center-piece">
        <div className="me">
          <div className="name">Edward Reeder</div>
          <div className="role">Software Engineer</div>
        </div>
        <Badge />
      </div>
      <div className="tags">
        <div className="tag">First Class Graduate 🥇</div>
        <div className="tag">270k user web-app 🚀</div>
        <div className="tag">Angular</div>
        <div className="tag">React</div>
        <div className="tag">NodeJS</div>
        <div className="tag">ASP.NET</div>
      </div>
    </div>
  );
}

export default App;
