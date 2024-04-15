import React from 'react';
import Footer from './Footer';
import AdminNavbar from './AdminNavbar';

const Dashboard = () => {
  return (
    <>
      <AdminNavbar />
      
      <section className="p5 text-center py-5" style={{ marginTop: '50px' }}>
        <div className="container">
          <div className="row">
            <aside className="bg-white col-md-3">
              {/* Add the content for the sidebar */}
            </aside>

            <div className="col-md-9">
              <div className="row">
                <div className="col-md-6">
                  <div className="card text-center align-items-center mb-3">
                    <span className="pt-3"></span>
                    <h6>Student Distribution</h6>
                    <div id="donutchart" style={{ marginTop: '-40px', position: 'center', width: '100%', height: '300px' }}></div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card text-center align-items-center mb-3">
                    <span className="pt-3"></span>
                    <h6>Risk Indicator</h6>
                    <div id="donutchart2" style={{ marginTop: '-40px', position: 'center', width: '100%', height: '300px' }}></div>
                  </div>
                </div>
              </div>

              <div className="row pt-3">
                <div className="col-md-12">
                  <div className="card text-center align-items-center mb-3">
                    <span className="pt-3"></span>
                    <h6>Active Users, Users Activity</h6>
                    <div id="columnchart_values" style={{ marginTop: '-40px', position: 'center', width: '120%', height: '400px' }}></div>
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

export default Dashboard;