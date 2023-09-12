import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function Langaugeitem({name, image, id}) {
    const navigate = useNavigate();
  return (
    <div className="projectItem" onClick={() => {
        navigate("/languages/" + id);
    }}> 
    
    <div style={{backgroundImage: `url(${image})`}} className="bgImage"/>
    <h1> {name} </h1>
    
    </div>
  )
}
