$(document).ready(function(){
$('#jodhpur').click(function() {
        var ctx = document.getElementById("jdr");
        var myChart = new Chart(ctx, {
	        type: 'line',
	        data: {
		        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
		        datasets: [
			        {
                    label: "Record High(\xB0C)",
                    fill: true,
                    lineTension: 0.5,
                    backgroundColor: "rgba(255,0,0,0.4)",
                    borderColor: "rgba(255,0,0,1)",
                    borderCapStyle: 'butt',
                    borderDash: [5,5],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(0,0,0,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [31.2, 36.0, 41.6, 45.0, 47.4, 47.8, 42.6, 40.3, 43.5],
                    spanGaps: true,
			        borderWidth: 2
                },
		        {
                    label: "Average High(\xB0C)",
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: "rgba(255,102,102,0.4)",
                    borderColor: "rgba(255,102,102,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(0,0,0,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [24.5, 27.4, 33.4, 38.4, 41.4, 40.0, 35.2, 33.5, 34.9],
                    spanGaps: false,
			        borderWidth: 2
                },
		        {
                    label: "Average Low(\xB0C)",
                    fill: true,
                    lineTension: 0.5,
                    backgroundColor: "rgba(51,153,255,0.4)",
                    borderColor: "rgba(51,153,255,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(0,0,0,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [9.6, 11.7, 17.3, 22.6, 26.5, 27.8, 26.4, 25.4, 23.9],
                    spanGaps: false,
			        borderWidth: 2
                },
		        {
                    label: "Record low(\xB0C)",
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: "rgba(0,0,204,0.4)",
                    borderColor: "rgba(0,0,204,1)",
                    borderCapStyle: 'butt',
                    borderDash: [5,5],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(0,0,0,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [1.8, 0.7, 4.4, 15.6, 15.4, 20.0, 21.0, 21.2, 18.4],
                    spanGaps: false,
			        borderWidth: 2
                }
		        ]
	        },
	        options: {
		        title: {
			        display: true,
			        text: "Jodhpur Temperature Data"
		        },
                tooltips: {
                        mode: 'label',
                        callbacks: {}
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
});
$('#delhi').click(function() {
	
        var ctx = document.getElementById("dlh");
        var myChart = new Chart(ctx, {
	        type: 'line',
	        data: {
		        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
		        datasets: [
			        {
                    label: "Record High(\xB0C)",
                    fill: true,
                    lineTension: 0.5,
                    backgroundColor: "rgba(255,0,0,0.4)",
                    borderColor: "rgba(255,0,0,1)",
                    borderCapStyle: 'butt',
                    borderDash: [5,5],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(0,0,0,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [30.0,34.1,40.6,45.6,47.2,46.7,45.0,42.0],
                    spanGaps: true,
			        borderWidth: 2
                },
		        {
                    label: "Average High(\xB0C)",
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: "rgba(255,102,102,0.4)",
                    borderColor: "rgba(255,102,102,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(0,0,0,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [21.0,23.5,29.2,36.0,39.2,38.8,30.8,30.0],
                    spanGaps: false,
			        borderWidth: 2
                },
		        {
                    label: "Average Low(\xB0C)",
                    fill: true,
                    lineTension: 0.5,
                    backgroundColor: "rgba(51,153,255,0.4)",
                    borderColor: "rgba(51,153,255,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(0,0,0,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [7.6,10.1,15.3,21.6,25.9,27.8,26.8,26.3],
                    spanGaps: false,
			        borderWidth: 2
                },
		        {
                    label: "Record low(\xB0C)",
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: "rgba(0,0,204,0.4)",
                    borderColor: "rgba(0,0,204,1)",
                    borderCapStyle: 'butt',
                    borderDash: [5,5],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(0,0,0,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [-0.6,1.6,4.4,10.7,15.2,18.9,20.3,20.7],
                    spanGaps: false,
			        borderWidth: 2
                }
		        ]
	        },
	        options: {
		        title: {
			        display: true,
			        text: "Delhi Temperature Data"
		        },
                tooltips: {
                        mode: 'label',
                        callbacks: {}
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
	
});
});




