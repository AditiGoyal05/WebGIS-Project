function Div7(){
    var blur = document.getElementById('blur'); 
    var popup = document.getElementById("div7_popup");
    blur.classList.toggle('active');
    popup.classList.toggle('active');
  }
var myMap = L.map("chattisgarhExplore");
var layer = L.tileLayer.wms("https://bhuvan-vec2.nrsc.gov.in/bhuvan/wms",{
    version : "1.1.1",
    layers : "lulc:CH_LULC50K_1516",
    format : "image/png"
});
var corner1 = L.latLng(17.782, 80.246), corner2 = L.latLng(24.105,84.396), bounds = L.latLngBounds(corner1, corner2);
var baseMaps = {"LULC MAP (ISRO Bhuvan Portal) CHATTISGARH":layer};

myMap.fitBounds(bounds);
myMap.addLayer(layer);
L.control.layers(baseMaps).addTo(myMap);