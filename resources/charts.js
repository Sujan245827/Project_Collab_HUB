export function drawChart() {
    var data = window.google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Student in Groups', 11],
      ['Students not in Groups', 2],
      ['Groups working on Projects', 7],
    ]);
  
    var options = {
      pieHole: 0.2,
      backgroundColor: 'transparent',
      legend: { position: 'bottom', alignment: 'center' },
    };
  
    var chart = new window.google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
  }
  
  export function drawChart2() {
    var data2 = window.google.visualization.arrayToDataTable([
      ['Risk', 'Percentage'],
      ['At Risk', 20],
      ['Not At Risk', 80],
    ]);
  
    var options2 = {
      pieHole: 0.2,
      backgroundColor: 'transparent',
      slices: {
        0: { color: 'red' },
        1: { color: 'green' },
      },
      legend: { position: 'bottom', alignment: 'center' },
    };
  
    var chart2 = new window.google.visualization.PieChart(document.getElementById('donutchart2'));
    chart2.draw(data2, options2);
  }
  
  export function drawColumnChart() {
    var data = window.google.visualization.arrayToDataTable([
      ['Week', 'Value'],
      ['Week 1', 20],
      ['Week 2', 30],
      ['Week 3', 40],
      ['Week 4', 50],
      ['Week 5', 60],
      ['Week 6', 70],
      ['Week 7', 80],
      ['Week 8', 90],
      ['Week 9', 95],
      ['Week 10', 80],
      ['Week 11', 70],
      ['Week 12', 60],
    ]);
  
    var options = {
      title: '',
      backgroundColor: 'transparent',
      width: '100%',
      height: 400,
      hAxis: {
        title: 'Active users VS Weeks',
        textStyle: { fontSize: 12 },
      },
      vAxis: {
        title: '',
        minValue: 1,
        maxValue: 100,
      },
      legend: { position: 'none' },
    };
  
    var chart = new window.google.visualization.ColumnChart(document.getElementById('columnchart_values'));
    chart.draw(data, options);
  }