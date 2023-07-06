const sessionChartFive = document.getElementById('sessionChartFive');
new Chart(sessionChartFive, {
  type: 'doughnut',
  data: {
    labels: ['Red', 'Brown'],
    datasets: [
    {
      data: [30,70],
      backgroundColor: [
        '#A82C32',
        '#35363A',
      ]
    }]
  },
  options: {
    plugins:{
      legend: false,
      tooltip: {
        enabled:false
      }
    },
  }
});

const sessionChartSix = document.getElementById('sessionChartSix');
new Chart(sessionChartSix, {
  type: 'doughnut',
  data: {
    labels: ['Red', 'Brown'],
    datasets: [
    {
      data: [30,70],
      backgroundColor: [
        '#A82C32',
        '#35363A',
      ]
    }]
  },
  options: {
    plugins:{
      legend: false,
      tooltip: {
        enabled:false
      }
    },
  }
});

const sessionChartSeven = document.getElementById("sessionChartSeven");
new Chart(sessionChartSeven, {
  type: 'doughnut',
  data: {
    labels: ['Red', 'Brown'],
    datasets: [
    {
      data: [30,70],
      backgroundColor: [
        '#A82C32',
        '#35363A',
      ]
    }]
  },
  options: {
    plugins:{
      legend: false,
      tooltip: {
        enabled:false
      }
    },
  }
});