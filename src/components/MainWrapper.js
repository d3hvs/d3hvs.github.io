import React from 'react';
import info from '../info';

const SummarySection = () => {
  const { summary } = info;
  return (
    <section className="section summary-section">
      <h2 className="section-title"><i className="fa fa-user"></i>Career Profile</h2>
      <div className="summary">
          <p>{summary.description}</p>
      </div>
    </section>
  );
};

const ExperiencesSection = () => {
  const { experiences } = info;
  return (
    <section className="section experiences-section">
      <h2 className="section-title"><i className="fa fa-briefcase"></i>Experiences</h2>
      
      {
        experiences.items.map((item, index) => (
          <div key={index} className="item">
            <div className="meta">
              <div className="upper-row">
                <h3 className="job-title">{item.position}</h3>
                <div className="time">{item.time}</div>
              </div>
              <div className="company">{item.company}</div>
            </div>
            <div className="details">
              <p>{item.description}</p>
            </div>
          </div>
        ))
      }
      
    </section>
  );
};

const ProjectsSection = () => {
  const { projects } = info;
  return (
    <section className="section projects-section">
      <h2 className="section-title"><i className="fa fa-archive"></i>Projects</h2>
      <div className="intro">
        <p>{projects.intro}</p>
      </div>
      {
        projects.items.map((item, index) => (
          <div key={index} className="item">
            <span className="project-title">
              <a href="#hook">{item.name}</a>
            </span>
            &nbsp;-&nbsp;
            <span className="project-tagline">
              {item.description}
            </span>
          </div>
        ))
      }
    </section>
  );
};

const SkillsSection = () => {
  return (
    <section className="skills-section section">
      <h2 className="section-title"><i className="fa fa-rocket"></i>Skills &amp; Proficiency</h2>
      <div className="skillset">        
        {info.skills.items.map((item, index) => (
          <div key={index} className="item">
            <h3 className="level-title">{item.title}</h3>
            <div className="level-bar">
              <div className="level-bar-inner" data-level={item.percentage}>
              </div>                                      
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const MainWrapper = () => {
  return (
    <div className="main-wrapper">
      <SummarySection />
      <ExperiencesSection />
      <ProjectsSection />
      <SkillsSection />
    </div>
  );
};

export default MainWrapper;