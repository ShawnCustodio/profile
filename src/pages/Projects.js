import React from 'react'
import ProjectItem from '../components/Projectitem';
import { ProjectList } from '../helpers/ProjectList';

import '../styles/Projects.css';

export default function Projects() {
  return (
    <div className="projects">
      <h1> My Personal Projects</h1>
      <div className="projectList">
       {ProjectList.map((project, idx) => {
       return <ProjectItem id={idx} name={project.name} image={project.image}/>
       })}

      </div>
    </div>
  )
}
