import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import './AddGroups.css';

const AddGroups = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission and add the group
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      navigate('/groups');
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
                  <label htmlFor="groupName" className="form-label">
                    Group's Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="groupName"
                    placeholder="Enter Group's Name"
                  />
                </div>
                <div className="mb-3 text-start">
                  <label htmlFor="groupInstructor" className="form-label">
                    Group's Instructor:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="groupInstructor"
                    placeholder="Enter Group's Instructor"
                  />
                </div>
                <div className="mb-3 text-start">
                  <label htmlFor="groupProject" className="form-label">
                    Group's Project:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="groupProject"
                    placeholder="Enter Group's Project"
                  />
                </div>
                <div className="mb-3 text-start">
                  <label htmlFor="groupLeader" className="form-label">
                    Group's Leader:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="groupLeader"
                    placeholder="Enter Group's Leader"
                  />
                </div>
                <div className="mb-3 text-start">
                  <label htmlFor="member1" className="form-label">
                    Member 1:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="member1"
                    placeholder="Enter Member 1"
                  />
                </div>
                <div className="mb-3 text-start">
                  <label htmlFor="member2" className="form-label">
                    Member 2:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="member2"
                    placeholder="Enter Member 2"
                  />
                </div>
                <div className="mb-3 text-start">
                  <label htmlFor="member3" className="form-label">
                    Member 3:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="member3"
                    placeholder="Enter Member 3"
                  />
                </div>
                <div className="mb-3 text-start">
                  <label htmlFor="member4" className="form-label">
                    Member 4:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="member4"
                    placeholder="Enter Member 4"
                  />
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
            <p>Group has been added successfully!</p>
          </div>
        </div>
      )}
    </>
  );
};

export default AddGroups;