import React, { Fragment } from 'react';

// @components
import { Timeline, Event } from "react-timeline-scribble";

import Info from '../info';

// @data
import { experienceInfo } from '../../data';

// @sytles
import './style.scss';

const Experience = () => (
    <Info title="experience">
        <div className="experience">
            <Timeline>
                {experienceInfo.map((data, index) => (
                    <Event
                        interval={`${data.dateMin} - ${data.dateMax}`}
                        key={`experience-item-${index}`}
                        title={data.title}
                        subtitle={data.company}
                    >
                        {data.summary}
                    </Event>
                ))}
            </Timeline>
        </div>
    </Info>
);

export default Experience;
