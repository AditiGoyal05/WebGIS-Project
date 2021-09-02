alert('Request to view in laptop/PC');
var myMap = L.map("goa",{
    minZoom: 8,
    maxZoom: 8
});
var layer = L.tileLayer.wms("https://bhuvan-vec2.nrsc.gov.in/bhuvan/wms",{
    version : "1.1.1",
    layers : "lulc:GA_LULC50K_1516",
    format : "image/png"
});
var corner1 = L.latLng(14.9,73.676), corner2 = L.latLng(15.801,74.336), bounds = L.latLngBounds(corner1, corner2);
myMap.fitBounds(bounds);
myMap.addLayer(layer);
