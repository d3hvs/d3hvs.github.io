import React from 'react';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';

// @avatar image
import ProfileImage from '../../assets/profile.png';

// @styles
import './style.scss';

const Avatar = ({ history, location }) => (
    <div
        className={classNames(
            'avatar',
            { 'avatar--focused': location.pathname === '/' }
        )}
        onClick={() => {
            if (location.pathname !== '/') {
                history.push('/')
            }
        }}
    >
        <img
            alt="Avatar"
            className="avatar__image"
            src={ProfileImage}
        />
    </div>
);

export default withRouter(Avatar);
