import React from "react";
import "../components-css/ProjectBox.css";

const ProjectBox = ({
  name,
  desc,
  img,
  alt,
  link,
  techno_1,
  techno_2,
  techno_3,
  techno_4,
  alt_techno_1,
  alt_techno_2,
  alt_techno_3,
  alt_techno_4,
  mobile_desc,
  mobile_technos,
}) => {
  return (
    <div className="container-project-box">
      <div className="container-img-box-project">
        <a href={link}>
          <img className="img-box-project" src={img} alt={alt} />
          <div className="hover-img-box-project">
            <span className="desc-img-box-project">{desc}</span>
            <ul className="technos-img-box-project">
              <img src={techno_1} alt={alt_techno_1} />
              <img src={techno_2} alt={alt_techno_2} />
              <img src={techno_3} alt={alt_techno_3} />
              <img src={techno_4} alt={alt_techno_4} />
            </ul>
          </div>
        </a>
      </div>

      <div className="content-box-project">
        <h3 className="title-box-project">{name}</h3>
        <p className="mobile-desc-box-project">{mobile_desc}</p>
        <span className="mobile-technos-box-project">{mobile_technos}</span>
      </div>
    </div>
  );
};

export default ProjectBox;
