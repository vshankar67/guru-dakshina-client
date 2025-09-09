// src/pages/LoginRedirect.jsx
import { useEffect } from 'react';

const LoginRedirect = () => {
  useEffect(() => {
    // Redirect after 2 seconds
    const timer = setTimeout(() => {
      window.location.href = 'https://crm.mathematicsguru.in'; // Replace if needed
    }, 2000);

    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <div className="container text-center my-5">
      <h1 className="fw-bold">Redirecting to CRM Portal...</h1>
      <p className="lead">Please wait while we redirect you to the login page.</p>
      <div className="spinner-border text-primary mt-4" role="status" data-aos="zoom-in">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoginRedirect;
