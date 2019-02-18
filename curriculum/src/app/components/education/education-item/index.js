import React from 'react';

// @styles
import './style.scss';

const EducationItem = (props) => {
    const {
        className,
        dateMax,
        dateMin,
        institution,
        title
    } = props;

    return (
        <div className={className}>
            <div className="education-item__title">
                {title}
            </div>

            <div className="education-item__institution">
                {institution}
            </div>

            <div className="education-item__dates">
                {dateMin} - {dateMax}
            </div>
        </div>
    );
};

export default EducationItem;
