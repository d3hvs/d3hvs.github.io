// @vendors
import React from 'react';

// @components
import AboutMe from './components/about-me';
import Experience from './components/experience';
import Header from './components/header';
import Jumbotron from './components/jumbotron';

// @styles
import 'react-md/src/scss/_react-md.scss';
import './style.scss';

const Curriculum = () => (
    <div className="curriculum">
        <Header />

        <div className="curriculum__content">
            <Jumbotron />
            <div className="curriculum__route">            
                <AboutMe />
                <Experience />
            </div>
        </div>
    </div>
);

export default Curriculum;

