import React from 'react';

// @components
import Header from './header';
import Avatar from './avatar';
import Presentation from './presentation';
import Social from './social';
import Experience from './experience';
import Skills from './skills';
import Education from './education';
import Projects from './projects';
// import Header from './header';

// @styles
import 'react-md/src/scss/_react-md.scss';
import './style.scss';

const Curriculum = () => (
    <div className="curriculum">
        <header>
            <Header />
            <Social />
        </header>
        <Avatar />

        <div className="curriculum__content">
            <Presentation />
            <Experience />
            <Skills />
            <Education />
            <Projects />
        </div>
    </div>
);

export default Curriculum;
