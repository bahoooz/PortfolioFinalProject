/* eslint-disable react/prop-types */
import "../components-css/SkillBox.css";

const SkillBox = ({ img, alt, title, level }) => {
  return (
    <div className="container-skillbox">
      <div className="box-skill">
        <img src={img} alt={alt} />
      </div>
      <div className="content-skillbox">
        <span className="level">{level}</span>
        <span className="title-skill">{title}</span>
      </div>
    </div>
  );
};

export default SkillBox;
