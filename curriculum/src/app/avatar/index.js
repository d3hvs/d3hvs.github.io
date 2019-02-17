import React from 'react';

// @avatar image
import ProfileImage from '../assets/profile.png';

// @styles
import './style.scss';

const Avatar = () => (
    <div className="avatar">
        <img
            alt="Avatar"
            className="avatar__image"
            src={ProfileImage}
        />

        <div className="avatar__name">
            David Esteban Higuita
        </div>

        <div className="avatar__position">
            Front End Developer
        </div>
    </div>
);

export default Avatar;
