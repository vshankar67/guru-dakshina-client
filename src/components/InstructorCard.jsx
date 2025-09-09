import React from 'react';
import './InstructorCard.css';

const InstructorCard = ({ name, title, image }) => {
    return (
        <div className="col-lg-4 col-sm-6 col-12 sal-animate" data-sal-delay="100" data-sal="slide-up" data-sal-duration="800">
            <div className="edu-team-grid team-style-1">
                <div className="inner">
                    <div className="thumbnail-wrap">
                        <div className="thumbnail">
                            <a>
                                <img src={image} alt="team" />
                            </a>
                        </div>
                    </div>
                    <div className="content">
                        <h5 className="title"><a>{name}</a></h5>
                        <p className="designation">{title}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;
