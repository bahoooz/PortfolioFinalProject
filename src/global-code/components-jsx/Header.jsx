/* eslint-disable react/no-unescaped-entities */
import "../components-css/Header.css";
import { CaretDown, Link } from "@phosphor-icons/react";
import HydraImg from "../../assets/header-hydra.webp";
import EliseImg from "../../assets/header-elise.webp";
import UtfImg from "../../assets/header-utf.webp";
import Typewriter from "./TypewritterEffect";

const Header = () => {
  return (
    <div id="header">
      <h1>
        Je m'appelle <br /> Julien Brault--Chérif,
      </h1>
      <h2>
        Développeur Web Front-End, <br /> En apprentissage
        Full-Stack
      </h2>
      <a className="link-header" href="https://discord.gg/sM4ebMACKA" target="_blank" rel="noreferrer">
      <Typewriter text="Rejoindre mon discord : https://discord.gg/sM4ebMACKA" />
      </a>
      <div className="container-projects">
        <div className="img-box">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://template-site-1-bahoz.netlify.app/"
            className="hover-img"
          >
            <Link className="icon-header" />
          </a>
          <img
            className="img-project"
            src={HydraImg}
            alt="Image projet Hydra"
          />
        </div>

        <div className="img-box">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://utf-app.netlify.app/"
            className="hover-img"
          >
            <Link className="icon-header" />
          </a>
          <img className="img-project" src={UtfImg} alt="Image projet Utf" />
        </div>

        <div className="img-box">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://bahoooz.github.io/elise-portfolio/"
            className="hover-img"
          >
            <Link className="icon-header" />
          </a>
          <img
            className="img-project"
            src={EliseImg}
            alt="Image projet Elise"
          />
        </div>
      </div>
      <a href="#portfolio">
        <CaretDown color="#fcfcfc" weight="bold" />
      </a>
    </div>
  );
};

export default Header;
