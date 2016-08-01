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
	
      var pos_ju = ol.proj.fromLonLat([73.015137, 26.211819]);
      var jodhpur = new ol.Overlay({
        	position: pos_ju,
        	positioning: 'center-center',
        	element: document.getElementById('jodhpur'),
        	stopEvent: false
      });
      map.addOverlay(jodhpur);	
      var pos_dl = ol.proj.fromLonLat([77.209021, 28.613939]);
      var delhi = new ol.Overlay({
        	position: pos_dl,
        	positioning: 'center-center',
        	element: document.getElementById('delhi'),
        	stopEvent: false
      });
      map.addOverlay(delhi);
});
