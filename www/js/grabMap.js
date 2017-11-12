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
            console.log("keyPress function");
            runLocation();
        }
    });
    
    function runLocation() {
        console.log("runLocation Function");
        
        console.log(intputTime.value);
        console.log(inputTxt.value);
        console.log(inputDate.value);
        
        initMap();
        
    }
}

onReady();