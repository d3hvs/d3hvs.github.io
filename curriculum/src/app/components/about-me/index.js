import React from 'react';

// @data
import {
    aboutMeText
} from '../../data';

// @styles
import './style.scss';

const AboutMe = () => (
    <div className="about-me">
        <div className="about-me__title">
            About me
        </div>

        <div className="about-me__content">
            {aboutMeText}
        </div>

        <div className="separator" />
    </div>
);

export default AboutMe;
