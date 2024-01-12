import React from "react";
import "../components-css/Footer.css";
import { Envelope, LinkedinLogo } from "@phosphor-icons/react";
import Logo from "../../assets/logo_bahoz.webp"

const Footer = () => {
  return (
    <footer id="footer">
      <img src={Logo} alt="logo Bahoz" className="logo" />
      <ul>
        <li>
          <Envelope className="icon-footer" weight="fill" color="#D1C6FF" />
          <a href="mailto:julienbraultcherif@gmail.com">
            julienbraultcherif@gmail.com
          </a>
        </li>
        <li>
          <LinkedinLogo className="icon-footer" weight="fill" color="#D1C6FF" />
          <a target="_blank" href="https://www.linkedin.com/in/julien-brault-ch%C3%A9rif-aa276226b/">Lien vers Linkedin</a>
        </li>
      </ul>
      <span className="copyright">
      © Copyright 2024 - Julien Brault--Chérif
      </span>
    </footer>
  );
};

export default Footer;
