import React from 'react';

// @components
import { SocialIcon } from 'react-social-icons';

// @styles
import './style.scss';

const style = {
    icons: {
        height: '40px',
        width: '40px'
    }
};

const Social = () => {
    const goTo = url => () => {
        window.open(url, '_blank');
    }
    return (
        <div className="social">
            <div
                className="social__item"
                onClick={goTo('https://twitter.com/dhv_xvx')}
            >
                <SocialIcon
                    bgColor="#ffffff"
                    network="twitter"
                    style={style.icons}
                />
            </div>

            <div
                className="social__item"
                onClick={goTo('https://github.com/davidhiguita')}
            >
                <SocialIcon
                    bgColor="#ffffff"
                    network="github"
                    style={style.icons}
                />
            </div>

            <div
                className="social__item"
                onClick={goTo('https://www.linkedin.com/in/david-higuita-873bb293/')}
            >
                <SocialIcon
                    bgColor="#ffffff"
                    network="linkedin"
                    style={style.icons}
                />
            </div>
        </div>
    );
};

export default Social;
