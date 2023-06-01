 
  const data = {
    labels: ['Jan', 'Feb', 'March', 'Apr', 'May', 'June', 'july', 'Aug', 'Sep', 'Oct', 'Nov','Dec'],
    datasets: [
      {
        label: 'Deligram',
        data: [1020, 8000, 500, 503, 5000, 4090, 12000, 2000, 10000, 2500, 3000, 3000],
        borderWidth: 1,
        borderColor: '#635BFE',
        backgroundColor: '#635BFE',
        fill: false,
        pointRadius: [0],
        pointHitRadius: [10],
        cubicInterpolationMode: 'monotone',
        tension: 0.4,
      },
      {
        label: 'Amazonbd',
        data: [2020, 10000, 1000, 1003, 10000, 8090, 12000, 4000, 10000, 4500, 6000, 8000],
        borderWidth: 1,
        borderColor: '#FFAF30',
        backgroundColor: '#FFAF30',
        fill: false,
        pointRadius: [0],
        pointHitRadius: [10],
        cubicInterpolationMode: 'monotone',
        tension: 0.4
      },
      {
        label: 'Martvill',
        data: [5020, 10000, 10000, 8003, 10000, 1090, 12000, 10000, 12000, 9000, 9000, 12000],
        borderWidth: 1,
        borderColor: '#CDCCD0',
        backgroundColor: '#CDCCD0',
        fill: false,
        pointRadius: [0],
        pointHitRadius: [10],
        cubicInterpolationMode: 'monotone',
        tension: 0.4,
      }
    ],
  };

  // config 
  const legendMargin = {
    id: 'legendMargin',
    beforeInit(chart, legend, options) {
      const fitValue = chart.legend.fit;
      chart.legend.fit = function fit() {
        fitValue.bind(chart.legend)();
        return this.height += 20;
      }
    }
  }
  const config = {
    type: 'line',
    data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        },
        x: {
          grid: {
            display: false,
          }
        }
      },
      plugins: {
        title: {
          display: true,
        },
        legend: {
          labels: {
            usePointStyle: true,
            boxWidth: 6,
            boxHeight: 6,
          },
        },
        tooltip: {
          usePointStyle: true,
          callbacks: {
            labelPointStyle: function (context) {
              return {
                pointStyle: 'circle',
                rotation: 0
              };
            }
          }
        }
      },

      layout: {
        padding: 18
      },
    },
    plugins: [legendMargin]
  };

  // render init block
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );