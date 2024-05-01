import React from 'react';
import { drawChart } from './charts';
import './Activity.css';

const Activity = () => {
  React.useEffect(() => {
    // Load Google Charts library
    const script = document.createElement('script');
    script.src = 'https://www.gstatic.com/charts/loader.js';
    script.async = true;
    script.onload = () => {
      // Load the Visualization API and the corechart package
      window.google.charts.load('current', { packages: ['corechart'] });

      // Set a callback to run when the Google Visualization API is loaded
      window.google.charts.setOnLoadCallback(drawChart);
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="activity">
      <h3>My Activity</h3>
      <div id="columnchart_values" style={{ width: '100%', height: '400px' }}></div>
    </div>
  );
};

export default Activity;