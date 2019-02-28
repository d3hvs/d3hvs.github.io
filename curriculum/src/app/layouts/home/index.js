import React from 'react';

// @components
import AboutMe from '../../components/about-me';
import Experience from '../../components/experience';

// @styles
import './style.scss';

const Home = () => (
    <div className="home">
        <AboutMe />
        <Experience />
    </div>
);

export default Home;
