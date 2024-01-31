import "../components-css/Skills.css";
import { Lightning } from "@phosphor-icons/react";
import SkillBox from "./SkillBox";
import HtmlImg from "../../assets/html-5.webp";
import SassImg from "../../assets/sass-logo.webp";
import CssImg from "../../assets/css-3.webp";
import JsImg from "../../assets/js.webp";
import TsImg from "../../assets/typescript-logo.webp";
import NextImg from "../../assets/next-logo.webp";
import ReactImg from "../../assets/react.webp";
import GithubImg from "../../assets/github.webp";
import GitImg from "../../assets/git.webp";
import FigmaImg from "../../assets/figma.webp";
import TailwindImg from "../../assets/tailwind-logo.webp";
import AIImg from "../../assets/illustrator.webp";

const Skills = () => {
  return (
    <div id="skills">
      <div className="title">
        <Lightning size="50px" color="#FFF" weight="regular" />
        <h1>- skills</h1>
      </div>

      <div className="container-skills">
        <SkillBox img={HtmlImg} alt="logo html" title="HTML" level="Pro" />
        <SkillBox img={CssImg} alt="logo css" title="CSS" level="Pro" />
        <SkillBox img={SassImg} alt="logo sass" title="SASS" level="Intermédiaire" />
        <SkillBox img={ReactImg} alt="logo react" title="React" level="Intermédiaire" />
        <SkillBox img={JsImg} alt="logo javascript" title="JavaScript" level="Intermédiaire" />
        <SkillBox img={TsImg} alt="logo typescript" title="TypeScript" level="Débutant" />
        <SkillBox img={NextImg} alt="logo next" title="Next" level="Débutant" />
        <SkillBox img={TailwindImg} alt="logo tailwind" title="Tailwind" level="Intermédiaire" />
        <SkillBox img={GithubImg} alt="logo github" title="Github" level="Intermédiaire" />
        <SkillBox img={GitImg} alt="logo git" title="Git" level="Intermédiaire" />
        <SkillBox img={FigmaImg} alt="logo figma" title="Figma" level="Intermédiaire" />
        <SkillBox img={AIImg} alt="logo illustrator" title="Illustrator" level="Intermédiaire" />
      </div>
    </div>
  );
};

export default Skills;
