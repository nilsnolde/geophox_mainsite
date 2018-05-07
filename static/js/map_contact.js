var home_coords = [52.490972, 13.413480]
var mymap = L.map('map_contact').setView(home_coords, 13);
L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mymap);

var home_marker = L.marker(home_coords).addTo(mymap);

var home_popup = "<b>Geophox - Nils Nolde</b><br><br>Fichtestraße 32<br>10967 Berlin"
home_marker.bindPopup(home_popup)
