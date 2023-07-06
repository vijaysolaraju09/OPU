const ctx = document.getElementById('questionsCreated');

new Chart(ctx, {
    type: 'bar',
    data: {
        // labels: ["Content Area","Grade","Chapter","CCSS Math St...","Unit","Volume","CCSS Math St...","Keywords -M","Others"],
        labels: [
            ["Content", "Area"], "Grade", "Chapter", ["CCSS", "Math St..."], "Unit", "Volume", ["CCSS", "Math St..."],
            ["Keywords", "-M"], "Lessons", "Others"
        ],
        datasets: [{
            data: [18, 12, 5, 16, 18, 13, 2, 15, 7, 16],
            backgroundColor: "#A82C32",
            borderRadius: 4,
            barPercentage: 0.4,
        }]
    },
    options: {
        plugins: {
            legend: false,
            tooltip: {
                enabled: false
            }
        },
        scales: {
            x: {
                grid: {
                    color: '#FA8D50',
                },
                border: {
                    dash: [3, 3],
                },
                ticks: {
                    autoSkip: false
                }
            },
            y: {
                grid: {
                    color: '#FA8D50',
                },
                border: {
                    dash: [3, 3],
                },
                beginAtZero: true,
                grace: "3%"
            }
        }
    }
});

const assesment = document.getElementById('assesmentTagType');
new Chart(assesment, {
    type: 'bar',
    data: {
        labels: [
            ["Content", "Area"], "Grade", "Chapter", ["CCSS", "Math St..."], "Unit", "Volume", ["CCSS", "Math St..."],
            ["Keywords", "-M"], "Others"
        ],
        datasets: [{
            data: [18, 12, 5, 16, 18, 13, 2, 15, 7, 16],
            backgroundColor: "#A82C32",
            borderRadius: 4,
            barPercentage: 0.6,
        }]
    },
    options: {
        plugins: {
            legend: false,
            tooltip: {
                enabled: false
            }
        },
        scales: {
            x: {
                grid: {
                    color: '#FA8D50',
                },
                border: {
                    dash: [3, 3],
                },
                ticks: {
                    autoSkip: false
                }
            },
            y: {
                grid: {
                    color: '#FA8D50',
                },
                border: {
                    dash: [3, 3],
                },
                beginAtZero: true,
                grace: "3%"
            },

        }
    }
});

const doughnut = document.getElementById('doughnutChart');
const chartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    data: [19, 12, 3, 5, 5, 3],
}
new Chart(doughnut, {
    type: 'doughnut',
    data: {
        labels: chartData.labels,
        datasets: [{
            data: chartData.data,
            backgroundColor: [
                '#0FC6C2',
                '#165DFF',
                '#39a7a4',
                '#F7BA1E',
                '#722ED1',
                '#D91AD9',
            ],
            borderColor: [
                '#0FC6C2',
                '#165DFF',
                '#39a7a4',
                '#F7BA1E',
                '#722ED1',
                '#D91AD9',
            ],
            hoverBorderWidth: 1,
            hoverBorderColor: "black"
        }]
    },
    options: {
        plugins: {
            legend: false,
            tooltip: {
                enabled: false
            },
            datalabels: {
                formatter: (value, context) => {
                    console.log(context)
                    const datapoints = context.chart.data.datasets[0].data;
                    console.log(datapoints)

                    function totalSum(total, datapoint) {
                        return total + datapoint
                    }
                    const totalvalue = datapoints.reduce(totalSum, 0);
                    const percentageValue = (value / totalvalue * 100).toFixed(1);
                    return `${percentageValue}%`
                },
                color: "#ffffff",
            },

        },

    },
    plugins: [ChartDataLabels],


});

const sessionGraphOne = document.getElementById('sessionChartOne');
new Chart(sessionGraphOne, {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Brown'],
        datasets: [{
            data: [30, 70],
            backgroundColor: [
                '#A82C32',
                '#35363A',
            ]
        }]
    },
    options: {
        plugins: {
            legend: false,
            tooltip: {
                enabled: false
            }
        },
    }
});
const sessionGraphTwo = document.getElementById('sessionChartTwo');
new Chart(sessionGraphTwo, {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Brown'],
        datasets: [{
            data: [30, 70],
            backgroundColor: [
                '#A82C32',
                '#35363A',
            ]
        }]
    },
    options: {
        plugins: {
            legend: false,
            tooltip: {
                enabled: false
            }
        },
    }
});

const sessionGraphThree = document.getElementById('sessionChartThree');
new Chart(sessionGraphThree, {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Brown'],
        datasets: [{
            data: [30, 70],
            backgroundColor: [
                '#A82C32',
                '#35363A',
            ]
        }]
    },
    options: {
        plugins: {
            legend: false,
            tooltip: {
                enabled: false
            }
        },
    }
});

const sessionGraphFour = document.getElementById('sessionChartFour');
new Chart(sessionGraphFour, {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Brown'],
        datasets: [{
            data: [30, 70],
            backgroundColor: [
                '#A82C32',
                '#35363A',
            ]
        }]
    },
    options: {
        plugins: {
            legend: false,
            tooltip: {
                enabled: false
            }
        },
    }
});

const sessionGraphQuestion = document.getElementById('sessionChartQuestionOne');
new Chart(sessionGraphQuestion, {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Brown'],
        datasets: [{
            data: [30, 70],
            backgroundColor: [
                '#A82C32',
                '#35363A',
            ]
        }]
    },
    options: {
        plugins: {
            legend: false,
            tooltip: {
                enabled: false
            }
        },
    }
});


//-----------author dashboard doughnut----------//

