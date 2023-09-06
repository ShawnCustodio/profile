import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import "../styles/NavBar.css";
import ReorderIcon from '@material-ui/icons/Reorder';
export default function NavBar () {
    const [expandNavBar, setExpandNavBar] = useState(false);
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
        </div>
    </div>
  )
}




