import React from "react";
import "./NavBar.scss";
import { Link } from "react-scroll";

export interface NavBarLink {
  text: string;
  to: string;
}

interface Props {
  links: NavBarLink[];
}

const NavBar: React.FC<Props> = (props) => {
  return (
    <div className="NavBar">
      {props.links.map((link, i) => (
        <Link key={i} to={link.to} smooth={true}>
          <span className="number">{i + 1}. </span>
          {link.text}
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
