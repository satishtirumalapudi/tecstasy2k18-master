<script>
  function myMap() {
  var myCenter = new google.maps.LatLng(17.393830, 78.319926);
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: myCenter, zoom: 16};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);
  google.maps.event.addListener(marker,'click',function() {
    var infowindow = new google.maps.InfoWindow({
      content:"CBIT ROBOVANZA"
    });
  infowindow.open(map,marker);
  });
}
</script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBisf-jOkHF3EObkyyQh4NukvZrEmaJCt0&callback=myMap"></script>