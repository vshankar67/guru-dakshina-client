import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Header.css';
import logo from '../assets/logo.png';
import { Facebook, Twitter, Instagram, YouTube, WhatsApp, Telegram, LinkedIn, Phone, Email } from "@mui/icons-material";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCloseMenu = () => {
  setMenuOpen(false);
  };

  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header>
      {/* Top Banner */}
      <div className="top-banner bg-black text-white py-2 ">
        <div className="container">
          <div className="row text-center text-md-start align-items-center">
      
            <div className="col-18 col-md-6 mb-2 mb-md-0">
              Special Offer: Enroll now and get scholarship benefits!
            </div>
      
            <div className="col-12 col-md-3 mb-2 mb-md-0 hover-red">
              <a href="tel:7903218495" className="text-white text-decoration-none hover-text-red">
                <Phone className='text-red' />
                Call: (+91) 7903218495
              </a>
            </div>
      
            <div className="col-12 col-md-3 hover-red">
               <a href="mailto:info@mathematicsguru.in" className="text-white text-decoration-none hover-text-red" target="_blank" rel="noopener noreferrer">
                <Email className='text-red' />
                Email: info@mathematicsguru.in
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav ref={navRef} className="navbar navbar-expand-lg navbar-light bg-light px-3">
        <Link to="/" className="navbar-brand" onClick={handleCloseMenu}>
          <img
            src={logo}
            alt="Guru Dakshina"
            height="70"
          />
        </Link>

        <button className="navbar-toggler" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={handleCloseMenu}> <strong> Home</strong></Link>
            </li>

            <li className="nav-item dropdown hoverable-dropdown">
              <Link to="/about" className="nav-link dropdown-toggle" onClick={handleCloseMenu}> <strong>About</strong></Link>
                <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                <li>
                  <Link className="dropdown-item" to="/about#director" onClick={handleCloseMenu}> <strong> Director's Message</strong></Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/#scholarship" onClick={handleCloseMenu}> <strong> Scholarship</strong></Link>
                </li>
                </ul>
            </li>
            <li className="nav-item">
              <Link to="/courses" className="nav-link" onClick={handleCloseMenu}> <strong> Courses</strong></Link>
            </li>
            <li className="nav-item">
              <Link to="/gallery" className="nav-link" onClick={handleCloseMenu}> <strong> Gallery</strong></Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={handleCloseMenu}> <strong> Contact</strong></Link>
            </li>
          </ul>
          
          {/* Social Media Icons */}

          <div className="social-icons me-3" >
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="me-3 text-dark">
            <Facebook fontSize="large"/> 
          </a>                  
          
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="me-3 text-dark">
            <Instagram fontSize="large"/>
          </a>
          <a href="https://Linkedin.com" target="_blank" rel="noopener noreferrer" className="me-3 text-dark">
            <LinkedIn fontSize="large"/>
          </a>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="me-3 text-dark">
            <WhatsApp />
          </a>
          <a href="https://t.me/yourchannel" target="_blank" rel="noopener noreferrer" className="me-3 text-dark">
            <Telegram fontSize="large"/>
          </a>
          </div>
          
          {/* App Download Links */}
          <div className="app-download me-3">
            <a  href="https://play.google.com/store/apps/details?id=com.yourapp.package" target="_blank" rel="noopener noreferrer" className="me-2">  
              
              <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_Play_2022_icon.svg/120px-Google_Play_2022_icon.svg.png"
              alt="Get it on Google Play"
              className="store-badge"
            />
            </a>
            <a href="https://apps.apple.com/app/id000000000" target="_blank" rel="noopener noreferrer">             
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/512px-App_Store_%28iOS%29.svg.png?20201023145313"
              alt="Available on the App Store"
              className="store-badge"
            />
            </a>
          </div>  


          <a href="https://crm.mathematicsguru.in" className="btn btn-primary btn-login">
            Login/Registration
          </a>

        </div>
      </nav>
    </header>
  );
};

export default Header;