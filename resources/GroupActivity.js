import React from 'react';
import './GroupActivity.css';

const GroupActivity = () => {
  return (
    <div className="group-activity">
      <h3>Group Activity</h3>
      <ul className="list-group">
        <li className="list-group-item">
          <strong>Emily Brown</strong> completed the task "Design User Interface".
          <span className="badge bg-success">Completed</span>
        </li>
        <li className="list-group-item">
          <strong>Max Mann</strong> marked the task "Implement Database Schema" as completed.
          <span className="badge bg-success">Completed</span>
        </li>
        <li className="list-group-item">
          <strong>Felix Rousy</strong> created a new task "Write API Documentation".
          <span className="badge bg-info">New</span>
        </li>
        <li className="list-group-item">
          <strong>Michel Jonhson</strong> added a comment to the task "Design User Interface".
          <span className="badge bg-primary">Comment</span>
        </li>
      </ul>
    </div>
  );
};

export default GroupActivity;