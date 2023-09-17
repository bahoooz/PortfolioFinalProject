import React from "react";
import { Package, BookOpen, EnvelopeSimpleOpen } from "@phosphor-icons/react";
import "../../global-code/components-css/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <img src="../../../public/logo-navbar.webp" alt="logo bahoz" />
      <a className="url" href="#">
        <span>bahoz-dev.com</span>
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
