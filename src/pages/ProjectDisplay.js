import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import '../styles/ProjectDisplay.css';

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  const iconStyle = {
    textDecoration: 'none', // Remove the underline
  };
  
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skill}
      </p>
      <a href={project.link} target="_blank" rel="noopener noreferrer" style={iconStyle}><GitHubIcon /></a>
    </div>
  );
}

export default ProjectDisplay;