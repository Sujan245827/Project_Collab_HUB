import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import LoginModal from './LoginModal';
import RegistrationModal from './RegistrationModal';

const Navbar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);

  const openLoginModal = () => setShowLoginModal(true);
  const closeLoginModal = () => setShowLoginModal(false);
  const openRegistrationModal = () => setShowRegistrationModal(true);
  const closeRegistrationModal = () => setShowRegistrationModal(false);

  return (
    <>
      <LoginModal show={showLoginModal} handleClose={closeLoginModal} openRegistrationModal={openRegistrationModal} />
      <RegistrationModal show={showRegistrationModal} handleClose={closeRegistrationModal} openLoginModal={openLoginModal} />

      <nav className="navbar navbar-expand-lg bg-white navbar-light py-2 ps-3 fixed-top">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img id="pchlogo" className="d-none d-sm-block" src="img/pchlogo.png" alt="PCH Logo" style={{ width: '200px' }} />
            <img className="d-block d-sm-none" src="img/pchlogo.png" alt="PCH Logo" style={{ width: '130px' }} />
          </Link>

          <div className="d-flex justify-content-end">
            <button className="navbar-toggler nav-control" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <span className="textcolor">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  <span className="textcolor">About us</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/resources" className="nav-link">
                  <span className="textcolor">Resources</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contacts" className="nav-link">
                  <span className="textcolor">Contacts</span>
                </Link>
              </li>
              <li>
                <Button variant="primary" onClick={openLoginModal}>
                  Get Started
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;