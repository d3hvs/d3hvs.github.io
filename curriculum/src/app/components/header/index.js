import React from 'react';
import { Link } from 'react-router-dom';

// @styles
import './style.scss';

const Header = () => (
    <header className="header">
        <nav className="nav">
            <div className="nav__item">
                <Link to="/">Home</Link>
            </div>

            <div className="nav__item">
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    </header>
);

export default Header;
