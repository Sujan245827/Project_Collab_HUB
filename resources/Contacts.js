import React from 'react';

const Contacts = () => {
  return (
    <section className="muishadow p-3 pt-md-5 p-lg-5">
      <div style={{ paddingTop: '60px' }} className="container">
        <h2 className="textcolor pb-3">Contact Us</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="username" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Your Message</label>
            <textarea className="form-control" id="message" rows="3"></textarea>
            <div id="messageHelp" className="form-text">We'll review your message as soon as possible.</div>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">I am not a robot.</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      <div className="pb-4"></div>
    </section>
  );
};

export default Contacts;