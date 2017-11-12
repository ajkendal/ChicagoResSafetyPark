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
    
    var apiCustomUrl = "https://cors.io/?https://mellodi.pythonanywhere.com/bucketIdList";

    $.get(apiCustomUrl, function(data){
        
    }).done(function(data) {
        var testing_lvl_1 = jQuery.parseJSON(data);

        //console.log(testing_lvl_1);

        for(var lvl_1 = 0; lvl_1 < testing_lvl_1.length; lvl_1++){
            //console.log("lvl1: lat" + testing_lvl_1[lvl_1].geometry.coordinates + " ");
            var polyObject = [];
            var newObjects = testing_lvl_1[lvl_1].geometry.coordinates;

            for(var lvl2 = 0; lvl2 <newObjects.length; lvl2++ ){
                //console.log(newObjects[lvl2]);
                var lvl3Object = newObjects[lvl2].toString();

                var ss = lvl3Object.split(",");  

                //console.log(ss);

                for(var index = 0; index < ss.length;index+=2){

                    //console.log(index);
                    next = index + 1;
                    //console.log(next);
                    var testing = {
                        lat: parseFloat(ss[next]),
                        lng: parseFloat(ss[index])
                    };
                    //console.log(testing);
                    polyObject.push(testing);

                }
                var allBlocks = new google.maps.Polygon({
                    paths: polyObject,
                    strokeColor: '#FF0000',
                    strokeOpacity: 0.5,
                    strokeWeight: 2,
                    fillColor: '#FF0000',
                    fillOpacity: 0.25
                });
                allBlocks.setMap(map);
            }
        }

    });
    
    
    /*var obj = { "lat": userLocation.lat, "lng": userLocation.lng, "date": userDate, "time": userTime};
    
    var newJson = JSON.stringify(obj);
    
    console.log(newJson);

    
    $.post(apiCustomUrl, {
        javascript_data: newJson
    });*/
}
