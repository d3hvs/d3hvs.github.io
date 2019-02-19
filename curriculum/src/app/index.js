import React from 'react';

// @router
import { HashRouter, Route, Switch } from 'react-router-dom';

// @components
import Header from './components/header';
import Home from './layouts/home';
import Jumbotron from './components/jumbotron';

// @styles
import 'react-md/src/scss/_react-md.scss';
import './style.scss';

const Test = ({ text }) => (
    <div>
        {text}
    </div>
);

const Curriculum = () => (
    <HashRouter basename="/">
        <div className="curriculum">
            <Header />

            <div className="curriculum__content">
                <Jumbotron />

                <div className="curriculum__route">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/contact" render={() => <Test text="Contact" />} />
                    </Switch>
                </div>
            </div>
        </div>
    </HashRouter>
);

export default Curriculum;
