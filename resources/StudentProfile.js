import React, { useState } from 'react';
import AdminNavbar from './AdminNavbar';
import './StudentProfile.css';
import { Link } from 'react-router-dom';
import GroupChat from './GroupChat';
import GroupTask from './GroupTask';
import Activity from './Activity';
import GroupActivity from './GroupActivity';

const StudentProfile = () => {
  const [activeComponent, setActiveComponent] = useState('activity');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'activity':
        return <Activity />;
      case 'groupActivity':
        return <GroupActivity />;
      case 'groupChat':
        return <GroupChat />;
      case 'groupTask':
        return <GroupTask />;
      default:
        return null;
    }
  };

  return (
    <>
      <AdminNavbar />

      <section className="p5 text-left py-5" style={{ marginTop: '50px' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-3" style={{ backgroundColor: '#f2f3f4' }}>
              <div className="card text-left mb-3">
                <span className="pt-0"></span>
                <div className="card-body">
                  <h6>Student Name:</h6>
                  <span>Michel Jonhson</span>
                </div>
              </div>

              <div className="card text-left mb-3">
                <span className="pt-0"></span>
                <div className="card-body">
                  <h6>Group Name:</h6>
                  <span>T324 Group1</span>
                </div>
              </div>

              <div className="card text-left mb-3">
                <span className="pt-0"></span>
                <div className="card-body">
                  <h6>Project Name:</h6>
                  <span>Smart Home Automation System</span>
                </div>
              </div>

              <div className="card text-left mb-3">
                <span className="pt-0"></span>
                <div className="card-body">
                  <h6>Instructor:</h6>
                  <span>
                    Dr. Ali Barytee <Link to="/studentinfom"><i className="bi bi-chat-square-text"></i></Link>
                  </span>
                </div>
              </div>

              <div className="card text-left mb-3">
                <span className="pt-0"></span>
                <div className="card-body">
                  <h6>Team Members:</h6>
                  <span>Michel Jonhson</span><br />
                  <span>Adim Smith</span><br />
                  <span>Emily Brown</span><br />
                  <span>Max Mann</span><br />
                  <span>Felix Rousy</span>
                </div>
              </div>
            </div>

            <div className="col-md-9">
              <div className="overflow-container" style={{ width: '100%' }}>
                <button
                  className={`btn btn-primary me-3 ${activeComponent === 'activity' ? 'active' : ''}`}
                  onClick={() => setActiveComponent('activity')}
                >
                  Activity
                </button>
                <button
                  className={`btn btn-primary me-3 ${activeComponent === 'groupActivity' ? 'active' : ''}`}
                  onClick={() => setActiveComponent('groupActivity')}
                >
                  Group Activity
                </button>
                <button
                  className={`btn btn-primary me-3 ${activeComponent === 'groupChat' ? 'active' : ''}`}
                  onClick={() => setActiveComponent('groupChat')}
                >
                  Group Chat
                </button>
                <button
                  className={`btn btn-primary me-3 ${activeComponent === 'groupTask' ? 'active' : ''}`}
                  onClick={() => setActiveComponent('groupTask')}
                >
                  Group Task
                </button>
              </div>
              <div className="col-12 pt-4">{renderComponent()}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentProfile;