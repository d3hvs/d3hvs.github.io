import React from 'react';

// @data
import { presentationText } from '../../data';

// @styles
import './style.scss';

const Presentation = () => (
    <div className="presentation">
        <div className="presentation__title">
            Hi, I'm David
        </div>

        <div className="presentation__content">
            {presentationText}
        </div>
    </div>
);

export default Presentation;
