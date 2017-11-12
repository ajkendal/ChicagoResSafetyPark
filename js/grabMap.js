function onReady() {
    "use strict";

    var sbt_btn = document.getElementById("submit_btn");
    var inputTxt = document.getElementById("location_txt_field");
    
    
	/*$('#location-button').click(function(evt){
		if (navigator.geolocation) {
        	navigator.geolocation.watchPosition(showPos);
			
			$("#postcode-error").html('Loading...');
	    } else {
	        $("#postcode-error").html('Location unavailable');
	    }
	});*/
    
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
        
        
        
        
    }
}

onReady();