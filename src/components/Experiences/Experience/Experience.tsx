import React from "react";
import "./Experience.scss";

interface Props {
  role: string;
  company: string;
  from: string;
  to: string;
  bullets: string[];
  image: string;
}

const Experience: React.FC<Props> = (props) => {
  return (
    <div className="Experience neu-card neu-mid">
      <img className="logo" src={props.image} alt="company logo"></img>
      <div className="information">
        <div>
          <div className="title">
            {props.role} @ <span className="company">{props.company}</span>
          </div>
          <div className="time-range">
            {props.from} - {props.to}
          </div>
        </div>
        <div className="bullets">
          {props.bullets.map((bullet, i) => (
            <div className="bullet" key={i}>
              <div className="point"></div>
              <div className="content">{bullet}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;