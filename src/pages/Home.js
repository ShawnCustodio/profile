import React from 'react'
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';
import "../styles/Home.css"
export default function Home() {

  return (
    <div className="home">
      <div className="about">
        <h2> Shawn Custodio</h2>
        <div className="prompt">
          <p> I am a computer science student at the University of Texas at Dallas. I have a passion for Data Analytics and Full Stack Development.</p>
          <LinkedInIcon />
          <GitHub />
          <EmailIcon /> 

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
             Sqlite3, MongoDB
             </span>
        </li>
        <li className="item">
          <h2> Languages and Services </h2>
          <span> 
            AWS EC2, Java, JavaScript
            </span>
        </li>
      </ol>
      </div>
    </div>
  )
}
