
map = new OpenLayers.Map("map");
map.addLayer(new OpenLayers.Layer.OSM());

epsg4326 =  new OpenLayers.Projection("EPSG:4326"); 
projectTo = map.getProjectionObject();

var lonLat = new OpenLayers.LonLat( 78.9629, 23.3 ).transform(epsg4326, projectTo);
  

var zoom=5;
map.setCenter (lonLat, zoom);

var vectorLayer = new OpenLayers.Layer.Vector("Overlay");


var delhi = new OpenLayers.Feature.Vector(
    new OpenLayers.Geometry.Point(  77.209021,28.613939 ).transform(epsg4326, projectTo),
    {description:'<b>New Delhi</b><br>Capital of India'} ,
    {externalGraphic: 'img/marker.png', graphicHeight: 30, graphicWidth: 25, graphicXOffset:-12, graphicYOffset:-25  }
);    

var jaipur = new OpenLayers.Feature.Vector(
    new OpenLayers.Geometry.Point( 75.787271, 26.912434  ).transform(epsg4326, projectTo),
    {description:'<b>Jaipur</b><br>Capital of Rajasthan'} ,
    {externalGraphic: 'img/marker.png', graphicHeight: 30, graphicWidth: 25, graphicXOffset:-12, graphicYOffset:-25  }
);    

var ju = new OpenLayers.Feature.Vector(
    new OpenLayers.Geometry.Point( 73.021950, 26.283829  ).transform(epsg4326, projectTo),
    {description:'<b>Railway Junction</b><br>Jodhpur'} ,
    {externalGraphic: 'img/rail.png', graphicHeight: 35, graphicWidth: 30, graphicXOffset:-12, graphicYOffset:-25  }
);

var nrsc = new OpenLayers.Feature.Vector(
    new OpenLayers.Geometry.Point( 78.458365, 17.457913  ).transform(epsg4326, projectTo),
    {description:'National Remote Sensing Centre'} ,
    {externalGraphic: 'img/marker.png', graphicHeight: 35, graphicWidth: 30, graphicXOffset:-12, graphicYOffset:-25  }
);    
vectorLayer.addFeatures([delhi, jaipur, ju, nrsc]);


map.addLayer(vectorLayer);

var controls = {
selector: new OpenLayers.Control.SelectFeature(vectorLayer, { onSelect: createPopup, onUnselect: destroyPopup })
};

function createPopup(feature) {
feature.popup = new OpenLayers.Popup.FramedCloud("pop",
  feature.geometry.getBounds().getCenterLonLat(),
  null,
  '<div class="markerContent">'+feature.attributes.description+'</div>',
  null,
  true,
  function() { controls['selector'].unselectAll(); }
);

map.addPopup(feature.popup);
}

function destroyPopup(feature) {
feature.popup.destroy();
feature.popup = null;
}

map.addControl(controls['selector']);
controls['selector'].activate();


