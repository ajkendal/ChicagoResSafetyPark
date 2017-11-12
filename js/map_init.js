var map;
function initMap() {
    console.log()
    var latLng = {lat: globeGeo.lat, lng: globeGeo.lng};
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

}
