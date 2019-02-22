import React from 'react';
import PropTypes from 'prop-types';

const ExperienceItem = (props) => {
    const {
        company,
        dateMax,
        dateMin,
        summary,
        title
    } = props;

    return (
        <div className="experience-item">
            <div className="experience-item__head">
                <div className="experience-item__title">{title}</div>
                <div className="experience-item__date-min">{dateMin}</div>
                <div className="experience-item__date-max">{dateMax}</div>
            </div>
            <div className="experience-item__company">{company}</div>
            <div className="experience-item__summary">{summary}</div>
        </div>
    );
};

ExperienceItem.propTypes = {
    company: PropTypes.string.isRequired,
    dateMin: PropTypes.string.isRequired,
    dateMax: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default ExperienceItem;
