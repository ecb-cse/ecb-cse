$(document).ready(function(){
	var view = new ol.View({
		center: ol.proj.fromLonLat([78.9629, 23.3]),
		zoom: 4.5,
		maxZoom : 18,
		minZoom : 2
    	});
	var mapquest = new ol.layer.Tile({
			source: new ol.source.MapQuest ({
			layer: 'sat'
		}),
		visible: false,
		name: 'mapquest'
    	});
	var osm = new ol.layer.Tile({
			source: new ol.source.OSM (),
			visible: false,
			name: 'osm'
    	});
	var toner = new ol.layer.Tile({
		source: new ol.source.Stamen({
			layer: 'toner'
		}),
		visible: true,
		name: 'toner'
    	});
	var stamen = new ol.layer.Group({
			layers: [
				new ol.layer.Tile({
					source: new ol.source.Stamen({
						layer: 'watercolor'
					})
				}),
				new ol.layer.Tile({
					source: new ol.source.Stamen({
						layer: 'terrain-labels'
					})
				})
			],
			visible: false,
			name: 'stamen'
    	});
	
	var TileJSON = new ol.layer.Tile({
        	source: new ol.source.TileJSON({
              		url: 'http://api.tiles.mapbox.com/v3/' +
                  		'mapbox.natural-earth-hypso-bathy.json',
              		crossOrigin: 'anonymous'
            	}),
		visible: false,
		name: 'TileJSON'
      	})
	var map = new ol.Map({
        	target: 'map',
        	conrols: ol.control.defaults().extend([
			new ol.control.ScaleLine(),
			new ol.control.ZoomSlider()
		]),
		renderer: 'canvas',
		layers: [mapquest, osm, toner, stamen, TileJSON],
		view: view
    	});
	
	$('#layers input[type=radio]').change(function(){
		var layer = $(this).val();
		
		map.getLayers().getArray().forEach(function(e){
			var name = e.get('name');
			e.setVisible(name == layer);
		});
	});

	var geolocation = new ol.Geolocation({
		projection: view.getProjection(),
		tracking: true
	});

	var style = new ol.style.Style({
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

	$('#geolocat').click(function() {
		var position = geolocation.getPosition();

		var point = new ol.layer.Vector({
			source: new ol.source.Vector({
				features: [
					new ol.Feature({
						geometry: new ol.geom.Point(position),
						text: 'My Location <br>'
					})
				]
			}),
			style: style
		});
		map.addLayer(point);
		view.setCenter(position);
		view.setResolution(2.388657133911758);
		return false;

	});
	
	$('#getisro').click(function() {
		var rrscw = ol.proj.fromLonLat([73.022814, 26.2050944]);

		var point = new ol.layer.Vector({
			source: new ol.source.Vector({
				features: [
					new ol.Feature({
						geometry: new ol.geom.Point(rrscw),
						text: 'RRSC-W, Jodhpur <br>'
					})
				]
			}),
			style: style
		});
		map.addLayer(point);
		view.setCenter(rrscw);
		view.setResolution(2.388657133911758);
		return false;

	});

});
