import React from 'react';

// @styles
import './style.scss';

const PersonalInfo = () => (
    <div className="personal-info">
        <div className="personal-info__title">
            personal information
        </div>

        <div className="personal-info__content">
            <div className="personal-info__content-item">
                <div className="personal-info__item-tag">
                    Full Name
                </div>

                <div className="personal-info__item-value">
                    David Esteban Higuita V.
                </div>
            </div>
        </div>
    </div>
);

export default PersonalInfo;
