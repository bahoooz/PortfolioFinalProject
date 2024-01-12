import React from "react";
import {
  Package,
  BookOpen,
  EnvelopeSimpleOpen,
  Lightning,
} from "@phosphor-icons/react";
import "../../global-code/components-css/Navbar.css";
import Logo from "../../assets/logo_bahoz.webp";

const Navbar = () => {
  return (
    <nav>
      <div className="left-nav">
        <img src={Logo} alt="logo bahoz" />
        <a className="url" href="#">
          bahoz-dev.netlify.app
        </a>
      </div>
      <ul className="icons-navbar">
        <a href="#portfolio">
          <li>
            <Package weight="regular" />
          </li>
        </a>
        <a href="#skills">
          <li>
            <Lightning weight="regular" />
          </li>
        </a>
        <a href="#histoire">
          <li>
            <BookOpen weight="regular" />
          </li>
        </a>
        <a href="#footer">
          <li>
            <EnvelopeSimpleOpen weight="regular" />
          </li>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
