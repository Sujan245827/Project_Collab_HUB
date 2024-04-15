import React from 'react';

const Footer = () => {
  return (
    <div className="muishadow">
      <footer className="text-center text-xl-center bg-light text-muted">
        <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          &copy; 2024 Copyright:{' '}
          <span className="text-reset fw-bold">www.projectcollabhub.com</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;