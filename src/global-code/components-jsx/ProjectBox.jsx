import React from "react";
import "../components-css/ProjectBox.css";
import { HandTap } from "@phosphor-icons/react";

const ProjectBox = ({
  project_name,
  project_technos,
  project_desc,
  project_img,
  project_alt,
  project_link
}) => {
  return (
    <div className="container-project-box">
      <div className="container-desktop">
        <div className="desktop-box-project">
          <div className="desktop-content-project">
            <h3>{project_name}</h3>
            <a target="_blank" href={project_link}>
              <div className="desktop-box-img">
                <div className="img-hover">
                  <HandTap
                    className="hand-hover"
                    size={60}
                    color="#fcfcfc"
                    weight="regular"
                  />
                </div>
                <img src={project_img} alt={project_alt} />
              </div>
            </a>
            <span>{project_technos}</span>
          </div>
          <span className="desktop-desc-project">{project_desc}</span>
        </div>
      </div>

      <div className="container-tablet">
        <div className="tablet-box-project">
          <a target="_blank" href={project_link}><img src={project_img} alt={project_alt} /></a>
          <div className="tablet-content-project">
            <h3>{project_name}</h3>
            <span>{project_technos}</span>
            <span className="desc">{project_desc}</span>
          </div>
        </div>
      </div>

      <div className="container-mobile">
        <div className="mobile-box-project">
          <a target="_blank" href={project_link}><img src={project_img} alt={project_alt} /></a>
          <h3>{project_name}</h3>
          <span>{project_technos}</span>
          <span className="desc">{project_desc}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
