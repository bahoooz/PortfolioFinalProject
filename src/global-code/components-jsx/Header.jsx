import React from "react";
import "../components-css/Header.css";
import { CaretDown } from "@phosphor-icons/react";

import ElisePortfolioLogo from "../../assets/elise-portfolio-logo.webp";
import ElisePortfolioProject from "../../assets/elise-portfolio-project.webp";
import UtfLogo from "../../assets/utf-logo.webp";
import UtfProject from "../../assets/utf-project.webp";
import EcobotLogo from "../../assets/ecobotlogo.webp";
import EcobotProject from "../../assets/ecobot-project.webp";

const Header = () => {
  return (
    <div id="header">
      <h1>Je m'appelle <br /> Julien Brault--Chérif,</h1>
      <h2>
        Je suis développeur Web Front-End, <br /> et apprenti développeur web
        Full-Stack
      </h2>
      <div className="container-projects">
      <div className="img-box">
          <div className="hover-img">
            <img src={ElisePortfolioLogo} alt="logo Obsidian" />
          </div>
          <img
            className="img-project"
            src={ElisePortfolioProject}
            alt="Image projet Obsidian"
          />
        </div>
        <div className="img-box">
          <div className="hover-img">
            <img src={UtfLogo} alt="logo UTF France" />
          </div>
          <img
            className="img-project"
            src={UtfProject}
            alt="Image projet UTF France"
          />
        </div>
        <div className="img-box">
          <div className="hover-img">
            <img src={EcobotLogo} alt="logo Ecobot" />
          </div>
          <img
            className="img-project"
            src={EcobotProject}
            alt="Image projet Ecobot"
          />
        </div>
      </div>
      <a href="#header"><CaretDown color="#fcfcfc" weight="bold" /></a>
      <div className="blur"></div>
    </div>
  );
};

export default Header;
