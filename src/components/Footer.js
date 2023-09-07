import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';
import "../styles/Footer.css";




export default function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia"> 
            <InstagramIcon />
            <LinkedInIcon />
            <GitHub />
        </div>
        <p> &copy; 2023 shawncustodio.com</p>
    </div>
  )
}
