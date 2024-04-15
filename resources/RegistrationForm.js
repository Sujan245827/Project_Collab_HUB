import React from 'react';

const RegistrationForm = ({ closeRegistration, openLogin }) => {
  const handleRegistration = (e) => {
    e.preventDefault();
    // Perform registration logic here
    closeRegistration();
  };

  return (
    <div className="registration-container">
      <button className="close-btn" onClick={closeRegistration}>
        X
      </button>
      <div className="login-content">
        <img src="img/pr.png" alt="PR" className="login-image d-none d-lg-block" />
        <div className="form-box">
          <h2>Register</h2>
          <form onSubmit={handleRegistration}>
            <label htmlFor="fullName">Full Name:</label>
            <input type="text" id="fullName" name="fullName" placeholder="Full Name" />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Email" />
            <label htmlFor="studentId">Student ID:</label>
            <input type="text" id="studentId" name="studentId" placeholder="Student ID" />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Password" />
            <input className="form-check-input" type="checkbox" id="acceptTerms" name="acceptTerms" style={{ width: '16px', height: '16px', display: 'inline' }} />
            <label className="form-check-label" htmlFor="acceptTerms" style={{ display: 'inline' }}>
              I accept the terms & conditions.
            </label>
            <button type="submit" className="btn btn-primary" style={{ width: '50%' }}>
              Register
            </button>
            <p>
              Already Registered?{' '}
              <a href="#!" onClick={openLogin}>
                Login Here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;