var myMap = L.map("sikkim", {
    minZoom: 8,
    maxZoom: 8
});
var layer = L.tileLayer.wms("https://bhuvan-vec2.nrsc.gov.in/bhuvan/wms", {
    version: "1.1.1",
    layers: "lulc:SK_LULC50K_1516",
    format: "image/png"
});
var corner1 = L.latLng(27.082, 88.012), corner2 = L.latLng(28.131, 88.922), bounds = L.latLngBounds(corner1, corner2);
myMap.fitBounds(bounds);
myMap.addLayer(layer);
