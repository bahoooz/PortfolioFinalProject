import React from "react";
import "../components-css/SkillBox.css";

const SkillBox = ({ img, alt, title }) => {
  return (
    <div className="container-skillbox">
      <div className="box-skill">
        <img src={img} alt={alt} />
      </div>
      <span>{title}</span>
    </div>
  );
};

export default SkillBox;
