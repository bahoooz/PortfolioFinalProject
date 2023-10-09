import React from "react";
import "../components-css/Header.css";
import { CaretUp } from "@phosphor-icons/react";
import UtfLogo from "../../assets/utf-logo.webp";
import UtfProject from "../../assets/utf-project.webp";

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
            <img src="https://cdn.glitch.global/a0669e88-fbe6-4a16-b869-bd97391d72e4/ecobotlogo.webp?v=1695170630666" alt="logo Ecobot" />
          </div>
          <img
            className="img-project"
            src="https://cdn.glitch.global/a0669e88-fbe6-4a16-b869-bd97391d72e4/ecobot-project.webp?v=1695170632409"
            alt="Image projet Ecobot"
          />
        </div>
        <div className="img-box">
          <div className="hover-img">
            <img src="https://cdn.glitch.global/a0669e88-fbe6-4a16-b869-bd97391d72e4/obsidian-logo.webp?v=1695170637550" alt="logo Obsidian" />
          </div>
          <img
            className="img-project"
            src="https://cdn.glitch.global/a0669e88-fbe6-4a16-b869-bd97391d72e4/obsidian-project.webp?v=1695170640925"
            alt="Image projet Obsidian"
          />
        </div>
      </div>
      <a href="#header"><CaretUp color="#fcfcfc" weight="bold" /></a>
      <div className="blur"></div>
    </div>
  );
};

export default Header;
