import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';
import "../styles/Footer.css";

export default function Footer() {

  const githubURL = "https://github.com/ShawnCustodio";
  const linkedinURL = "https://www.linkedin.com/in/shawn-custodio/";
  const iconStyle = {
    textDecoration: 'none', // Remove the underline
  };
  return (
    <div className="footer">
        <div className="socialMedia"> 
        <a href={linkedinURL} target="_blank" rel="noopener noreferrer" style={iconStyle}> <LinkedInIcon /> </a>
          <a href={githubURL} target="_blank" rel="noopener noreferrer" style={iconStyle}><GitHub /> </a>
        </div>
        <p> &copy; 2023 shawncustodio.com</p>
    </div>
  )
}
