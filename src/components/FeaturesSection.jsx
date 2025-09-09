import React from 'react';
import './FeaturesSection.css'; // Make sure this file exists

const FeaturesSection = () => {
  return (
    <div className="features-area-2">
      <div className="container">
        <div className="features-grid-wrap">
          <div className="features-box features-style-2 edublink-svg-animate">
            <div className="icon">
              <img
                className="svgInject"
                src="https://mathematicsguru.in/web/images/animated-svg-icons/online-class.svg"
                alt="Afforable Learning"
              />
            </div>
            <div className="content">
              <h5 className="title"><span>Affordable</span> Learning</h5>
            </div>
          </div>

          <div className="features-box features-style-2 edublink-svg-animate">
            <div className="icon">
              <img
                className="svgInject"
                src="https://mathematicsguru.in/web/images/animated-svg-icons/instructor.svg"
                alt="Top Teachers"
              />
            </div>
            <div className="content">
              <h5 className="title"><span>Top</span> Teachers</h5>
            </div>
          </div>

          <div className="features-box features-style-2 edublink-svg-animate">
            <div className="icon certificate">
              <img
                className="svgInject"
                src="https://mathematicsguru.in/web/images/animated-svg-icons/certificate.svg"
                alt="Doubt Sessions"
              />
            </div>
            <div className="content">
              <h5 className="title"><span>Doubt</span> Sessions</h5>
            </div>
          </div>

          <div className="features-box features-style-2 edublink-svg-animate">
            <div className="icon">
              <img
                className="svgInject"
                src="https://mathematicsguru.in/web/images/animated-svg-icons/user.svg"
                alt="6000+ Students"
              />
            </div>
            <div className="content">
              <h5 className="title"><span>6000+</span> Students</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
