import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import '../styles/Experience.css';  // Import your custom CSS file

export default function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="February 2021 - June 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">iCode | Senior Technical Lead</h3>
          <p>•	Instructed over 50 students within K-12 over the applications and theories of Computer Science in the areas of Data Science, HTML, CSS and JS curriculum for the school.
              <br/>•	Led the development of hands-on demonstrations for Vex IQ Robots during promotional events, which attracted 200+ participants and facilitated 50+ inquiries about enrollment in the engineering curriculum.
              <br/>•	Created Excel sheet for Data Analysis and Data Visualization for incoming and current students and what lessons that they have learned.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="January 2024 - May 2024"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">UTD | Undergraduate Student Research</h3>
          <p>•	Developed a high-precision ensemble model combining Computer Vision and Machine Learning, achieving 90% accuracy in predicting real-life tumors from over 1,000 medical images in the Cancer Imaging Archive, provided by Duke University.
            <br />•	Optimized model performance through iterative testing of pooling techniques, leading to a 30% increase in computational efficiency, enhancing the overall research capabilities and reliability of predictive analytics.
          </p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="September 2024 - November 2024"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Freelance | Developer</h3>
          <p>•	Developed and implemented multiple AutoHotkey scripts to enhance the quality of life for players that meet the custom client’s requirements. 
              <br/>•	Conducted thorough testing and debugging of scripts to ensure smooth operation and minimal impact on system performance.

          </p>
        </VerticalTimelineElement>
       
      </VerticalTimeline>
    </div>
  );
}


