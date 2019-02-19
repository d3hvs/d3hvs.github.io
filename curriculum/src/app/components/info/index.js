import React from 'react';
import PropTypes from 'prop-types';

// @styles
import './style.scss';

const Info = ({ content, showSeparator, title }) => (
    <div className="info">
        <div className="info__title">
            {title}
        </div>

        <div className="info__content">
            {content}
        </div>

        { showSeparator && <div className="separator" /> }
    </div>
);

Info.propTypes = {
    content: PropTypes.string.isRequired,
    showSeparator: PropTypes.bool,
    title: PropTypes.string.isRequired
};

Info.defaultProps = {
    showSeparator: true
};

export default Info;
