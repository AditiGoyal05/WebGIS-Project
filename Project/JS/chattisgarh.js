var myMap = L.map("chattisgarh",{
    minZoom: 5,
    maxZoom: 5
});
var layer = L.tileLayer.wms("https://bhuvan-vec2.nrsc.gov.in/bhuvan/wms",{
    version : "1.1.1",
    layers : "lulc:CH_LULC50K_1516",
    format : "image/png"
});
var corner1 = L.latLng(17.782, 80.246), corner2 = L.latLng(24.105,84.396), bounds = L.latLngBounds(corner1, corner2);
myMap.fitBounds(bounds);
myMap.addLayer(layer);
