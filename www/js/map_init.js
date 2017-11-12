var map;

function initMap(userLocation, userDate, userTime) {
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
    
    for (var i = 0; i < selections.length; i++){
        var latLng = new google.maps.LatLng(selections[i].latitude,selections[i].longitude);

        var marker = new google.maps.Marker({'position': latLng});
        markers.push(marker);
    }
    
    var options = {
        minClusterSize: 1,
        imagePath: '/ChicagoResSafetyPark/img/m'
    };

    var markerCluster = new MarkerClusterer(map, markers,options);
    
    
    /*var apiCustomUrl = "https://cors.io/?https://mellodi.pythonanywhere.com/setBucket";
    var apiRequest = new XMLHttpRequest();
    apiRequest.open('GET', requestURL);
    
    var obj = { "lat": userLocation.lat, "lng": userLocation.lng, "date": userDate, "time": userTime};
    
    var newJson = JSON.stringify(obj);
    
    console.log(newJson);

    
    $.post(apiCustomUrl, {
        javascript_data: newJson
    });*/
}
