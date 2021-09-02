function Div4(){
    var blur = document.getElementById('blur'); 
    var popup = document.getElementById("div4_popup");
    blur.classList.toggle('active');
    popup.classList.toggle('active');
  }
var myMap = L.map("upExplore");
var layer = L.tileLayer.wms("https://bhuvan-vec2.nrsc.gov.in/bhuvan/wms",{
    version : "1.1.1",
    layers : "lulc:UP_LULC50K_1516",
    format : "image/png"
});
var corner1 = L.latLng(23.87, 77.084), corner2 = L.latLng(30.408, 84.634), bounds = L.latLngBounds(corner1, corner2);
var baseMaps = {"LULC MAP (ISRO Bhuvan Portal) UTTAR PRADESH":layer};
myMap.fitBounds(bounds);
myMap.addLayer(layer);
L.control.layers(baseMaps).addTo(myMap);