import React from 'react';
import { Button } from 'react-md';
import { Link, withRouter } from 'react-router-dom';
import classNames from 'classnames';

// @styles
import './style.scss';

const Nav = ({ location }) => {
    const isHere = (route) =>
        route === location.pathname;

    const getLinkClass = (route) =>
        classNames('nav__item', { 'nav__item--focused': isHere(route) })

    return (
        <div className="nav">
            <div className="nav__left">
                <Link
                    className={getLinkClass('/experience')}
                    to="/experience"
                >
                    <i className="material-icons">home</i>
                    <span>Experience</span>
                </Link>
                <Link
                    className={getLinkClass('/skills')}
                    to="/skills"
                >
                    <span>Skills</span>
                </Link>
            </div>

            <div className="nav__right">
                <Link
                    className={getLinkClass('/education')}
                    to="/education"
                >
                    <span>Education</span>
                </Link>
                <Link
                    className={getLinkClass('/projects')}
                    to="/projects"
                >
                    <span>Projects</span>
                </Link>
            </div>
        </div>
    );
};

export default withRouter(Nav);
