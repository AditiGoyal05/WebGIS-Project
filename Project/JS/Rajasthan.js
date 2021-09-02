var myMap = L.map("rajasthan",{
    minZoom: 5,
    maxZoom: 5
});
var layer = L.tileLayer.wms("https://bhuvan-vec2.nrsc.gov.in/bhuvan/wms",{
    version : "1.1.1",
    layers : "lulc:RJ_LULC50K_1516",
    format : "image/png"
});
var corner1 = L.latLng(23.062, 69.482), corner2 = L.latLng(30.198, 78.272), bounds = L.latLngBounds(corner1, corner2);
myMap.fitBounds(bounds);
myMap.addLayer(layer);
