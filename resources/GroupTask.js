import React from 'react';
import './GroupTask.css';

const GroupTask = () => {
  return (
    <div className="group-task">
      <h3>Group Task</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Task</th>
            <th>Assigned To</th>
            <th>Status</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Design User Interface</td>
            <td>Emily Brown</td>
            <td>In Progress</td>
            <td>2023-06-30</td>
          </tr>
          <tr>
            <td>Implement Database Schema</td>
            <td>Max Mann</td>
            <td>Completed</td>
            <td>2023-06-15</td>
          </tr>
          <tr>
            <td>Write API Documentation</td>
            <td>Felix Rousy</td>
            <td>Not Started</td>
            <td>2023-07-10</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GroupTask;