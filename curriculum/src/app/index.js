import React from 'react';

// @router
import { HashRouter, Route, Switch } from 'react-router-dom';

// @components
import Header from './components/header';
import Avatar from './components/avatar';
import Presentation from './components/presentation';
import Social from './components/social';
import Experience from './components/experience';
import Skills from './components/skills';
import Education from './components/education';
import Projects from './components/projects';

// @styles
import 'react-md/src/scss/_react-md.scss';
import './style.scss';

const Curriculum = () => (
    <HashRouter basename="/">
        <div className="curriculum">
            <header>
                <Header />
                <Social />
            </header>
            <Avatar />

            <div className="curriculum__content">
                <Switch>
                    <Route exact path="/" component={Presentation} />
                    <Route exact path="/education" component={Education} />
                    <Route exact path="/experience" component={Experience} />
                    <Route exact path="/projects" component={Projects} />
                    <Route exact path="/skills" component={Skills} />
                </Switch>
            </div>
        </div>
    </HashRouter>
);

export default Curriculum;
