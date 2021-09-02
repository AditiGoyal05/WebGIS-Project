function Div6(){
    var blur = document.getElementById('blur'); 
    var popup = document.getElementById("div6_popup");
    blur.classList.toggle('active');
    popup.classList.toggle('active');
  }
var myMap = L.map("keralaExplore");
var layer = L.tileLayer.wms("https://bhuvan-vec2.nrsc.gov.in/bhuvan/wms",{
    version : "1.1.1",
    layers : "lulc:KL_LULC50K_1516",
    format : "image/png"
});
var corner1 = L.latLng(8.289,74.862), corner2 = L.latLng(12.795,77.413), bounds = L.latLngBounds(corner1, corner2);
var baseMaps = {"LULC MAP (ISRO Bhuvan Portal) KERALA":layer};
var geoJsonLayer = L.geoJson(village_kerala);
var overlayMaps = {'Kerala Village Boundaries':geoJsonLayer};

myMap.fitBounds(bounds);
myMap.addLayer(layer);
L.control.layers(baseMaps, overlayMaps).addTo(myMap);