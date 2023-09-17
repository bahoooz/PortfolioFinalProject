import React from "react";
import "../components-css/Header.css";
import { CaretUp } from "@phosphor-icons/react";

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
            <img src="../../../public/assets/utf-logo.webp" alt="logo UTF France" />
          </div>
          <img
            className="img-project"
            src="../../../public/assets/Utf-project.webp"
            alt="Image projet UTF France"
          />
        </div>
        <div className="img-box">
          <div className="hover-img">
            <img src="../../../public/assets/EcobotLogo.webp" alt="logo Ecobot" />
          </div>
          <img
            className="img-project"
            src="../../../public/assets/Ecobot-project.webp"
            alt="Image projet Ecobot"
          />
        </div>
        <div className="img-box">
          <div className="hover-img">
            <img src="../../../public/assets/Obsidian-Logo.webp" alt="logo Obsidian" />
          </div>
          <img
            className="img-project"
            src="../../../public/assets/Obsidian-project.webp"
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
