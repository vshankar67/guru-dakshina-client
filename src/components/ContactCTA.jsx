import React from 'react';
import './ContactCTA.css'; // Link to your CSS

const ContactCTA = () => {
    return (
        <div className="cta-section red-gradient-bg"  
        style={{
            width: '100vw',
            marginLeft: 'calc(-50vw + 50%)', // cancels container centering
            boxSizing: 'border-box'
        }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="cta-content-wrapper">
                            <div className="cta-block text-md-end">
                                <span className="subtitle">Get In Touch:</span>
                                <h3 className="title">
                                    <a href="mailto:info@mathematicsguru.in">info@mathematicsguru.in</a>
                                </h3>
                            </div>

                            <div className="cta-separator">
                                <span className='h1'>or</span>
                            </div>

                            <div className="cta-block">
                                <span className="subtitle">Call Us Via:</span>
                                <h3 className="title">
                                    <a href="tel:+917903218495">(+91) 7903218495</a>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCTA;
