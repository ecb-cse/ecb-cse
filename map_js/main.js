$(document).ready(function(){
	var view = new ol.View({
		center: ol.proj.fromLonLat([78.9629, 23.3]),
		zoom: 4.5,
		maxZoom : 18,
		minZoom : 2
    })
	var mapquest = new ol.layer.Tile({
			source: new ol.source.MapQuest ({
			layer: 'sat'
		}),
		visible: true,
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
		visible: false,
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
	var map = new ol.Map({
        target: 'map',
        conrols: ol.control.defaults().extend([
			new ol.control.ScaleLine(),
			new ol.control.ZoomSlider()
		]),
		renderer: 'canvas',
		layers: [mapquest, osm, toner, stamen],
		view: view
    });
	
	$('#layers input[type=radio]').change(function(){
		var layer = $(this).val();
		
		map.getLayers().getArray().forEach(function(e){
			var name = e.get('name');
			e.setVisible(name == layer);
		});
	});
});
