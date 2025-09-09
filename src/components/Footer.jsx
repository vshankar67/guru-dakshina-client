import { Facebook, Twitter, Instagram, YouTube, WhatsApp, Telegram, LinkedIn } from "@mui/icons-material";
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-dark text-white py-4 mt-">
      <div className="container d-flex justify-content-between align-items-center flex-wrap">
        <div>
          <h5>Guru Dakshina</h5>
          <p>Online Coaching for Class 7–12</p>
          <p>Specialized in Mathematics</p>
          <p>
            Visit: <a href="https://mathematicsguru.in" className="text-warning" target="_blank">mathematicsguru.in</a>
          </p>
        </div>
        <div className="social-icons mt-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="me-3 text-white">
            <Facebook fontSize="large" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="me-3 text-white">
            <Twitter fontSize="large" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="me-3 text-white">
            <Instagram fontSize="large" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="me-3 text-white">
            <LinkedIn fontSize="large" />
          </a>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="me-3 text-white">
            <WhatsApp fontSize="large" />
          </a>
          <a href="https://t.me/yourchannel" target="_blank" rel="noopener noreferrer" className="me-3 text-white">
            <Telegram fontSize="large" />

            {/*"https://wa.me/919876543210" with your WhatsApp number (format: wa.me/<countrycode><number>)
            "https://t.me/yourchannel" with your Telegram channel link*/}

          </a>
        </div>
        
        <div className="app-download mt-4">
          <h6 className="text-uppercase fw-bold mb-3">Download Our App</h6>
          <div className="d-flex align-items-center flex-wrap gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.yourapp.package"
              target="_blank"
              rel="noopener noreferrer"
            >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_Play_2022_icon.svg/120px-Google_Play_2022_icon.svg.png"
              alt="Get it on Google Play"
              className="store-badge"
            />
            </a>
            <a
            href="https://apps.apple.com/app/id000000000"
            target="_blank"
            rel="noopener noreferrer"
            >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/512px-App_Store_%28iOS%29.svg.png?20201023145313"
              alt="Available on the App Store"
              className="store-badge"
            />
            </a>
          </div>
        </div>

        <div  >
          <img
            src="https://mathematicsguru.in/web/images/logo/logo.png"
            alt="Guru Dakshina Logo"
            className="footer-logo"
          />
        </div>       
      </div>
      <div className="text-center mt-3">
          <small>&copy; {currentYear} Guru Dakshina. All rights reserved. Designed By <a href="https://techistictechnology.com/">Techistic Technology Pvt. Ltd.</a> All Rights Reserved</small>
        </div>
    </footer>
  );
};

export default Footer;
