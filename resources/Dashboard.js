import React, { useEffect } from 'react';
import AdminNavbar from './AdminNavbar';

import './Dashboard.css';
import { drawChart, drawChart2, drawColumnChart } from './charts';

const Dashboard = () => {
  useEffect(() => {
    // Load Google Charts library
    const script = document.createElement('script');
    script.src = 'https://www.gstatic.com/charts/loader.js';
    script.async = true;
    script.onload = () => {
      // Load the Visualization API and the corechart package
      window.google.charts.load('current', { packages: ['corechart'] });

      // Set a callback to run when the Google Visualization API is loaded
      window.google.charts.setOnLoadCallback(() => {
        drawChart();
        drawChart2();
        drawColumnChart();
      });
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <AdminNavbar />
      
      <section className="p5 text-center py-5" style={{ marginTop: '50px' }}>
        <div className="container">
          <div className="row">
            <aside className="bg-white col-md-3">
              <div className="card text-center align-items-center mb-3">
                <span className="pt-1"></span>
                <div className="card-body">
                  <p>Total Users</p>
                  <div className="row align-items-center">
                    <div className="">
                      <img src={process.env.PUBLIC_URL + '/img/ui.png'} className="card-img-top img-fluid" alt="..." style={{ maxWidth: '50%' }} />
                    </div>
                    <div className="">
                      <p style={{ fontSize: '20px' }}>423</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card text-center align-items-center mb-3">
                <span className="pt-1"></span>
                <div className="card-body">
                  <p>Groups Created</p>
                  <div className="row align-items-center">
                    <div className="">
                      <img src={process.env.PUBLIC_URL + '/img/gi.png'} className="card-img-top img-fluid" alt="..." style={{ maxWidth: '50%' }} />
                    </div>
                    <div className="">
                      <p style={{ fontSize: '20px' }}>98</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card text-center align-items-center mb-3">
                <span className="pt-1"></span>
                <div className="card-body">
                  <p>Ongoing Projects</p>
                  <div className="row align-items-center">
                    <div className="">
                      <img src={process.env.PUBLIC_URL + '/img/pi.png'} className="card-img-top img-fluid" alt="..." style={{ maxWidth: '50%' }} />
                    </div>
                    <div className="">
                      <p style={{ fontSize: '20px' }}>106</p>
                    </div>
                  </div>
                </div>
              </div>
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

      
    </>
  );
};

export default Dashboard;