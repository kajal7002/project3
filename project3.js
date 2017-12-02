
function initMap() {
  var home = {lat: 19.264004, lng: 72.865569};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: home
  });
  var marker = new google.maps.Marker({
    position: home,
    map: map
  });
}