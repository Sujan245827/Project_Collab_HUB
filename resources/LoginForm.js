import React from 'react';

const LoginForm = ({ closeLogin, openRegistration }) => {
  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here
    closeLogin();
  };

  return (
    <div className="login-container">
      <button className="close-btn" onClick={closeLogin}>
        X
      </button>
      <div className="login-content">
        <img src="img/pc.png" alt="PC" className="login-image d-none d-lg-block" />
        <div className="form-box">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <label htmlFor="loginEmail">Student ID:</label>
            <input type="email" id="loginEmail" name="loginEmail" placeholder="Enter your Student ID" />
            <label htmlFor="loginPassword">Password:</label>
            <input type="password" id="loginPassword" name="loginPassword" placeholder="Enter your Password" />
            <br />
            <button type="submit" className="btn btn-primary" style={{ width: '50%' }}>
              Login
            </button>
            <p>
              Don't have an account?{' '}
              <a href="#!" onClick={openRegistration}>
                Register Here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;