var map;
function initMap(userLocation) {
    console.log()
    var latLng = {lat: userLocation.lat, lng: userLocation.lng};
    var starIcon = "/ChicagoResSafetyPark/img/small_star.png";
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: latLng,
        mapTypeId: 'roadmap'
    });

    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        icon: starIcon
    });
    var markers = [];
    
    console.log(selections.length);
    
    for (var i = 0; i < selections.length; i++){
        var latLng = new google.maps.LatLng(selections[i].latitude,selections[i].longitude);

        var marker = new google.maps.Marker({'position': latLng});
        markers.push(marker);
    }
    
    var options = {
            minClusterSize: 1,
            imagePath: 'images/m'
    };

    var markerCluster = new MarkerClusterer(map, markers,options);
    
    var apiCustomUrl = "https://mellodi.pythonanywhere.com/bucketIdList";
    var apiRequest = new XMLHttpRequest();
    apiRequest.open('GET', apiCustomUrl, true);
    apiRequest.send();
    var apiResponse = apiRequest.responseText;
    
    console.log(apiResponse);
    
    /*//call the sweepStreet.py
    $.ajax({
        type: "POST",
        url: "/test",
        data: { param: " "},
        dataType: "text"
        }).done(function( o ) {
            
            alert("OK");
    });

    console.log()
   */
}
