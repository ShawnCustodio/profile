import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import '../styles/ProjectDisplay.css';
import { LanguageList } from "../helpers/LanguageList";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  const languages = LanguageList[id]; 
  /* I added this Lanaguage List */
  
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skill}
      </p>
      <GitHubIcon />

    </div>
  );
}

export default ProjectDisplay;