import React from 'react'
import Langaugeitem from '../components/Langaugeitem'
import { LanguageList } from '../helpers/LanguageList'

import '../styles/Projects.css';


export default function Langauges() {
  return (
    <div className="projects">
        <h1> Lanaguages that I know </h1>
        <div className="projectList">
        {LanguageList.map((language, idx) => {
            return <Langaugeitem id={idx} name={language.name} image={language.image}/>
        })}
        </div>
    </div>
  )
}
