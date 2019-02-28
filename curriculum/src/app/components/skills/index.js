import React from 'react';

// @components
import Info from '../info';
import SkillItem from './skill-item';

// @data
import { professionalSkilss } from '../../data';

// @styles
import './style.scss';

const Skills = () => (
    <Info title="Skills">
        <div className="skills">
            {professionalSkilss.map((skill, index) => (
                <SkillItem {...skill} key={`professional-skill-${index}`} />
            ))}
        </div>
    </Info>
);

export default Skills;
