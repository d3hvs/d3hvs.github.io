import React from 'react';

// @components
import { SocialIcon } from 'react-social-icons';
import Avatar from '../../assets/profile.png';

// @styles
import './style.scss';

const openSocialNetwork = (path) => () => {
    window.open(path, '_blank')
};

const Jumbotron = () => (
    <section className="jumbotron">
        <div className="avatar">
            <img alt="Avatar" src={Avatar} />
        </div>

        <div className="jumbotron__info">
            <div className="jumbotron__name">
                David Higuita
            </div>

            <div className="jumbotron__position">
                Front End Developer
            </div>

            <div className="jumbotron__social">
                <div
                    className="jumbotron__social-item"
                    onClick={openSocialNetwork('https://github.com/davidhiguita')}
                >
                    <SocialIcon
                        bgColor="#FFFFFF"
                        network="github"
                    />
                </div>

                <div
                    className="jumbotron__social-item"
                    onClick={openSocialNetwork('https://twitter.com/dhv_xvx')}
                >
                    <SocialIcon
                        bgColor="#FFFFFF"
                        network="twitter"
                    />
                </div>

                <div
                    className="jumbotron__social-item"
                    onClick={openSocialNetwork('https://www.linkedin.com/in/david-higuita-873bb293/')}
                >
                    <SocialIcon
                        bgColor="#FFFFFF"
                        network="linkedin"
                    />
                </div>
            </div>
        </div>
    </section>
);

export default Jumbotron;
