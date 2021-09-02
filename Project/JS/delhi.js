var myMap = L.map("delhi",{
    // editable:true,
    minZoom: 9,
    maxZoom: 8
});

// var myMap2 = L.map("delhiii");

var layer = L.tileLayer.wms("https://bhuvan-vec2.nrsc.gov.in/bhuvan/wms",{
    version : "1.1.1",
    layers : "lulc:DL_LULC50K_1516",
    format : "image/png"
});
var corner1 = L.latLng(28.404,76.84), corner2 = L.latLng(28.883,77.345), bounds = L.latLngBounds(corner1, corner2);

myMap.fitBounds(bounds);
myMap.addLayer(layer);

// myMap2.fitBounds(bounds);
// myMap2.addLayer(layer);