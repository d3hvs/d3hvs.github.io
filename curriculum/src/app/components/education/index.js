import React from 'react';
import classNames from 'classnames';

// @data
import { educationInfo } from '../../data';

// @components
import EducationItem from './education-item';

// @styles
import './style.scss';

const Education = () => (
    <div className="education">
        {educationInfo.map((item, index) => (
            <EducationItem
                {...item}
                className={classNames(
                    'education-item',
                    { 'education-item--pair': index%2 === 0 },
                    { 'education-item--odd': index%2 !== 0 }
                )}
                key={index}
            />
        ))}
    </div>
);

export default Education;
