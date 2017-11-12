var map;
function initMap() {
    var latLng = {lat: 41.804113, lng: -87.584454};
    var starIcon = "/img/small_star.png";
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: latLng,
        mapTypeId: 'terrain'
    });
    
    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        icon: starIcon
    });

}
