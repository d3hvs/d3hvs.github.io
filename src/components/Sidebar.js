import React from 'react';

import info from '../info';

const extraStyles = {
  image: {
    height: 135,
    width: 125,
    borderRadius: '50%'
  }
};

const ProfileContainer = () => {
  const { profile } = info;
  return (
    <div className="profile-container">
      <img className="profile" style={extraStyles.image} src={profile.image} alt="Profile" />
      <h1 className="name">{profile.name}</h1>
      <h3 className="tagline">{profile.position}</h3>
    </div>
  );
};

const ContactContainer = () => {
  const { contact } = info;
  return (
    <div className="contact-container container-block">
      <ul className="list-unstyled contact-list">
        {
          contact.items.map((item, index) => (
            <li key={index} className={item.classIcon}>
              <i className={item.classFa}></i>
              {
                item.href === null
                ? <span>{item.label}</span>
                : <a href={item.href} target='_blank'>{item.label}</a>
              }
            </li>
          ))
        }
      </ul>
    </div>
  );
};

const EducationContainer = () => {
  const { education } = info;
  return (
    <div className="education-container container-block">
      <h2 className="container-block-title">Education</h2>
      {
        education.items.map((item, index) => (
          <div key={index} className="item">
            <h4 className="degree">{item.title}</h4>
            <h5 className="meta">{item.institution}</h5>
            <div className="time">{item.date}</div>
        </div>
        ))
      }
    </div>
  );
};

const LanguageContainer = () => {
  const { languages } = info;
  return (
    <div className="languages-container container-block">
      <h2 className="container-block-title">Languages</h2>
      <ul className="list-unstyled interests-list">
        {
          languages.items.map((item, index) => (
            <li key={index}>
              {item.label} &nbsp;
              <span className="lang-desc">({item.level})</span>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

const InterestsContainer = () => {
  const { interests } = info;
  return (
    <div className="interests-container container-block">
      <h2 className="container-block-title">Interests</h2>
      <ul className="list-unstyled interests-list">
        {
          interests.items.map((item, index) => (
            <li key={index}>{item.label}</li>
          ))
        }
      </ul>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <ProfileContainer />
      <ContactContainer />
      <EducationContainer />
      <LanguageContainer />
      <InterestsContainer />
    </div>
  );
};

export default Sidebar;