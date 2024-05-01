import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import './AddProjects.css';

const AddProjects = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission and add the project
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      navigate('/projects');
    }, 2000);
  };

  return (
    <>
      <AdminNavbar />

      <section className="p-5 py-5" style={{ marginTop: '50px' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <form className="border rounded p-4 shadow-sm" onSubmit={handleSubmit}>
                <div className="mb-3 text-start">
                  <label htmlFor="projectName" className="form-label">
                    Project Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="projectName"
                    placeholder="Enter Project Name"
                  />
                </div>
                <div className="mb-3 text-start">
                  <label htmlFor="projectDescription" className="form-label">
                    Project Description:
                  </label>
                  <textarea
                    className="form-control"
                    id="projectDescription"
                    rows="3"
                    placeholder="Enter Project Description"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Done
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Project has been added successfully!</p>
          </div>
        </div>
      )}
    </>
  );
};

export default AddProjects; 