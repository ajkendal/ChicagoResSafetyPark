//https://data.cityofchicago.org/resource/6zsd-86xi.json
var requestURL = "https://data.cityofchicago.org/resource/6zsd-86xi.json";
var request = new XMLHttpRequest();
var primaryType = "CRIMINAL DAMAGE";
var description = "TO VEHICLE";

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    "use strict";
    var crimeData = request.response;
    
    var selections = crimeData.filter(function (crimes) {
        return(crimes.primary_type === primaryType && crimes.description === description);
    });
    
    /*for (var x = 0; x < selections.length; x++){
        document.writeln("ID" + selections[x].id + " " + selections[x].latitude + " " + selections[x].longitude + "\n");
    }*/
    
}