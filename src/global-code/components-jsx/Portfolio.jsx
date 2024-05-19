import "../components-css/Portfolio.css";
import { Package } from "@phosphor-icons/react";
import ProjectBox from "./ProjectBox";
import HydraImgProject from "../../assets/project-hydra.webp";
import UtfImgProject from "../../assets/project-utf.webp";
import ElisePortfolioImgProject from "../../assets/project-elise-portfolio.webp";
import EcobotImgProject from "../../assets/project-ecobot.webp";
import OthersImgProject from "../../assets/project-others.webp";
import HtmlImg from "../../assets/html-5.webp";
import CssImg from "../../assets/css-3.webp";
import JsImg from "../../assets/js.webp";
import ReactImg from "../../assets/react.webp";
import TailwindImg from "../../assets/tailwind-logo.webp";
import NodeImg from "../../assets/node_logo.webp";
import MongoImg from "../../assets/mongodb.webp";
import NextImg from "../../assets/next-logo.webp"
import BlogMernImgProject from "../../assets/project-blog-mern.webp";
import GmcImgProject from "../../assets/project-gmc.webp";

import { useInView } from "react-intersection-observer";

const Portfolio = () => {
  const { ref: portfolioRef, inView: portfolioIsVisible } = useInView();

  return (
    <div
      ref={portfolioRef}
      id="portfolio"
      className={portfolioIsVisible ? "anime-portfolio" : "invisible"}
    >
      <div className="title">
        <Package size="50px" color="#FFF" weight="regular" />
        <h1>- portfolio</h1>
      </div>
      <div className="container-portfolio">
        <ProjectBox
          name="Garry's Mod Creators"
          desc={`Structure de services contre rémunération basée sur le jeu Garry's Mod`}
          img={GmcImgProject}
          alt="image projet Garry's Mod Creators"
          link="https://gmod-creators.com"
          techno_1={NextImg}
          techno_2={ReactImg}
          techno_3={TailwindImg}
          alt_techno_1="logo nextjs"
          alt_techno_2="logo react"
          alt_techno_3="logo tailwind"
          mobile_desc={`Structure de services contre rémunération basée sur le jeu Garry's Mod`}
          mobile_technos="Nextjs, React, TailwindCSS, MongoDB"
        />
        <ProjectBox
          name="Blog Développement Web"
          desc={`Blog full-stack sur le développement web avec des posts, possibilité de liker, commenter, se connecter, etc...`}
          img={BlogMernImgProject}
          alt="image projet Hydra"
          link="https://mern-blog-nfas.onrender.com/"
          techno_1={ReactImg}
          techno_2={TailwindImg}
          techno_3={NodeImg}
          techno_4={MongoImg}
          alt_techno_1="logo react"
          alt_techno_2=" logo tailwind"
          alt_techno_3=" logo nodejs"
          alt_techno_4="logo mongodb"
          mobile_desc={`Blog full-stack sur le développement web avec des posts, possibilité de liker, commenter, se connecter, etc...`}
          mobile_technos="React, TailwindCSS, NodeJs, MongoDB"
        />
        <ProjectBox
          name="Hydra Landing Page"
          desc={`Template de site "single page" pour la présentation de produits`}
          img={HydraImgProject}
          alt="image projet Hydra"
          link="https://template-site-1-bahoz.netlify.app/"
          techno_1={HtmlImg}
          techno_2={CssImg}
          techno_3={JsImg}
          techno_4={ReactImg}
          alt_techno_1="logo html"
          alt_techno_2=" logo css"
          alt_techno_3=" logo js"
          alt_techno_4="logo react"
          mobile_desc={`Template de site "single page" pour la présentation de produits`}
          mobile_technos="Html, Css, Js, React"
        />
        <ProjectBox
          name="UTF Landing Page"
          desc="Landing Page pour l'application de recrutement de candidats d'UTF France, réalisé en stage chez l'entreprise"
          img={UtfImgProject}
          alt="image projet UTF"
          link="https://utf-app.netlify.app"
          techno_1={HtmlImg}
          techno_2={CssImg}
          techno_3={JsImg}
          techno_4={ReactImg}
          alt_techno_1="logo html"
          alt_techno_2=" logo css"
          alt_techno_3=" logo js"
          alt_techno_4="logo react"
          mobile_desc="Landing Page pour l'application de recrutement de candidats d'UTF France, réalisé en stage chez l'entreprise"
          mobile_technos="Html, Css, Js, React"
        />
        <ProjectBox
          name="Elise Portfolio"
          desc="Portfolio de la graphiste Elise Huang (un nouveau est en cours de réalisation)"
          img={ElisePortfolioImgProject}
          alt="image projet Elise Portfolio"
          link="https://bahoooz.github.io/elise-portfolio"
          techno_1={HtmlImg}
          techno_2={CssImg}
          techno_3={JsImg}
          alt_techno_1="logo html"
          alt_techno_2=" logo css"
          alt_techno_3=" logo js"
          mobile_desc="Portfolio de la graphiste Elise Huang (un nouveau est en cours de réalisation)"
          mobile_technos="Html, Css, Js"
        />
        <ProjectBox
          name="Ecobot"
          desc="Projet en formation d'un service fictif d'IA sur la génération de médias sur l'écologie"
          img={EcobotImgProject}
          alt="image projet Ecobot"
          link="https://eco-bot-web.glitch.me"
          techno_1={HtmlImg}
          techno_2={CssImg}
          techno_3={JsImg}
          techno_4={ReactImg}
          alt_techno_1="logo html"
          alt_techno_2=" logo css"
          alt_techno_3=" logo js"
          alt_techno_4="logo react"
          mobile_desc="Projet en formation d'un service fictif d'IA sur la génération de médias sur l'écologie"
          mobile_technos="Html, Css, Js, React"
        />
        <ProjectBox
          name="Projet Autres"
          desc="5 petits projets JS et React réunis (calculatrice, jeu de serpent etc...)"
          img={OthersImgProject}
          alt="image projet Autres"
          link="https://bahoooz.github.io/other-projects/"
          techno_1={HtmlImg}
          techno_2={CssImg}
          techno_3={JsImg}
          techno_4={ReactImg}
          alt_techno_1="logo html"
          alt_techno_2=" logo css"
          alt_techno_3=" logo js"
          alt_techno_4="logo react"
          mobile_desc="5 petits projets JS et React réunis (calculatrice, jeu de serpent etc...)"
          mobile_technos="Html, Css, Js, React"
        />
      </div>
    </div>
  );
};

export default Portfolio;
