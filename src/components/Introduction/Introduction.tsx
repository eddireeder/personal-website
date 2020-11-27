import React from "react";
import "./Introduction.scss";
import Badge from "./Badge/Badge";

const Introduction: React.FC = () => {
  return (
    <div className="Introduction">
      <div className="center-piece">
        <div className="me">
          <div className="name">Edward Reeder</div>
          <div className="role">Software Engineer</div>
        </div>
        <Badge />
      </div>
      <div className="tags">
        <div className="tag">
          First Class Graduate{" "}
          <span role="img" aria-label="medal">
            🥇
          </span>
        </div>
        <div className="tag">
          270k user web-app{" "}
          <span role="img" aria-label="rocket">
            🚀
          </span>
        </div>
        <div className="tag">Angular</div>
        <div className="tag">React</div>
        <div className="tag">Node.js</div>
        <div className="tag">ASP.NET</div>
      </div>
    </div>
  );
};

export default Introduction;
