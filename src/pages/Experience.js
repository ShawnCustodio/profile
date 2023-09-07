import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

export default function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
      <VerticalTimelineElement className="vertical-timeline-element--education"
      date="2019-2021"
      iconStyle={{background: "#3e497a", color: "#fff"}}
      icon={<SchoolIcon/>}
      >
        <h3 className="vertical-timeline-element-title">Collin County Community College </h3>
        <p> Associates Degree in Computer Science</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement className="vertical-timeline-element--education"
      date="2021-2023"
      iconStyle={{background: "#e9d35b", color: "#fff"}}
      icon={<WorkIcon/>}
      >
        <h3 className="vertical-timeline-element-title"> iCode | Senior Technical Lead </h3>
        <p> Teaching students from K-12 computer science, data science, and software engineering</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement className="vertical-timeline-element--education"
      date="January & April 2023"
      iconStyle={{background: "#3e497a", color: "#fff"}}
      icon={<SchoolIcon/>}
      >
        <h3 className="vertical-timeline-element-title"> Coursera Certifications </h3>
        <p> IBM: What is Data Science | Coursera | Issued January 2023 <br/>
            Azure: create a REST API using NodeJS Serverless Functions | Coursera | Issued April 2023
        </p>
      </VerticalTimelineElement>
 
      <VerticalTimelineElement className="vertical-timeline-element--education"
      date="August 2023"
      iconStyle={{background: "#3e497a", color: "#fff"}}
      icon={<SchoolIcon/>}
      >
        <h3 className="vertical-timeline-element-title"> The Forage </h3>
        <p> Software Engineering Virtual Experience | JPMorgan Chase & Co. | Issued August 2023 <br/>
           Power BI Virtual Case Experience | PWC | Issued August 2023
        </p>
      </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}
