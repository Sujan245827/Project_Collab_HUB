import React from 'react';
import AdminNavbar from './AdminNavbar';
import Footer from './Footer';

const StudentProfile = () => {
  return (
    <>
      <AdminNavbar />
      <section className="p5 text-center py-5" style={{ marginTop: '50px' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <img
                    src={process.env.PUBLIC_URL + '/img/pp.jpeg'}
                    alt="Profile"
                    className="img-fluid rounded-circle mb-3"
                    style={{ width: '150px', height: '150px' }}
                  />
                  <h5 className="card-title">John Fernandis</h5>
                  <p className="card-text">Student</p>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card">
                <div className="card-body">
                  <h4>Applicant Profile</h4>
                  <div className="row">
                    <div className="col-md-6">
                      <p><strong>Name:</strong> John Fernandis</p>
                      <p><strong>Student ID:</strong> 12200643</p>
                      <p><strong>Email:</strong> john@example.com</p>
                    </div>
                    <div className="col-md-6">
                      <p><strong>Phone:</strong> +1 123-456-7890</p>
                      <p><strong>Address:</strong> 123 Main St, City</p>
                      <p><strong>Date of Birth:</strong> 01/01/2000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default StudentProfile;