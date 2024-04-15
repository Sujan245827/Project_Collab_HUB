import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import LoginModal from './LoginModal';
import RegistrationModal from './RegistrationModal';

const Home = () => {
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

      <section className="p5 text-center text-lg-start py-5" style={{ marginTop: '70px' }}>
        <div className="container">
          <div className="d-lg-flex align-items-center justify-content-between">
            <div className="ps-1 pe-4">
              <h3>Having trouble with your project collaboration with friends and teachers?</h3>
              <h5>Don't worry because we are here to help.</h5>
              <p className="lead my-4">
                Project collab hub is a platform that helps lecturers and teachers monitor and manage group projects and students. It also helps students collaborate with their team members.
              </p>
              <Button variant="primary" size="lg" onClick={openRegistrationModal}>
                Click here to get started!!!
              </Button>
            </div>
            <img src="img/students.jpeg" className="image-fluid w-50 d-none d-lg-block" alt="Students" />
            <img src="img/students.jpeg" className="img-fluid d-block d-lg-none d-xl-none d-xxl-none pt-5" alt="Students" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;