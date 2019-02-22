import React from 'react';
import PropTypes from 'prop-types';

// @components
import Separator from '../separator';

// @styles
import './style.scss';

const Info = ({ children, showSeparator, title }) => (
    <div className="info">
        <div className="info__title">
            {title}
        </div>

        <div className="info__content">
            {children}
        </div>

        { showSeparator && <Separator /> }
    </div>
);

Info.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.element
    ]).isRequired,
    showSeparator: PropTypes.bool,
    title: PropTypes.string.isRequired
};

Info.defaultProps = {
    showSeparator: true
};

export default Info;
