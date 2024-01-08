import React from "react";
import "../components-css/Skills.css";
import { Lightning } from "@phosphor-icons/react";
import SkillBox from "./SkillBox";
import HtmlImg from "../../assets/html-5.webp";
import CssImg from "../../assets/css-3.webp";
import JsImg from "../../assets/js.webp";
import ReactImg from "../../assets/react.webp";
import GithubImg from "../../assets/github.webp";
import GitImg from "../../assets/git.webp";
import FigmaImg from "../../assets/figma.webp";
import IllustratorImg from "../../assets/illustrator.webp";

const Skills = () => {
  return (
    <div id="skills">
      <div className="title">
        <Lightning size="50px" color="#FFF" weight="regular" />
        <h1>- skills</h1>
      </div>

      <div className="container-skills">
        <SkillBox img={HtmlImg} alt="logo html" title="HTML" />
        <SkillBox img={CssImg} alt="logo css" title="CSS" />
        <SkillBox img={JsImg} alt="logo javascript" title="JavaScript" />
        <SkillBox img={ReactImg} alt="logo react" title="React" />
        <SkillBox img={GithubImg} alt="logo github" title="Github" />
        <SkillBox img={GitImg} alt="logo git" title="Git" />
        <SkillBox img={FigmaImg} alt="logo figma" title="Figma" />
        <SkillBox img={IllustratorImg} alt="logo illustrator" title="Illustrator" />
      </div>
    </div>
  );
};

export default Skills;
