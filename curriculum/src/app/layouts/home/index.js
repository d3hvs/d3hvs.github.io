import React from 'react';

// @components
import AboutMe from '../../components/about-me';
import Experience from '../../components/experience';
import Skills from '../../components/skills';

// @styles
import './style.scss';

const Home = () => (
    <div className="home">
        <AboutMe />
        <Experience />
        <Skills />
    </div>
);

export default Home;
