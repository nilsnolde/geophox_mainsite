var layer = new L.StamenTileLayer('watercolor');
var map = new L.map('map_front', {
          center: new L.LatLng(52.48635, 13.43054),
          zoom:   10
});
map.addLayer(layer);
