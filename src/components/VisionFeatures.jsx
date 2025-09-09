// VisionFeatures.jsx

import React from 'react';
import './VisionFeatures.css';

const features = [
  {
    title: 'Safe, Secured & Smart Classrooms',
    desc: 'Maintain their focus on their goal and not let them deviate at any cost from their paths.',
    svgUrl: 'https://mathematicsguru.in/web/images/animated-svg-icons/online-degree.svg',
    delay: '100',
    colorClass: 'color-blue',
  },
  {
    title: 'Goal Achiever',
    desc: 'Mentoring students till they achieve their goal.',
    svgUrl: 'https://mathematicsguru.in/web/images/animated-svg-icons/non-degree-programs.svg',
    delay: '200',
    colorClass: 'color-green',
  },
  {
    title: 'Learn in Smart Way',
    desc: 'Keep up‑to‑date with latest exam pattern and trends.',
    svgUrl: 'https://mathematicsguru.in/web/images/animated-svg-icons/off-campus-programs.svg',
    delay: '300',
    colorClass: 'color-pink',
  },
  {
    title: 'Work on Mistakes',
    desc: 'Minimise mistakes and maximize speed with accuracy.',
    svgUrl: 'https://mathematicsguru.in/web/images/animated-svg-icons/hybrid-distance-programs.svg',
    delay: '400',
    colorClass: 'color-orange',
  },
];

const VisionFeatures = () => {
  return (
    <div className="edu-section-gap vision-features-area">
      <div className="container">
        <div className="row g-5">
          {features.map((feature, index) => (
            <div
              className="col-lg-3 col-sm-6 sal-animate"
              data-sal="slide-up"
              data-sal-delay={feature.delay}
              data-sal-duration="800"
              key={index}
            >
              <div className={`categorie-grid categorie-style-1 edublink-svg-animate ${feature.colorClass}`}>
                <div className="icon">
                  <img src={feature.svgUrl} alt={feature.title} className="svg-icon" />
                </div>
                <div className="content">
                  <h5 className="title">{feature.title}</h5>
                  <p>{feature.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisionFeatures;
