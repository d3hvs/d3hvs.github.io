import React from 'react';

// @components
import ExperienceItem from './experience-item';

// @data
import { experienceInfo } from '../../data';

// @styles
import './style.scss';

const Experience = () => (
    <div className="experience">
        <div className="experience__content">
            {experienceInfo.map((item, index) => (
                <ExperienceItem
                    company={item.company}
                    dateMax={item.dateMax}
                    dateMin={item.dateMin}
                    key={index}
                    summary={item.summary}
                    title={item.title}
                />
            ))}
        </div>
    </div>
);

export default Experience;
