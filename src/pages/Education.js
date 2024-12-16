import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import PDFViewer from '../components/PDFViewer'; // Import the PDFViewer component
import '../styles/Experience.css';  // Import your custom CSS file

export default function Education() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="August 2021 - May 2024"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Bachelor's of Science</h3>
          <p> University of Texas at Dallas
            <br/>
            Relevant Courses: Database Systems, Data Structures, Computational Method for Data Science, Machine Learning
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="September 2019 - December 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Associate's of Science</h3>
          <p> Collin County Community College
            <br/>
            Relevant Courses: Computer Programming, Xm86
          </p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date= {
                <p>IBM What is Data Science
                    <br /> Issued January 2023 
                    </p>}
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
             icon={<SchoolIcon />}
        >
         <h3 className="vertical-timeline-element-title">Certification: Coursera</h3>
            <p>
            <iframe
            src={require('../assets/DS IBM.pdf')}
            width="100%"
            height="375px"
            style={{ border: "none" }}
            ></iframe>
         </p>
        </VerticalTimelineElement>


       
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date={
            <p style={{ textAlign: "center", margin: 0 }}> JPMorganChase: Software Engineering Virtual Experience
                <br /> Issued August 2023 
                </p>}
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Certification: Forage</h3>
          <p> 
          </p>
          <iframe
            src={require('../assets/SWE.pdf')}
            width="100%"
            height="375px"
            style={{ border: "none" }}
            ></iframe>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date={
            <p style={{ textAlign: "center", margin: 0 }}>PWC: Power BI Virtual Case Experience
                <br /> Issued August 2023 
                </p>}
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Certification: Forage</h3>
          <p> 
          </p>
          <iframe
            src={require('../assets/PowerBI.pdf')}
            width="100%"
            height="375px"
            style={{ border: "none" }}
            ></iframe>
        </VerticalTimelineElement>


      </VerticalTimeline>
    </div>
  );
}


