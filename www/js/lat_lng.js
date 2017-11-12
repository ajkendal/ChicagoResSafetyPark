//https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyBI3hkjcGqQFxbHBjyoMGN5AOGwkh_SO30

function getLatLng(inputText, userDate, userTime){
    var position = globePosition;
    inputText = inputText.split(' ').join('+');

    var requestUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + inputText + "&key=AIzaSyBI3hkjcGqQFxbHBjyoMGN5AOGwkh_SO30";

    $.get(requestUrl, function(data){
        
    }).done(function(data) {
        console.log(data.results[0].geometry.location);
        position = data.results[0].geometry.location;
        initMap(position, userDate, userTime);
  });
    
    
};