import React from "react";
import '../components-css/Footer.css'
import { Package, BookOpen, EnvelopeSimpleOpen } from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer>
      <ul className="icons-footer">
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
      <a className="url" href="#"><span>bahoz-dev.com</span></a>
      <img src="../../../public/logo-navbar.webp" alt="logo bahoz" />
    </footer>
  );
};

export default Footer;
