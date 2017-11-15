function initMap() {
  var uluru = {lat: 19.0759837, lng: 72.8776559};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom :10,
    center : uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map : map
  });
}