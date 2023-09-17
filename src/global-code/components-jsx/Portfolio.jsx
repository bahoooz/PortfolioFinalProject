import React from "react";
import "../components-css/Portfolio.css";
import { Package } from "@phosphor-icons/react";
import ProjectBox from "./ProjectBox";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="title">
        <Package size="50px" color="#FFF" weight="regular" />
        <h1>- portfolio</h1>
      </div>
      <div className="container-mobile container-tablet container-desktop">
      <ProjectBox
        project_name="Progressive.Web.App - UTF France"
        project_technos="React / NodeJS / ExpressJS / MongoDB"
        project_desc="Application Web pour le recrutement de candidats et la postulation pour des offres"
        project_img="../../../public/Utf-project.webp"
        project_alt="image de projet UTF France"
        project_link="#"
      />
      <ProjectBox
        project_name="Projet en formation - EcoBot"
        project_technos="HTML / CSS / JavaScript / Figma"
        project_desc="IA fictive sur la génération de médias en rapport avec l’écologie pour améliorer la prévention"
        project_img="../../../public/Ecobot-project.webp"
        project_alt="image de projet Ecobot"
        project_link="https://eco-bot-web.glitch.me/"
      />
      <ProjectBox
        project_name="Marque de montres de luxe fictive - Obsidian"
        project_technos="HTML / CSS / Figma"
        project_desc="Marque de montres de luxe de thème sombre avec une élégance unique"
        project_img="../../../public/Obsidian-project.webp"
        project_alt="image de projet Obsidian"
        project_link=""
      />
    </div>
    </div>
  );
};

export default Portfolio;
