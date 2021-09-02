function Div5(){
    var blur = document.getElementById('blur'); 
    var popup = document.getElementById("div5_popup");
    blur.classList.toggle('active');
    popup.classList.toggle('active');
  }
var myMap = L.map("sikkimExplore");
var layer = L.tileLayer.wms("https://bhuvan-vec2.nrsc.gov.in/bhuvan/wms", {
    version: "1.1.1",
    layers: "lulc:SK_LULC50K_1516",
    format: "image/png"
});
var corner1 = L.latLng(27.082, 88.012), corner2 = L.latLng(28.131, 88.922), bounds = L.latLngBounds(corner1, corner2);

var baseMaps = {"LULC MAP (ISRO Bhuvan Portal) SIKKIM":layer};
var geoJsonLayer = L.geoJson(village_sikkim);
var overlayMaps = {'Sikkim Village Boundaries':geoJsonLayer};

myMap.fitBounds(bounds);
myMap.addLayer(layer);
L.control.layers(baseMaps, overlayMaps).addTo(myMap);

