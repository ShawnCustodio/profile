import React from 'react'
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';
import "../styles/Home.css"
import { Link } from 'react-router-dom';
import Me from '../assets/pictue.jpg';

export default function Home() {
  const githubURL = "https://github.com/ShawnCustodio";
  const linkedinURL = "https://www.linkedin.com/in/shawn-custodio/";

  const iconStyle = {
    textDecoration: 'none', // Remove the underline
  };

  const scrollToSocial = () => {
    const socialSection = document.getElementById('social');
    if (socialSection) {
      const targetScrollPosition = socialSection.offsetTop - 100;
      window.scrollTo({ top: targetScrollPosition, behavior: 'smooth' });
    }
  };

  return (
    
    <div className="home">
      <div id="social"></div>
      <div className="about">
        <h2> Shawn Custodio</h2>
        <div className="prompt">
          <p>| Student | Programmer | Mentor | </p>
          <div id="social"></div>
          <a href={linkedinURL} target="_blank" rel="noopener noreferrer" style={iconStyle}> <LinkedInIcon /> </a>
          <a href={githubURL} target="_blank" rel="noopener noreferrer" style={iconStyle}><GitHub /> </a>
          <Link to="/contact">
          <EmailIcon /> 
          </Link>
        </div>

      </div>
      <div id="aboutMe">
      <img src={Me} height="300px" style={{marginTop: '40px'}}/>
      <ul class="tilesWrap">
	<li>
		<h2>LA</h2>
		<h3>Languages</h3>
		<p>
			React, Java, JavaScript, HTML, CSS, SQL, Python
      <br/>
      <br/>
      You can see examples of my work through here!
		</p>
		<Link to="/projects"><button>Projects</button></Link>
	</li>
	<li>
		<h2>ED</h2>
		<h3>Education</h3>
		<p>
			Undergraduate student at the University of Texas at Dallas!
      <br />
      <br />
      You can see my Education timeline here!
		</p>
		<Link to="/experience"><button>Education</button> </Link>
	</li>
	<li>
		<h2>SL</h2>
		<h3>Services and Libraries</h3>
		<p>
			
      BootStrap, MaterialUI, Yarn, JavaFX, MySQL, MongoDB, AWS EC2
      <br />
      <br />

		</p>
	</li>
	<li>
		<h2>SM</h2>
		<h3>Social Media</h3>
		<p>
			Please Click on the icons to view my socials!
		</p>
    <button onClick={scrollToSocial}> Click Me!</button>
	</li>
</ul>
      </div>



    </div>
  )
}
