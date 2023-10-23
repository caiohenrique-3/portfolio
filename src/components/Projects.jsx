import { useState } from "react";
import projectsData from "../data/projectsData";
import "../styles/projects.css";

export default function Projects(props) {
  const project = props.project;
  const { language } = props;

  const {
    title,
    description,
    technologies,
    imgAlt,
    showImageLabel,
    hideImageLabel,
    demoLabel,
    sourceCodeLabel,
  } = projectsData.find((p) => p.id === project.id);

  const [showImage, setShowImage] = useState(false);

  const handleClick = () => {
    setShowImage(!showImage);
  };

  return (
    <>
      <div className="project">
        <h3>{title[language]}</h3>
        <p>{description[language]} {technologies[language]}</p>
        <div className="img-container">
          {showImage && (
            <img src={project.img} alt={imgAlt[language]} loading="lazy" />
          )}
        </div>
        <ul>
          <li>
            <button onClick={handleClick}>
              <i
                className={`fa ${showImage ? "fa-eye-slash" : "fa-eye"}`}
                aria-hidden="true"
              >
              </i>
              {showImage ? hideImageLabel[language] : showImageLabel[language]}
            </button>
          </li>
          <li>
            <a href={project.demo}>
              <i className="fa fa-external-link" aria-hidden="true"></i>
              {demoLabel[language]}
            </a>
          </li>
          <li>
            <a href={project.sourceCode}>
              <i className="fa fa-github-alt" aria-hidden="true"></i>
              {sourceCodeLabel[language]}
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
