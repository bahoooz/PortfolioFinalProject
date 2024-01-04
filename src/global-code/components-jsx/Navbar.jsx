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
            <Package color="#FFF" weight="regular" />
          </li>
        </a>
        <a href="#">
          <li>
            <Lightning color="#FFF" weight="regular" />
          </li>
        </a>
        <a href="#histoire">
          <li>
            <BookOpen color="#FFF" weight="regular" />
          </li>
        </a>
        <a href="#contact">
          <li>
            <EnvelopeSimpleOpen color="#FFF" weight="regular" />
          </li>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
