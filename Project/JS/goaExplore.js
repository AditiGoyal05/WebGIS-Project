
function Div3(){
    var blur = document.getElementById('blur'); 
    var popup = document.getElementById("div3_popup");
    blur.classList.toggle('active');
    popup.classList.toggle('active');
  }
  var myMap = L.map("goaExplore");
var layer = L.tileLayer.wms("https://bhuvan-vec2.nrsc.gov.in/bhuvan/wms",{
    version : "1.1.1",
    layers : "lulc:GA_LULC50K_1516",
    format : "image/png"
});
var corner1 = L.latLng(14.9,73.676), corner2 = L.latLng(15.801,74.336), bounds = L.latLngBounds(corner1, corner2);
var baseMaps = {"LULC MAP (ISRO Bhuvan Portal) GOA MAP":layer};
var geoJsonLayer = L.geoJson(village_goa);
var overlayMaps = {'Goa Village Boundaries':geoJsonLayer};
myMap.fitBounds(bounds);
myMap.addLayer(layer);
L.control.layers(baseMaps, overlayMaps).addTo(myMap);