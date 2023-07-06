const doughnutChartTagsCreated = document.getElementById("doughnutChartTagsCreated");
const authotchartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green'],
    data: [50, 25,15, 10]
}
new Chart(doughnutChartTagsCreated, {
    type: 'doughnut',
    data: {
        labels: authotchartData.labels,
        datasets: [{
            data: authotchartData.data,
            backgroundColor: [
                '#028C07',
                '#E90000',
                '#E28800',
                '#003E9A',
            ],
            borderColor: [
                '#028C07',
                '#E90000',
                '#E28800',
                '#003E9A',
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


//------------author dashboard no data----------//

const questionsCreatedNodata = document.getElementById("questionsCreatedNoDataBar");
new Chart(questionsCreatedNodata, {
    type: 'bar',
    data: {
        // labels: ["Content Area","Grade","Chapter","CCSS Math St...","Unit","Volume","CCSS Math St...","Keywords -M","Others"],
        labels: [
            ["Content", "Area"], "Grade", "Chapter", ["CCSS", "Math St..."], "Unit", "Volume", ["CCSS", "Math St..."],
            ["Keywords", "-M"], "Lessons", "Others"
        ],
        datasets: [{
            // data: [18, 12, 5, 16, 18, 13, 2, 15, 7, 16],
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

const assesmentTag = document.getElementById('assesmentTagTypeNoData');
new Chart(assesmentTag, {
    type: 'bar',
    data: {
        labels: [
            ["Content", "Area"], "Grade", "Chapter", ["CCSS", "Math St..."], "Unit", "Volume", ["CCSS", "Math St..."],
            ["Keywords", "-M"], "Others"
        ],
        datasets: [{
            // data: [18, 12, 5, 16, 18, 13, 2, 15, 7, 16],
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




const authorDoughnut = document.getElementById("authorDoughnutNoData");
const authorData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green'],
    data: [50, 25, 15, 10],
}
new Chart(authorDoughnut, {
    type: 'doughnut',
    data: {
        labels: authorData.labels,
        datasets: [{
            data: authorData.data,
            backgroundColor: [
                '#CFCFCF',
                '#BDBDBD',
                '#B0B0B0',
                '#9F9F9F',
            ],
            borderColor: [
                '#CFCFCF',
                '#BDBDBD',
                '#B0B0B0',
                '#9F9F9F',
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

const questionCreated =  document.getElementById("questionCreated");
new Chart(questionCreated, {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Brown'],
        datasets: [{
            data: [100],
            backgroundColor: [
                // '#A82C32',
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

const assessmentCreated =  document.getElementById("assessmentCreated");
new Chart(assessmentCreated, {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Brown'],
        datasets: [{
            data: [100],
            backgroundColor: [
                // '#A82C32',
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

const tagsCreated =  document.getElementById("tagsCreated");
new Chart(tagsCreated, {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Brown'],
        datasets: [{
            data: [100],
            backgroundColor: [
                // '#A82C32',
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

