import React, { useState } from 'react';
import { makeStyles } from '@mui/styles'; // You need to install this separately
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import './FloatingChatBot.css'; // <-- Correct CSS file

const useStyles = makeStyles(() => ({
  root: {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    zIndex: 1000,
  },
  mainButton: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#007bff',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
    transition: 'transform 0.3s, background-color 0.3s',
    '&:hover': {
      transform: 'scale(1.1)',
      backgroundColor: '#0056b3',
    },
  },
  optionsContainer: {
    position: 'absolute',
    bottom: '70px',
    right: '0px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  optionButton: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#25D366',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10px',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
    transition: 'transform 0.3s, background-color 0.3s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  optionButtonCall: {
    backgroundColor: '#28a745',
  },
}));

const FloatingChatBot = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleMainClick = () => {
    setOpen(!open);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917903218495', '_blank'); // <-- Replace with your number
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+917903218495'; // <-- Replace with your number
  };

  return (
    <div className={classes.root}>
      {open && (
        <div className={classes.optionsContainer}>
          <div
            className={`${classes.optionButton} ${classes.optionButtonCall}`}
            onClick={handleCallClick}
            title="Call Us"
          >
            <PhoneIcon />
          </div>
          <div
            className={classes.optionButton}
            onClick={handleWhatsAppClick}
            title="WhatsApp Chat"
          >
            <WhatsAppIcon />
          </div>
        </div>
      )}
      <div
        className={`${classes.mainButton} floating-chatbot-btn`}
        onClick={handleMainClick}
        title="Chat with us"
      >
        <SupportAgentIcon style={{ fontSize: 30 }} />
      </div>
    </div>
  );
};

export default FloatingChatBot;
