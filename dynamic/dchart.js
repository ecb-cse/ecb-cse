$(document).ready(function(){
	var view = new ol.View({
		center: ol.proj.fromLonLat([78.9629, 23.3]),
		zoom: 4.5,
		maxZoom : 18,
		minZoom : 2
    });
	
	var osm = new ol.layer.Tile({
			source: new ol.source.OSM (),
			
			name: 'osm'
    });
	
	var map = new ol.Map({
        target: 'map',
        conrols: ol.control.defaults().extend([
			new ol.control.ScaleLine(),
			new ol.control.ZoomSlider()
		]),
		renderer: 'canvas',
		layers: [osm],
		
		view: view
    });
	var u_id = [];
	var iconStyle;
	var iconFeature;
	$.ajax({
		url: "http://localhost/latlong.php",
		method: "GET",
		success: function(data) {
			console.log(data);
			
			var features = [];

			for( var i in data){
    				u_id.push(data[i].UniqueID);                               //get uid
    				var longitude = +data[i].Longitude;                         //coordinates
    				var latitude = +data[i].Latitude;
			    	console.log(u_id);console.log(longitude);console.log(latitude);
    				iconFeature = new ol.Feature({
        				geometry: new ol.geom.Point(ol.proj.transform([longitude, latitude], 'EPSG:4326', 'EPSG:3857'))
    				});

    				iconStyle = new ol.style.Style({
				    image: new ol.style.Circle({
				    	radius: 7,
				      	stroke: new ol.style.Stroke({
					      	color: '#3971AA',
					      	width: 3
				    	}),
				      	fill: new ol.style.Fill({
						color: 'rgba(18, 52, 86, .3)'
				      	})
				    })
			  	});
    				iconFeature.setStyle(iconStyle);
    				features.push(iconFeature);
		     	}

			var vectorSource = new ol.source.Vector({
			    features: features
			});

			var vectorLayer = new ol.layer.Vector({
			    source: vectorSource
			});
			map.addLayer(vectorLayer);
		},
		error: function(data) {
			console.log(data);
		}
	});
	iconFeature.on('click', function() {
        var ctx = document.getElementById("chart");
		/*$.ajax({
		url: "http://localhost/getchart.php",
		method: "GET",
		success: function(data) {
			console.log(data);
			var timestamp = [];
			var humidity = [];

			for(var i in data) {
				timestamp.push(data[i].TIMESTAMP);
				humidity.push(data[i].Humidity);
			}

			var chartdata = {
				labels: timestamp,
				datasets : [
					{
						label: 'Relative Humidity',
						backgroundColor: 'rgba(100, 100, 200, 0.75)',
						borderColor: 'rgba(200, 200, 200, 0.35)',
						hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
						hoverBorderColor: 'rgba(200, 200, 200, 1)',
						data: humidity
					}
				]
			};

			var ctx = $("#mycanvas");

			var barGraph = new Chart(ctx, {
				type: 'bar',
				data: chartdata,
				options: {
				responsive: true,
                title:{
                    display:true,
                    text:"Chart.js Time Point Data"
                },
				scales: {
					xAxes: [{
						type: "time",
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Date'
						}
					}],
					yAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'value'
						}
					}]
				},
				pan: {
                    enabled: true,
                    mode: 'xy'
                },
                zoom: {
                    enabled: true,
                    mode: 'x',
                    limits: {
                        max: 10,
                        min: 0.5
                    }
                }
			}
			});
		},
		error: function(data) {
			console.log(data);
		}
	});
*/console.log("hello")
	});	
      
});








