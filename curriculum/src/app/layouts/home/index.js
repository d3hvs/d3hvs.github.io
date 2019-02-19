import React from 'react';

// @components
import AboutMe from '../../components/about-me';
import PersonalInfo from '../../components/personal-info';
import Separator from '../../components/separator';

// @styles
import './style.scss';

const Home = () => (
    <div className="home">
        <AboutMe />
        <PersonalInfo />
        <Separator />
    </div>
);

export default Home;
