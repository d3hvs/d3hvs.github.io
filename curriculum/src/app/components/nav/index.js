import React from 'react';
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
                    Experience
                </Link>
                <Link
                    className={getLinkClass('/skills')}
                    to="/skills"
                >
                    Skills
                </Link>
            </div>

            <div className="nav__right">
                <Link
                    className={getLinkClass('/education')}
                    to="/education"
                >
                    Education
                </Link>
                <Link
                    className={getLinkClass('/projects')}
                    to="/projects"
                >
                    Projects
                </Link>
            </div>
        </div>
    );
};

export default withRouter(Nav);
