import React from 'react'
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';
import "../styles/Home.css"
import { Link } from 'react-router-dom';

export default function Home() {
  const githubURL = "https://github.com/ShawnCustodio";
  const linkedinURL = "https://www.linkedin.com/in/shawn-custodio/";

  const iconStyle = {
    textDecoration: 'none', // Remove the underline
  };

  return (
    <div className="home">
      <div className="about">
        <h2> Shawn Custodio</h2>
        <div className="prompt">
          <p> I am a computer science student at the University of Texas at Dallas. I have a passion for Data Analytics and Full Stack Development.</p>
         <a href={linkedinURL} target="_blank" rel="noopener noreferrer" style={iconStyle}> <LinkedInIcon /> </a>
          <a href={githubURL} target="_blank" rel="noopener noreferrer" style={iconStyle}><GitHub /> </a>
          <Link to="/contact">
          <EmailIcon /> 
          </Link>
        </div>

      </div>
      <div className="skills">
      <h1> Skills </h1>
      <ol className="list">
        <li className="item">
          <h2> Front-End</h2>
          <span> 
            ReactJS, HTML, CSS, BootStrap,
            Yarn, MaterialUI, JavaFX
             </span>
        </li>
        <li className="item">
          <h2> Back-End</h2>
          <span>
             Python, MySQL,
             Sqlite3, MongoDB,
             Java
             </span>
        </li>
        <li className="item">
          <h2> Services </h2>
          <span> 
            AWS EC2
            </span>
        </li>
      </ol>
      </div>
    </div>
  )
}
