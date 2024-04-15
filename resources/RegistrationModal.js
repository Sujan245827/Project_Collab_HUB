import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const RegistrationModal = ({ show, handleClose, openLoginModal }) => {
  const handleRegistration = (e) => {
    e.preventDefault();
    // Perform registration logic here
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleRegistration}>
          <Form.Group controlId="fullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Full Name" />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group controlId="studentId">
            <Form.Label>Student ID</Form.Label>
            <Form.Control type="text" placeholder="Student ID" />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group controlId="acceptTerms">
            <Form.Check type="checkbox" label="I accept the terms & conditions." />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-3">
            Register
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <p>
          Already Registered?{' '}
          <a href="#!" onClick={() => { handleClose(); openLoginModal(); }}>
            Login Here
          </a>
        </p>
      </Modal.Footer>
    </Modal>
  );
};

export default RegistrationModal;