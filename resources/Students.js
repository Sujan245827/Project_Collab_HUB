import React from 'react';
import { Link } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';


const Students = () => {
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
                  placeholder="Search for Students"
                  aria-label="Search"
                />
                <button type="button" className="btn btn-secondary">
                  Search
                </button>
              </form>
              <div className="table-responsive mt-3">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th style={{ width: '5%' }}>SN</th>
                      <th style={{ width: '20%' }}>Student Name</th>
                      <th style={{ width: '15%' }}>Student ID</th>
                      <th style={{ width: '15%' }}>Groups</th>
                      <th style={{ width: '30%' }}>Projects</th>
                      <th style={{ width: '8%' }}>Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                      <Link to={`/profile/${12200643}`}>Adam Ken</Link>
                      </td>
                      <td>12200643</td>
                      <td>
                        <a href="groupinfo.html">Group 1</a>
                      </td>
                      <td>Intelligent Home Automation System</td>
                      <td>
                        <button className="btn btn-primary">Edit</button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <Link to="/profile/12201654">Kenny Rob</Link>
                      </td>
                      <td>12201654</td>
                      <td>
                        <a href="groupinfo.html">Group 2</a>
                      </td>
                      <td>Smart Traffic Management System</td>
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
    </>
  );
};

export default Students;