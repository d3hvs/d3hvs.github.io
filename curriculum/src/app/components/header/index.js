import React from 'react';

// @components
import Nav from '../nav';

// @styles
import './style.scss';

const Header = () => (
    <div className="header">
        <Nav />
        <div className="header__name">
            David Higuita
        </div>

        <div className="header__position">
            Front End Developer
        </div>
    </div>
);

export default Header;
