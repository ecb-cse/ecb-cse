$(document).ready(function(){
	var iconStyle;
	var iconFeature;
	$.ajax({
		url: "https://github.com/ecb-cse/ecb-cse/blob/gh-pages/latlong.php",
		method: "GET",
		success: function(data) {
			
			//var features = [];

			
			


			for( var i in data){
    				//u_id1.push(data[i].UniqueID);
    				var u_id = data[i].UniqueID;                               //get uid
    				//longitude1.push(data[i].Longitude);
				var longitude = +data[i].Longitude;                         //coordinates
    				//latitude1.push(data[i].Latitude);
				var latitude = +data[i].Latitude;
				//LatestTemp1.push(data[i].TempLatest);
				var LatestTemp = +data[i].TempLatest;
				//LatestHumidity1.push(data[i].HumidityLatest);
				var LatestHumidity = +data[i].HumidityLatest;
			    	//console.log(u_id1[i]);console.log(longitude1[i]);console.log(latitude);

    				var iconFeature = new ol.Feature({
  					geometry: new ol.geom.Point(ol.proj.transform([longitude, latitude], 'EPSG:4326', 'EPSG:3857')),
  					name: 'ID: '+u_id+' LatestTemperature: '+LatestTemp+' LatestHumidity: '+LatestHumidity ,
				});
				
				
				

				/*var iconStyle = new ol.style.Style({
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
			  	});*/
				var iconStyle = new ol.style.Style({
				  image: new ol.style.Icon( ({
				    anchor: [0.5, 46],
				    anchorXUnits: 'fraction',
				    anchorYUnits: 'pixels',
				    opacity: 0.75,
				    src: 'img/icon.jpg'
				  }))
				});

				iconFeature.setStyle(iconStyle);

				var vectorSource = new ol.source.Vector({
				  features: [iconFeature]
				});

				var vectorLayer = new ol.layer.Vector({
				  source: vectorSource
				});
				map.addLayer(vectorLayer);
				
			}
		},
		error: function(data) {
			console.log(data);
		}
	});
	var osm = new ol.layer.Tile({
   		source: new ol.source.OSM ()
	});

	var map = new ol.Map({
		controls: ol.control.defaults({
	          attributionOptions:({
	            collapsible: false
	          })
	        }),
		layers: [osm],
  		target: document.getElementById('map'),
  		view: new ol.View({
    			center: ol.proj.fromLonLat([78.9629, 23.3]),
    			zoom: 4.5
  		})
	});
	
	var element = document.getElementById('popup');

	var popup = new ol.Overlay({
  		element: element,
  		positioning: 'bottom-center',
  		stopEvent: false
	});
	map.addOverlay(popup);

	// display popup on click
	map.on('click', function(evt) {
		var feature = map.forEachFeatureAtPixel(evt.pixel,
	      	function(feature, layer) {
			return feature;
	      	});
  		if (feature) {
	    		var geometry = feature.getGeometry();
	    		var coord = evt.coordinate;
	    		popup.setPosition(coord);
			console.log(coord[1]);console.log(coord);
	    		$(element).popover({
	      			'placement': 'bottom',
	      			'html': true,
	      			'content': [feature.get('name'),'<br><button  onclick= "myname()">Show more data</button><script>function myname(){console.log(`hello`);window.location.assign("chart.html");};</script>'],
				'title' : 'Latest Data<a href="#" class="close" data-dismiss="alert">&times;</a>',

	    		});

	    		$(element).popover('show');

  		} 
		else {
    			$(element).popover('destroy');
  		}
	});
	// change mouse cursor when over marker
	map.on('pointermove', function(e) {
	  	if (e.dragging) {
		    	$(element).popover('destroy');
		    	return;
	  	}
	  	var pixel = map.getEventPixel(e.originalEvent);
	  	var hit = map.hasFeatureAtPixel(pixel);
	  	map.getTarget().style.cursor = hit ? 'pointer' : '';
	});
	
});
	

