import React from 'react';
import AdminNavbar from './AdminNavbar';
import Footer from './Footer';
import './ManageProjects.css';

const ManageProjects = () => {
  return (
    <>
      <AdminNavbar />

      <section className="p5 text-center py-5" style={{ marginTop: '50px' }}>
        <div className="container">
          <div className="card text-center">
            <div className="card-body">
              <form className="d-flex justify-content-center align-items-center">
                <input
                  className="form-control me-2 flex-grow-1"
                  type="search"
                  placeholder="Search for Projects"
                  aria-label="Search"
                />
                <button type="button" className="btn btn-secondary">Search</button>
              </form>
              <div className="table-responsive mt-3">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th style={{ width: '5%' }}>SN</th>
                      <th style={{ width: '30%' }}>Project Name</th>
                      <th style={{ width: '20%' }}>Instructors</th>
                      <th style={{ width: '10%' }}>Groups</th>
                      <th style={{ width: '20%' }}>Progress</th>
                      <th style={{ width: '8%' }}>Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Intelligent Home Automation System</td>
                      <td>Dr Graeme Salter</td>
                      <td>Group 1</td>
                      <td>
                        <button className="btn btn-success" style={{ width: '80%' }}>100%</button>
                      </td>
                      <td>
                        <button className="btn btn-primary">Edit</button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Smart Traffic Management System</td>
                      <td>Dr Ali Braytee</td>
                      <td>Group 2</td>
                      <td>
                        <button className="btn btn-success" style={{ width: '80%' }}>100%</button>
                      </td>
                      <td>
                        <button className="btn btn-primary">Edit</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ManageProjects;