import React, { useEffect, useRef } from "react";
import "./Introduction.scss";
import Badge from "./Badge/Badge";

const Introduction: React.FC = () => {
  const tagsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (event: Event) => {
    if (window.scrollY === 0) {
      if (tagsRef.current?.classList.contains("hide")) {
        tagsRef.current.classList.remove("hide");
      }
    } else if (!tagsRef.current?.classList.contains("hide")) {
      tagsRef.current?.classList.add("hide");
    }
  };

  return (
    <div className="Introduction">
      <div className="center-piece">
        <div className="me">
          <div className="name">Edward Reeder</div>
          <div className="role">Software Engineer</div>
        </div>
        <Badge />
      </div>
      <div ref={tagsRef} className="tags">
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
