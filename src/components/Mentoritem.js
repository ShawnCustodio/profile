import React from 'react';
import { useNavigate} from 'react-router-dom';
export default function Mentoritem({name, image, id}) {
    const navigate = useNavigate();
  return (
    <div className="projectItem" onClick={() => {
        navigate("/mentorship/" + id);
    }}>
        <div style={{backgroundImage: `url(${image})`}} className="bgImage"/>
        <h1> {name} </h1>
    </div>
  )
}
