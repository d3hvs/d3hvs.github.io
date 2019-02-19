import React from 'react';

// @components
import Info from '../../components/info';

// @data
import {
    aboutMeText
} from '../../data';

const Home = () => (
    <div className="home">
        <Info
            content={aboutMeText}
            title="About me"
        />
    </div>
);

export default Home;
