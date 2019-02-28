import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const ProgressBar = ({ progress }) => (
    <div className="progress-bar">
        <div className="progress-bar__fill" style={{ width: `${progress}%` }} />
        <div className="progress-bar__value">
            {progress}
        </div>
    </div>
);

ProgressBar.propTypes = {
    progress: PropTypes.number.isRequired
};

export default ProgressBar;
