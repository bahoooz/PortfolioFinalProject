import React from "react";
import "../components-css/Portfolio.css";
import { Package } from "@phosphor-icons/react";
import ProjectBox from "./ProjectBox";
import HydraImgProject from "../../assets/project-hydra.png";
import HtmlImg from "../../assets/html-5.webp";
import CssImg from "../../assets/css-3.webp";
import JsImg from "../../assets/js.webp";
import ReactImg from "../../assets/react.webp";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="title">
        <Package size="50px" color="#FFF" weight="regular" />
        <h1>- portfolio</h1>
      </div>
      <div className="container-portfolio">
        <ProjectBox
          name="Hydra Landing Page"
          desc={`Template de site "single page" pour la présentation de produits`}
          img={HydraImgProject}
          alt="image projet Hydra"
          link=""
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
          desc="description temporaire"
          img={HydraImgProject}
          alt="image projet Hydra"
          link=""
          techno_1={HtmlImg}
          techno_2={CssImg}
          techno_3={JsImg}
          techno_4={ReactImg}
          alt_techno_1="logo html"
          alt_techno_2=" logo css"
          alt_techno_3=" logo js"
          alt_techno_4="logo react"
          mobile_desc="description temporaire"
          mobile_technos="Html, Css, Js, React"
        />
        <ProjectBox
          name="Elise Portfolio"
          desc="description temporaire"
          img={HydraImgProject}
          alt="image projet Hydra"
          link=""
          techno_1={HtmlImg}
          techno_2={CssImg}
          techno_3={JsImg}
          techno_4={ReactImg}
          alt_techno_1="logo html"
          alt_techno_2=" logo css"
          alt_techno_3=" logo js"
          alt_techno_4="logo react"
          mobile_desc="description temporaire"
          mobile_technos="Html, Css, Js, React"
        />
        <ProjectBox
          name="Ancien Portfolio"
          desc="description temporaire"
          img={HydraImgProject}
          alt="image projet Hydra"
          link=""
          techno_1={HtmlImg}
          techno_2={CssImg}
          techno_3={JsImg}
          techno_4={ReactImg}
          alt_techno_1="logo html"
          alt_techno_2=" logo css"
          alt_techno_3=" logo js"
          alt_techno_4="logo react"
          mobile_desc="description temporaire"
          mobile_technos="Html, Css, Js, React"
        />
        <ProjectBox
          name="Ecobot"
          desc="description temporaire"
          img={HydraImgProject}
          alt="image projet Hydra"
          link=""
          techno_1={HtmlImg}
          techno_2={CssImg}
          techno_3={JsImg}
          techno_4={ReactImg}
          alt_techno_1="logo html"
          alt_techno_2=" logo css"
          alt_techno_3=" logo js"
          alt_techno_4="logo react"
          mobile_desc="description temporaire"
          mobile_technos="Html, Css, Js, React"
        />
        <ProjectBox
          name="Projet Autres"
          desc="description temporaire"
          img={HydraImgProject}
          alt="image projet Hydra"
          link=""
          techno_1={HtmlImg}
          techno_2={CssImg}
          techno_3={JsImg}
          techno_4={ReactImg}
          alt_techno_1="logo html"
          alt_techno_2=" logo css"
          alt_techno_3=" logo js"
          alt_techno_4="logo react"
          mobile_desc="description temporaire"
          mobile_technos="Html, Css, Js, React"
        />
      </div>
      <div className="blur blur-1"></div>
      <div className="blur blur-2"></div>
    </div>
  );
};

export default Portfolio;
