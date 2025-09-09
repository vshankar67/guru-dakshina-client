import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HeroBanner.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const backgroundImages = [
  "https://images.unsplash.com/photo-1563394867331-e687a36112fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b25saW5lJTIwY2xhc3Nyb29tfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1661911788406-0ab64b1c5f78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG9ubGluZSUyMGNsYXNzcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1569653402334-2e98fbaa80ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG9ubGluZSUyMGNsYXNzcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
];

const HeroBanner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
     // Change image every 5 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div
      className="hero-banner d-flex align-items-center"
      style={{
        backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8 text-left text-white">
            <h1 className="display-4 fw-bold">
              To win, you have to fight; <br />
              <span className="hindi-text">हार मानने का कोई विकल्प नहीं |</span>
            </h1>
            <h2 className="lead mt-3">
              "Never give up; your efforts will make your dreams come true.
            </h2>
            <Link to="/login" className="btn btn-primary btn-login mt-4">
              Get Started <ArrowForwardIcon />
            </Link>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="carousel-dots">
        {backgroundImages.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => setCurrentImageIndex(index)}
          ></span>
        ))}
      </div>

    </div>
  );
};

export default HeroBanner;
