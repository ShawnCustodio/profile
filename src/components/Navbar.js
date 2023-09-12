import React, {useEffect, useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
import "../styles/NavBar.css";
import ReorderIcon from '@material-ui/icons/Reorder';
export default function NavBar () {
    const [expandNavBar, setExpandNavBar] = useState(false);
    const location = useLocation();
    
    //Closes NavBar when clicked
    useEffect(() =>{
        setExpandNavBar(false)
    }, [location]);

  return (
    <div className="navbar" id={expandNavBar ? "open" : "close"}>
        <div className="toggleButton">
            <button onClick={() => {setExpandNavBar((prev) => !prev)}}>
                 <ReorderIcon/>
                 </button>
        </div>
        <div className="links">
            <Link to="/"> Home </Link>
            <Link to="/projects"> Projects </Link>
            <Link to="/experience"> Experience</Link>
            <Link to="/mentorship"> Mentorship</Link>
        </div>
    </div>
  )
}




