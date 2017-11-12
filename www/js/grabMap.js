var userLocation;
function onReady() {
    "use strict";

    var sbt_btn = document.getElementById("submit_btn");
    var inputTxt = document.getElementById("autocomplete");
    var intputTime = document.getElementById("txt_time");
    var inputDate = document.getElementById("txt_date");
    
    sbt_btn.addEventListener("click", runLocation);
    
    inputTxt.addEventListener("keypress", function (event) {
        var key = event.which || event.key;
        if (key == 13){
            runLocation();
        }
    });
    
    function runLocation() {
        if (inputTxt.value) {
            userLocation = getLatLng(inputTxt.value, inputDate.value, intputTime.value);
        } else {
            initMap(globePosition, inputDate.value, intputTime.value);
        }
    
    }
}

onReady();