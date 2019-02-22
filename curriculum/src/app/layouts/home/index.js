import React from 'react';

// @components
import Experience from '../../components/experience';
import Info from '../../components/info';

// @data
import { aboutMeText } from '../../data';

// @styles
import './style.scss';

const Home = () => (
    <div className="home">
        <Info title="About me">
            <span>
                {aboutMeText}
            </span>
        </Info>

        <Experience />
    </div>
);

export default Home;
