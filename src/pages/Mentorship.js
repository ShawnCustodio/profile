import React from 'react'
import Mentoritem from '../components/Mentoritem';
import { MentorshipList } from '../helpers/MentorshipList';

import '../styles/Mentorship.css';

export default function Projects() {
  return (
    <div className="mentor">
      <h1> My Mentee's </h1>
      <div className="mentorList">
       {MentorshipList.map((mentee, idx) => {
       return <Mentoritem id={idx} name={mentee.name} image={mentee.image}/>
       })}

      </div>
    </div>
  )
}
