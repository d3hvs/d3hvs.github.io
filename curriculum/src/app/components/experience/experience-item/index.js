import React from 'react';

// @styles
import './style.scss';

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
            <div className="experience-item__top-info">
                <div className="experience-item__title">
                    {title}
                </div>

                <div className="experience-item__dates">
                    {dateMin} - {dateMax}
                </div>
            </div>

            <div className="experience-item__company">
                {company}
            </div>

            <div className="experience-item__summary">
                {summary}
            </div>
        </div>
    );
}

export default ExperienceItem;
