import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import '../styles/ProjectDisplay.css';
import WorkIcon from "@material-ui/icons/Work";


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
   

      <ul className = "move">
    <li className = "banner0">
        <div class="icon"><i class="fa-brands fa-codepen"></i></div>
        <div class="title">Description</div>
        <div class="descr">{project.desc}</div>
    </li>
    <li className= "banner3" >
        <div class="icon"><i class="fa-brands fa-js"></i></div>
        <div class="title">Skills</div>
        <div class="descr"> {project.skill}</div>
    </li>
    <li className = "banner4">
    <a href={project.link} target="_blank" rel="noopener noreferrer" style={iconStyle}><GitHubIcon /></a>
        <div class="title">Github</div>
        <div class="descr">Github Link!</div>
    </li>
</ul>





    </div>



  );
}

export default ProjectDisplay;