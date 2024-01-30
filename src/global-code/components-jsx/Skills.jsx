import "../components-css/Skills.css";
import { Lightning } from "@phosphor-icons/react";
import SkillBox from "./SkillBox";
import HtmlImg from "../../assets/html-5.webp";
import SassImg from "../../assets/sass-logo.webp";
import JsImg from "../../assets/js.webp";
import ReactImg from "../../assets/react.webp";
import GithubImg from "../../assets/github.webp";
import GitImg from "../../assets/git.webp";
import FigmaImg from "../../assets/figma.webp";
import TailwindImg from "../../assets/tailwind-logo.webp";

const Skills = () => {
  return (
    <div id="skills">
      <div className="title">
        <Lightning size="50px" color="#FFF" weight="regular" />
        <h1>- skills</h1>
      </div>

      <div className="container-skills">
        <SkillBox img={HtmlImg} alt="logo html" title="HTML" />
        <SkillBox img={SassImg} alt="logo sass" title="SASS" />
        <SkillBox img={JsImg} alt="logo javascript" title="JavaScript" />
        <SkillBox img={ReactImg} alt="logo react" title="React" />
        <SkillBox img={GithubImg} alt="logo github" title="Github" />
        <SkillBox img={GitImg} alt="logo git" title="Git" />
        <SkillBox img={TailwindImg} alt="logo tailwind" title="Tailwind" />
        <SkillBox img={FigmaImg} alt="logo figma" title="Figma" />
      </div>
    </div>
  );
};

export default Skills;
