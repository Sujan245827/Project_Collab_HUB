import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LoginModal = ({ show, handleClose, openRegistrationModal }) => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Skip login validation and proceed to the dashboard
    handleClose();
    navigate('/dashboard');
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="loginEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
            />
          </Form.Group>
          <Form.Group controlId="loginPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3">
            Login
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <p>
          Don't have an account?{' '}
          <a href="#!" onClick={() => { handleClose(); openRegistrationModal(); }}>
            Register Here
          </a>
        </p>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;