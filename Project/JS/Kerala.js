var myMap = L.map("kerala",{
    minZoom: 6,
    maxZoom: 6
});
var layer = L.tileLayer.wms("https://bhuvan-vec2.nrsc.gov.in/bhuvan/wms",{
    version : "1.1.1",
    layers : "lulc:KL_LULC50K_1516",
    format : "image/png"
});
var corner1 = L.latLng(8.289,74.862), corner2 = L.latLng(12.795,77.413), bounds = L.latLngBounds(corner1, corner2);
myMap.fitBounds(bounds);
myMap.addLayer(layer);
