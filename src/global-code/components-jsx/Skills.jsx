import "../components-css/Skills.css";
import { Lightning } from "@phosphor-icons/react";
import SkillBox from "./SkillBox";
import NodeLogo from "../../assets/node_logo.webp";
import TsImg from "../../assets/typescript-logo.webp";
import NextImg from "../../assets/next-logo.webp";
import ReactImg from "../../assets/react.webp";
import GithubGitImg from "../../assets/github.webp";
import FigmaImg from "../../assets/figma.webp";
import TailwindImg from "../../assets/tailwind-logo.webp";
import MongoDbImg from "../../assets/mongodb.webp"

import { useInView } from "react-intersection-observer";

const Skills = () => {

  const { ref: skillsRef, inView: skillsIsVisible } = useInView();

  return (
    <div ref={skillsRef} id="skills" className={skillsIsVisible ? "anime-skills" : "invisible"}>
      <div className="title">
        <Lightning size="50px" color="#FFF" weight="regular" />
        <h1>- skills</h1>
      </div>

      <div className="container-skills">
        <SkillBox img={ReactImg} alt="logo react" title="React" level="Intermédiaire" />
        <SkillBox img={TailwindImg} alt="logo tailwind" title="Tailwind" level="Pro" />
        <SkillBox img={NextImg} alt="logo next" title="NextJs" level="Intermédiaire" />
        <SkillBox img={TsImg} alt="logo typescript" title="TypeScript" level="Intermédiaire" />
        <SkillBox img={NodeLogo} alt="logo sass" title="NodeJs" level="Intermédiaire" />
        <SkillBox img={MongoDbImg} alt="logo mongodb" title="MongoDB" level="Intermédiaire" />
        <SkillBox img={GithubGitImg} alt="logo github & git" title="Github & Git" level="Intermédiaire" />
        <SkillBox img={FigmaImg} alt="logo figma" title="Figma" level="Intermédiaire" />
      </div>
    </div>
  );
};

export default Skills;
