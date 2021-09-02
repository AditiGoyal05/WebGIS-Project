function Div1(){
    var blur = document.getElementById('blur'); 
    var popup = document.getElementById("div1_popup");
    blur.classList.toggle('active');
    popup.classList.toggle('active');
  }
var myMap = L.map("delhiExplore");

// var myMap2 = L.map("delhiii");

var layer = L.tileLayer.wms("https://bhuvan-vec2.nrsc.gov.in/bhuvan/wms",{
    version : "1.1.1",
    layers : "lulc:DL_LULC50K_1516",
    format : "image/png"
});
var corner1 = L.latLng(28.404,76.84), corner2 = L.latLng(28.883,77.345), bounds = L.latLngBounds(corner1, corner2);

var baseMaps = {"LULC MAP (ISRO Bhuvan Portal) DELHI MAP":layer};

myMap.fitBounds(bounds);
myMap.addLayer(layer);
L.control.layers(baseMaps).addTo(myMap); 