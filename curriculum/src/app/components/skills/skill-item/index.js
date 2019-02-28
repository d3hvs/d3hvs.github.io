import React from 'react';
import PropTypes from 'prop-types';

// @components
import ProgressBar from '../../progress-bar';

const SkillItem = ({ progress, title }) => (
    <div className="skill-item">
        <div className="skill-item__title">
            <span>{title}</span>
        </div>

        <ProgressBar progress={progress} />
    </div>
);

SkillItem.propTypes = {
    progress: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
};

export default SkillItem;
