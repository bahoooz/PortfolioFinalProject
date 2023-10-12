import React from "react";
import { Package, BookOpen, EnvelopeSimpleOpen } from "@phosphor-icons/react";
import "../../global-code/components-css/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <img src="https://cdn.glitch.global/a0669e88-fbe6-4a16-b869-bd97391d72e4/logo-navbar.webp?v=1695170634354" alt="logo bahoz" />
      <a className="url" href="#">
        <span>bahoz-dev.netlify.app</span>
      </a>
      <ul className="icons-navbar">
        <a href="#portfolio">
          <li>
            <Package color="#FFF" weight="regular" />
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
