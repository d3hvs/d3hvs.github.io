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
                <ExperienceItem {...item} key={index} />
            ))}
        </div>
    </div>
);

export default Experience;
