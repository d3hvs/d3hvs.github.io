import React from 'react';

// @components
import Info from '../info';

// @data
import {
    aboutMeText
} from '../../data';

// @styles
import './style.scss';

const AboutMe = () => (
    <Info title="About me">
        <div className="about-me">
            <div className="about-me__content">
                {aboutMeText}
            </div>
        </div>
    </Info>
);

export default AboutMe;
