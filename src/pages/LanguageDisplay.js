import React from 'react'
import { LanguageList } from '../helpers/LanguageList';
import '../styles/ProjectDisplay.css';
import GitHubIcon from "@material-ui/icons/GitHub";
import { useParams } from 'react-router-dom';



export default function LanguageDisplay() {

    const { id } = useParams();
    const languages = LanguageList[id];
  return (
    <div className="project">
        <h1> {languages.name}</h1>
        <img src={languages.image} />
        <p>
            <b>Skills:</b> {languages.skill}
        </p>
        <GitHubIcon />
    </div>
    );
}
