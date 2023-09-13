import React from "react";
import { useParams } from "react-router-dom";
import { MentorshipList } from '../helpers/MentorshipList'
import GitHubIcon from "@material-ui/icons/GitHub";
import '../styles/MentorshipDisplay.css';

function ProjectDisplay() {
  const { id } = useParams();
  const mentee = MentorshipList[id];

  
  return (
    <div className="project">
      <h1> {mentee.name}</h1>
      <img src={mentee.image} />
      <p>
        <b>Information:</b> {mentee.information}
      </p>
      <GitHubIcon />

    </div>
  );
}

export default ProjectDisplay;