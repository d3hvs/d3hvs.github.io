import React from 'react';

// @components
import Separator from '../separator';

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

        <Separator />
    </div>
);

export default AboutMe;
