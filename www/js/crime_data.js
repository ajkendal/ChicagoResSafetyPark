//https://data.cityofchicago.org/resource/6zsd-86xi.json
var requestURL = "https://data.cityofchicago.org/resource/d62x-nvdr.json";
var request = new XMLHttpRequest();
var primaryType = "CRIMINAL DAMAGE";
var description = "TO VEHICLE";
var selections = "";

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    "use strict";
    var crimeData = request.response;
    
    
    selections = crimeData.filter(function (crimes) {
        return(crimes.primary_type === primaryType && crimes.description === description);
    });
}