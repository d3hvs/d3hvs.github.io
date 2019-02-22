import React from 'react';

// @components
import Info from '../info';
import ExperienceItem from './experience-item';

// @data
import { experienceInfo } from '../../data';

// @sytles
import './style.scss';

const Experience = () => (
    <Info title="experience">
        <div className="experience">
            {experienceInfo.map((data, index) => (
                <ExperienceItem {...data} key={`experience-item-${index}`} />
            ))}
        </div>
    </Info>
);

export default Experience;
